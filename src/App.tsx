import { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// 🤍 Loading Screen versi putih (clean + glow halus)
const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">

      {/* Soft Glow biar ga flat */}
      <div className="absolute w-80 h-80 bg-pink-300 blur-[120px] opacity-30 rounded-full"></div>

      {/* Animasi */}
      <div className="w-64 h-64 drop-shadow-[0_0_25px_rgba(255,0,150,0.4)]">
        <DotLottieReact
          src="https://lottie.host/1cd23ddd-2f88-4955-90c6-b7e4683430cd/UJVfiPzAEJ.lottie"
          autoplay
          loop
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Text */}
      <p className="mt-6 text-pink-500 text-sm tracking-widest animate-pulse">
        preparing something beautiful...
      </p>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;