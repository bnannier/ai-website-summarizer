
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Navigation */}
      <nav className="px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold text-gray-900">Your App</span>
          </div>
          <Button variant="outline" size="sm">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 mr-2" />
            Ready to build something amazing
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Your Blank Canvas
            <span className="block text-primary mt-2">Awaits Creation</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            Start building your next great idea with this clean, modern React foundation. 
            Everything you need, nothing you don't.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-200">
            <Button size="lg" className="px-8 py-3 text-lg group">
              Start Building
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
              View Docs
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="max-w-6xl mx-auto mt-24 grid md:grid-cols-3 gap-8">
          <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <div className="w-6 h-6 bg-blue-500 rounded-md"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Modern Stack</h3>
              <p className="text-gray-600 leading-relaxed">
                Built with React, TypeScript, Tailwind CSS, and modern development practices.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <div className="w-6 h-6 bg-green-500 rounded-md"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Responsive Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Fully responsive and optimized for all devices and screen sizes.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <div className="w-6 h-6 bg-purple-500 rounded-md"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ready to Scale</h3>
              <p className="text-gray-600 leading-relaxed">
                Clean architecture and best practices for scaling your application.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 mt-24 border-t border-gray-200 bg-white/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600">
            Built with ❤️ using React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
