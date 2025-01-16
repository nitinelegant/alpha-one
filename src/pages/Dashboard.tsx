import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 2780 },
  { name: "May", value: 1890 },
  { name: "Jun", value: 2390 },
];

const stats = [
  { label: "Time Period", value: "2-5 Years" },
  { label: "Annualized Return", value: "15.7%" },
  { label: "Drawdown", value: "8.2%" },
  { label: "Deals Closed", value: "2,847" },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold font-funnel">Dashboard</h1>
            <Button
              onClick={() => navigate("/comparison")}
              className="bg-trading-primary hover:bg-trading-secondary font-funnel"
            >
              View Comparison
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => (
              <Card key={stat.label} className="glass-card">
                <CardContent className="p-6">
                  <p className="text-sm text-gray-400 font-funnel">{stat.label}</p>
                  <p className="text-2xl font-bold font-funnel mt-2">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="glass-card p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 font-funnel">Performance Overview</h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#666" fontFamily="Funnel Display" />
                  <YAxis stroke="#666" fontFamily="Funnel Display" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1A1A1A",
                      border: "1px solid #333",
                      fontFamily: "Funnel Display",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#10B981"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;