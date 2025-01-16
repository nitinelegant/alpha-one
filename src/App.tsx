import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
// import Home2 from "./pages/Home2";
import Works from "./pages/Works";
import Enlightened from "./pages/Enlightened";
import People from "./pages/People";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Comparison from "./pages/Comparison";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Index />} />
            {/* <Route path="/home2" element={<Home2 />} /> */}
            <Route path="/works" element={<Works />} />
            <Route path="/enlightened" element={<Enlightened />} />
            <Route path="/people" element={<People />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/comparison" element={<Comparison />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
