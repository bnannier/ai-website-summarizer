
import React from 'react';
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";

const LoadingSkeleton: React.FC = () => {
  return (
    <Card className="p-8 shadow-xl border-0 bg-white/90 backdrop-blur-sm animate-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full">
            <Loader2 className="w-5 h-5 text-white animate-spin" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Analyzing Website</h2>
            <p className="text-sm text-gray-500">Please wait while we generate your summary...</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-3">
            <Skeleton className="h-4 w-full bg-gradient-to-r from-gray-200 to-gray-300" />
            <Skeleton className="h-4 w-5/6 bg-gradient-to-r from-gray-200 to-gray-300" />
            <Skeleton className="h-4 w-4/5 bg-gradient-to-r from-gray-200 to-gray-300" />
          </div>
          
          <div className="space-y-3 pt-4">
            <Skeleton className="h-4 w-full bg-gradient-to-r from-gray-200 to-gray-300" />
            <Skeleton className="h-4 w-3/4 bg-gradient-to-r from-gray-200 to-gray-300" />
          </div>
        </div>

        <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
          </div>
          <span className="text-sm text-gray-500 ml-2">Processing content...</span>
        </div>
      </div>
    </Card>
  );
};

export default LoadingSkeleton;
