import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface Strategy {
  title: string;
  description: string;
  media: Array<{
    type: "image" | "video";
    url: string;
  }>;
  subMedia: Array<{
    type: "image" | "video";
    url: string;
  }>;
}

const strategies: Strategy[] = [
  {
    title: "Hybrid Trend-Following",
    description:
      "Fusing qualitative insights with quantitative data to capture trends of the future.",
    subMedia: [
      {
        type: "image",
        url: "hybrid_trend.jpg",
      },
    ],
    media: [
      {
        type: "image",
        url: "/trend-following.png",
      },

      // {
      //   type: "image",
      //   url: "https://www.shutterstock.com/shutterstock/photos/2517281125/display_1500/stock-photo-colorado-fall-hike-in-breckenridge-2517281125.jpg",
      // },
      // { type: "video", url: "https://example.com/video.mp4" },
      // { type: "image", url: "/placeholder.svg" },
    ],
  },
  {
    title: "Statistical Arbitrage",
    description:
      "Uncovering future asset relationships beyond historical patterns",
    subMedia: [
      {
        type: "image",
        url: "Statistical_Arbitrage.jpg",
      },
    ],
    media: [
      { type: "image", url: "/stat-arbitrage.png" },

      // { type: "image", url: "/placeholder.svg" },
      // { type: "video", url: "https://example.com/video2.mp4" },
    ],
  },
  {
    title: "Options Arbitrage",
    description:
      "Utilizing the market inefficiencies in options space from pricing to liquidity dislocations.",
    subMedia: [
      {
        type: "image",
        url: "Options_Arbitrage.jpg",
      },
    ],
    media: [
      { type: "image", url: "/gamma-scale.png" },

      // { type: "image", url: "/graph-mix.png" },
      // { type: "image", url: "/graph-mix.svg" },
    ],
  },
];

const Works = () => {
  const [open, setOpen] = useState(false);
  const [currentStrategy, setCurrentStrategy] = useState<Strategy | null>(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const handleStrategyClick = (strategy: Strategy) => {
    setCurrentStrategy(strategy);
    setCurrentMediaIndex(0);
    setOpen(true);
  };

  const handleNext = () => {
    if (currentStrategy) {
      setCurrentMediaIndex((prev) =>
        prev === currentStrategy.media.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrev = () => {
    if (currentStrategy) {
      setCurrentMediaIndex((prev) =>
        prev === 0 ? currentStrategy.media.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold  mb-3 sm:mb-8 font-funnel">
            The Works
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 md:p-0 px-12 md:px-6 ">
            {strategies.map((strategy) => (
              <Card
                key={strategy.title}
                className="glass-card overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => handleStrategyClick(strategy)}
              >
                <div className="bg-white/5">
                  <img
                    src={strategy.media[0].url}
                    alt={strategy.title}
                    className="w-full h-32 sm:h-64 md:h-full " // Adjust height for mobile
                  />
                </div>
                <div className="p-2 sm:p-6">
                  <h2 className="text-sm md:text-2xl mb-0 md:mb-3 font-semibold  font-funnel">
                    {strategy.title}
                  </h2>
                  <p className="text-gray-400 font-funnel text-xs md:text-lg">
                    {strategy.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </main>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[90vw] md:max-w-[70vw] lg:max-w-[90vw] bg-trading-card border-trading-primary/20 p-0">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-20 z-50 rounded-full bg-black/50 p-2 hover:bg-black/70 transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {currentStrategy && (
            <div className="relative h-[100vh] lg:h-[90vh]">
              <div className="h-full w-full flex items-center justify-center">
                {currentStrategy.subMedia[currentMediaIndex].type ===
                "video" ? (
                  <video
                    src={currentStrategy.subMedia[currentMediaIndex].url}
                    className="w-full h-full object-contain"
                    controls
                  />
                ) : (
                  <img
                    src={currentStrategy.subMedia[currentMediaIndex].url}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {currentStrategy.subMedia.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentMediaIndex
                        ? "bg-trading-primary"
                        : "bg-white/50"
                    }`}
                    onClick={() => setCurrentMediaIndex(index)}
                  />
                ))}
              </div>

              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <span className="sr-only">Previous</span>←
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <span className="sr-only">Next</span>→
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Works;
