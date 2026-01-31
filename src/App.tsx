import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import ContextPage from "./pages/ContextPage";
import PeoplesPage from "./pages/PeoplesPage";
import ValuesPage from "./pages/ValuesPage";
import MissionPage from "./pages/MissionPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import DonationPage from "./pages/DonationPage";
import NotFound from "./pages/NotFound";

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
            <Route path="/context" element={<ContextPage />} />
            <Route path="/peoples" element={<PeoplesPage />} />
            <Route path="/values" element={<ValuesPage />} />
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/donation" element={<DonationPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
