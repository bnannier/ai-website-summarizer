
import React from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AlertCircle } from "lucide-react";

interface ApiKeyInputProps {
  showApiKeyInput: boolean;
  apiKey: string;
  setApiKey: (key: string) => void;
}

const ApiKeyInput: React.FC<ApiKeyInputProps> = ({ showApiKeyInput, apiKey, setApiKey }) => {
  if (!showApiKeyInput) return null;

  return (
    <Card className="p-6 mb-8 border-orange-200 dark:border-orange-700 bg-orange-50/50 dark:bg-orange-900/20 backdrop-blur-sm">
      <div className="flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-orange-500 dark:text-orange-400 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">OpenAI API Key Required</h3>
          <p className="text-sm text-orange-700 dark:text-orange-300 mb-4">
            To use this app, you need to provide your OpenAI API key. Get one from{' '}
            <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-600 dark:hover:text-orange-200">
              OpenAI's platform
            </a>.
          </p>
          <Input
            type="password"
            placeholder="Enter your OpenAI API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="bg-white dark:bg-gray-800 border-orange-200 dark:border-orange-700 focus:border-orange-400 dark:focus:border-orange-500"
          />
        </div>
      </div>
    </Card>
  );
};

export default ApiKeyInput;
