import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { Card } from '../components/ui/card';
import { motion } from 'framer-motion';
import { ChartLine, BookOpen, Users, LogIn } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      title: 'The Works',
      description: 'Explore our advanced trading strategies and methodologies',
      icon: <ChartLine className="h-6 w-6 text-trading-primary" />,
      path: '/works'
    },
    {
      title: 'Get Enlightened',
      description: 'Dive deep into quantitative trading insights and knowledge',
      icon: <BookOpen className="h-6 w-6 text-trading-primary" />,
      path: '/enlightened'
    },
    {
      title: 'The People',
      description: 'Meet our team of expert traders and analysts',
      icon: <Users className="h-6 w-6 text-trading-primary" />,
      path: '/people'
    },
    {
      title: 'Login',
      description: 'Access your personalized trading dashboard',
      icon: <LogIn className="h-6 w-6 text-trading-primary" />,
      path: '/login'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-5rem)] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/lovable-uploads/b04b1c78-2065-4377-9f4b-ae62b7490acf.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.9
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight font-funnel">
              from <span className="text-trading-primary">CHAOS</span> | we sculpt <span className="text-trading-primary">ORDER</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 font-funnel">
              Leveraging data-driven strategies and advanced analytics for optimal trading performance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-trading-background relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={feature.path}>
                  <Card className="glass-card h-full p-8 group cursor-pointer">
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h2 className="text-2xl font-semibold mb-3 text-white group-hover:text-trading-primary transition-colors font-funnel">
                      {feature.title}
                    </h2>
                    <p className="text-gray-300 group-hover:text-white transition-colors font-funnel">
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
