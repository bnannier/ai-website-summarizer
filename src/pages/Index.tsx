
import React from 'react';
import { Globe } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import SummaryCard from "@/components/SummaryCard";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import ApiKeyInput from "@/components/ApiKeyInput";
import WebsiteUrlInput from "@/components/WebsiteUrlInput";
import FeatureHighlights from "@/components/FeatureHighlights";
import { useWebsiteSummarizer } from "@/hooks/useWebsiteSummarizer";

const Index = () => {
  const {
    url,
    setUrl,
    summary,
    isLoading,
    apiKey,
    setApiKey,
    showApiKeyInput,
    handleSummarize
  } = useWebsiteSummarizer();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 -right-4 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-300 dark:bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg">
              <Globe className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-gray-100 dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-4">
            AI Website Summarizer
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Transform any website into a concise, AI-powered summary. Just paste a URL and let ChatGPT do the magic.
          </p>
        </div>

        {/* API Key Input */}
        <ApiKeyInput 
          showApiKeyInput={showApiKeyInput}
          apiKey={apiKey}
          setApiKey={setApiKey}
        />

        {/* Main Input Section */}
        <WebsiteUrlInput 
          url={url}
          setUrl={setUrl}
          isLoading={isLoading}
          onSummarize={handleSummarize}
        />

        {/* Loading State */}
        {isLoading && <LoadingSkeleton />}

        {/* Summary Result */}
        {summary && !isLoading && (
          <SummaryCard summary={summary} url={url} />
        )}

        {/* Feature highlights */}
        {!summary && !isLoading && <FeatureHighlights />}
      </div>
    </div>
  );
};

export default Index;
