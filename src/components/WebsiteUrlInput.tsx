
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, ArrowRight } from "lucide-react";

interface WebsiteUrlInputProps {
  url: string;
  setUrl: (url: string) => void;
  isLoading: boolean;
  onSummarize: () => void;
}

const WebsiteUrlInput: React.FC<WebsiteUrlInputProps> = ({ url, setUrl, isLoading, onSummarize }) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isLoading) {
      onSummarize();
    }
  };

  return (
    <Card className="p-8 mb-8 shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
      <div className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="url-input" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-500" />
            Website URL
          </label>
          <div className="flex gap-3">
            <Input
              id="url-input"
              type="url"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyPress={handleKeyPress}
              className="text-lg py-6 border-2 border-gray-200 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-500 transition-colors dark:bg-gray-700"
              disabled={isLoading}
            />
            <Button
              onClick={onSummarize}
              disabled={isLoading || !url.trim()}
              size="lg"
              className="px-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Analyzing...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  Summarize
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WebsiteUrlInput;
