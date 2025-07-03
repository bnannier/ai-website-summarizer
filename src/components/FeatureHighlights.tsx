
import React from 'react';
import { Card } from "@/components/ui/card";
import { Globe, Sparkles, ArrowRight } from "lucide-react";

const FeatureHighlights: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-12">
      <Card className="p-6 text-center border-0 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:shadow-lg">
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
          <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Any Website</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Works with blogs, news sites, documentation, and more</p>
      </Card>
      
      <Card className="p-6 text-center border-0 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:shadow-lg">
        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
          <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
        </div>
        <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">AI-Powered</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Powered by ChatGPT for intelligent, context-aware summaries</p>
      </Card>
      
      <Card className="p-6 text-center border-0 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:shadow-lg">
        <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
          <ArrowRight className="w-6 h-6 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Instant Results</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Get concise summaries in seconds, not minutes</p>
      </Card>
    </div>
  );
};

export default FeatureHighlights;
