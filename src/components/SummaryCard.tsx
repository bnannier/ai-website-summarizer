
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, ExternalLink, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface SummaryCardProps {
  summary: string;
  url: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ summary, url }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Summary copied to clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      toast({
        title: "Copy failed",
        description: "Failed to copy summary to clipboard.",
        variant: "destructive",
      });
    }
  };

  const openOriginalUrl = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="p-8 shadow-xl border-0 bg-white/90 backdrop-blur-sm animate-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            Summary Generated
          </h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="flex items-center gap-2 hover:bg-gray-50"
            >
              {copied ? (
                <>
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy
                </>
              )}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={openOriginalUrl}
              className="flex items-center gap-2 hover:bg-gray-50"
            >
              <ExternalLink className="w-4 h-4" />
              View Original
            </Button>
          </div>
        </div>

        <div className="border-l-4 border-blue-500 pl-6 py-2">
          <p className="text-gray-700 leading-relaxed text-lg font-medium">
            {summary}
          </p>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            <span className="font-medium">Source:</span>{' '}
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 underline hover:no-underline transition-all"
            >
              {url.length > 60 ? `${url.substring(0, 60)}...` : url}
            </a>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default SummaryCard;
