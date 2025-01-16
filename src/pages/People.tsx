import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & Lead Quantitative Trader",
    image: "/placeholder.svg",
    bio: "With over 15 years of experience in quantitative trading, John leads our strategy development and research initiatives.",
    setupImages: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    setupDescription: "High-performance trading setup with multiple monitors for real-time market analysis and automated trading systems."
  },
  {
    name: "Jane Smith",
    role: "Head of Technology",
    image: "/placeholder.svg",
    bio: "Jane brings extensive experience in high-frequency trading systems and infrastructure optimization.",
    setupImages: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    setupDescription: "Custom-built workstation optimized for complex computational tasks and algorithm development."
  }
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
          <h1 className="text-4xl font-bold mb-12 font-funnel">The People</h1>
          
          <div className="space-y-24">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-12"
              >
                {/* Founder Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-[400px] object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold font-funnel">{member.name}</h2>
                    <p className="text-trading-primary text-xl font-funnel">{member.role}</p>
                    <p className="text-gray-300 text-lg font-funnel">{member.bio}</p>
                  </div>
                </div>

                {/* Setup Section */}
                <div className="bg-black/30 p-8 rounded-lg space-y-6">
                  <h3 className="text-2xl font-bold font-funnel">Workspace Setup</h3>
                  <p className="text-gray-300 font-funnel">{member.setupDescription}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {member.setupImages.map((image, idx) => (
                      <img
                        key={idx}
                        src={image}
                        alt={`${member.name}'s setup ${idx + 1}`}
                        className="w-full h-[300px] object-cover rounded-lg"
                      />
                    ))}
                  </div>
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