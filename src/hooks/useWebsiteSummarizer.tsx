import { useState } from 'react';
import { toast } from "@/hooks/use-toast";

export const useWebsiteSummarizer = () => {
  const [url, setUrl] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(!apiKey || apiKey.trim() === '');

  const isValidUrl = (string: string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const normalizeUrl = (inputUrl: string) => {
    if (!inputUrl.match(/^https?:\/\//)) {
      return `https://${inputUrl}`;
    }
    return inputUrl;
  };

  const extractTextFromUrl = async (url: string) => {
    try {
      console.log('Attempting to extract text from:', url);
      
      let html = '';
      let fetchSuccessful = false;

      try {
        console.log('Trying direct fetch...');
        const response = await fetch(url, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
          }
        });
        
        if (response.ok) {
          html = await response.text();
          fetchSuccessful = true;
          console.log('Successfully fetched content directly');
        }
      } catch (directError) {
        console.log('Direct fetch failed:', directError);
      }

      if (!fetchSuccessful) {
        try {
          console.log('Trying no-cors mode...');
          const response = await fetch(url, {
            method: 'GET',
            mode: 'no-cors'
          });
          
          console.log('No-cors request completed, but cannot read response');
        } catch (noCorsError) {
          console.log('No-cors fetch also failed:', noCorsError);
        }
      }

      if (!fetchSuccessful) {
        console.log('Falling back to CORS proxies...');
        const proxies = [
          `https://api.allorigins.com/get?url=${encodeURIComponent(url)}`,
          `https://corsproxy.io/?${encodeURIComponent(url)}`
        ];

        for (const proxyUrl of proxies) {
          try {
            console.log('Trying proxy:', proxyUrl);
            const response = await fetch(proxyUrl, {
              headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
              }
            });
            
            if (response.ok) {
              const data = await response.text();
              if (proxyUrl.includes('allorigins.com')) {
                const jsonData = JSON.parse(data);
                html = jsonData.contents;
              } else {
                html = data;
              }
              fetchSuccessful = true;
              console.log('Successfully fetched content via proxy');
              break;
            }
          } catch (proxyError) {
            console.log('Proxy failed:', proxyError);
            continue;
          }
        }
      }

      if (!fetchSuccessful) {
        throw new Error('Unable to access the website. The site may have strict CORS policies or may be blocking requests.');
      }
      
      const textContent = html
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
        .replace(/<[^>]*>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      
      console.log('Extracted text length:', textContent.length);
      
      if (textContent.length < 100) {
        throw new Error('Unable to extract meaningful content from the website. The page might be empty or require JavaScript to load content.');
      }
      
      return textContent.substring(0, 4000);
    } catch (error) {
      console.error('Error extracting text:', error);
      throw error;
    }
  };

  const summarizeWithChatGPT = async (text: string) => {
    if (!apiKey) {
      throw new Error('Please provide your OpenAI API key');
    }

    console.log('Sending request to OpenAI API...');
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4.1-2025-04-14',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant that creates concise, informative summaries of website content. Focus on the main points and key information.'
          },
          {
            role: 'user',
            content: `Please summarize the following website content, highlighting the main points and key information:\n\n${text}`
          }
        ],
        max_tokens: 300,
        temperature: 0.3,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error('OpenAI API error:', response.status, errorData);
      throw new Error(`Failed to generate summary: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Successfully received summary from OpenAI');
    return data.choices[0].message.content;
  };

  const handleSummarize = async () => {
    if (!apiKey.trim()) {
      toast({
        title: "API Key Required",
        description: "Please enter your OpenAI API key first.",
        variant: "destructive",
      });
      setShowApiKeyInput(true);
      return;
    }

    if (!url.trim()) {
      toast({
        title: "URL Required",
        description: "Please enter a website URL to summarize.",
        variant: "destructive",
      });
      return;
    }

    const normalizedUrl = normalizeUrl(url.trim());

    if (!isValidUrl(normalizedUrl)) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid website URL.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setSummary('');

    try {
      const textContent = await extractTextFromUrl(normalizedUrl);
      const summaryResult = await summarizeWithChatGPT(textContent);
      setSummary(summaryResult);
      
      toast({
        title: "Summary Generated!",
        description: "Successfully summarized the website content.",
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to summarize the website. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    url,
    setUrl,
    summary,
    isLoading,
    apiKey,
    setApiKey,
    showApiKeyInput,
    setShowApiKeyInput,
    handleSummarize
  };
};
