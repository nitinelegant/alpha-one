import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { Card } from "../components/ui/card";
import { motion } from "framer-motion";
import {
  LineChartIcon as ChartLine,
  BookOpen,
  Users,
  LogIn,
} from "lucide-react";

const HomePage = () => {
  const features = [
    {
      title: "The Works",
      description: "Explore our advanced trading strategies and methodologies",
      icon: <ChartLine className="h-6 w-6 text-trading-primary" />,
      path: "/works",
    },
    {
      title: "Get Enlightened",
      description: "Dive deep into quantitative trading insights and knowledge",
      icon: <BookOpen className="h-6 w-6 text-trading-primary" />,
      path: "/enlightened",
    },
    {
      title: "The People",
      description: "Meet our team of expert traders and analysts",
      icon: <Users className="h-6 w-6 text-trading-primary" />,
      path: "/people",
    },
    {
      title: "Login",
      description: "Access your personalized trading dashboard",
      icon: <LogIn className="h-6 w-6 text-trading-primary" />,
      path: "/login",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[40vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] mt-12 sm:py-16 px-4">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat mt-5"
          style={{
            backgroundImage:
              "url('/uploads/b04b1c78-2065-4377-9f4b-ae62b7490acf.png')",
            opacity: 0.9,
          }}
        />
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 text-white tracking-tight font-funnel">
              from <span className="text-trading-primary">CHAOS</span> | we
              sculpt <span className="text-trading-primary">ORDER</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8 font-funnel">
              Leveraging data-driven strategies and advanced analytics for
              optimal trading performance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-2 md:py-12 bg-gradient-to-b from-black to-trading-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 sm:gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={feature.path}>
                  <Card className="glass-card h-full p-4 sm:p-6 md:p-8 group cursor-pointer">
                    <div className="mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-white group-hover:text-trading-primary transition-colors font-funnel">
                      {feature.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors font-funnel">
                      {feature.description}
                    </p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
