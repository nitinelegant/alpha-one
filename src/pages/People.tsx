import Navigation from "@/components/Navigation";
import TextCarousel from "@/components/TextCarousel";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & Lead Quantitative Trader",
    image: "/people.jpg",
    bio: "With over 15 years of experience in quantitative trading, John leads our strategy development and research initiatives.",
    setupImages: ["/people.jpg", "/people.jpg"],
    setupDescription:
      "High-performance trading setup with multiple monitors for real-time market analysis and automated trading systems.",
  },
  {
    name: "Jane Smith",
    role: "Head of Technology",
    image: "/people.jpg",
    bio: "Jane brings extensive experience in high-frequency trading systems and infrastructure optimization.",
    setupImages: ["/people.jpg", "/people.jpg"],
    setupDescription:
      "Custom-built workstation optimized for complex computational tasks and algorithm development.",
  },
];

const People = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-3xl font-bold mb-6 md:mb-12 font-funnel">
            The People
          </h1>

          <div className="space-y-12 sm:space-y-24">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {index % 2 === 0 ? (
                    <>
                      <div className="space-y-4">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-32 sm:h-64 md:h-68 object-cover rounded-lg"
                        />
                      </div>
                      <div className="space-y-1 md:space-y-4">
                        <h2 className="text-3xl font-bold font-funnel">
                          {member.name}
                        </h2>
                        <p className="text-trading-primary text-xl font-funnel">
                          {member.role}
                        </p>
                        <p className="text-gray-300 text-lg font-funnel">
                          <span className="md:hidden block">
                            <TextCarousel
                              text={member?.bio}
                              characterLimit={100}
                            />
                          </span>
                          <span className="hidden md:block">{member?.bio}</span>
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-4 md:order-2">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-32 sm:h-64 md:h-68 object-cover rounded-lg"
                        />
                      </div>
                      <div className="space-y-1 md:space-y-4 md:order-1">
                        <h2 className="text-3xl font-bold font-funnel">
                          {member.name}
                        </h2>
                        <p className="text-trading-primary text-xl font-funnel">
                          {member.role}
                        </p>
                        <p className="text-gray-300 text-lg font-funnel">
                          <span className="md:hidden block">
                            <TextCarousel
                              text={member?.bio}
                              characterLimit={100}
                            />
                          </span>
                          <span className="hidden md:block">{member?.bio}</span>
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default People;
