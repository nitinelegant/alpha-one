import BackButton from "@/components/BackButton";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", strategy1: 4000, strategy2: 3800 },
  { name: "Feb", strategy1: 3000, strategy2: 3200 },
  { name: "Mar", strategy1: 5000, strategy2: 4800 },
  { name: "Apr", strategy1: 2780, strategy2: 2900 },
  { name: "May", strategy1: 1890, strategy2: 2100 },
  { name: "Jun", strategy1: 2390, strategy2: 2500 },
];

const comparisons = [
  {
    label: "Time Period",
    value1: "15.7%",

    // value2: "14.2%"
  },
  {
    label: "Annualized Return",
    value1: "8.2%",
    //  value2: "9.1%"
  },
  {
    label: "Drawdown",
    value1: "1.8",

    // value2: "1.6"
  },
  {
    label: "Deals Closed",
    value1: "68%",

    // value2: "65%"
  },
];

const Comparison = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex  items-baseline gap-5">
            <BackButton />
            <h1 className="text-4xl font-bold mb-8 font-funnel">
              Strategy Comparison
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {comparisons.map((comparison) => (
              <Card key={comparison.label} className="glass-card">
                <CardContent className="p-6">
                  <p className="text-sm text-gray-400 font-funnel">
                    {comparison.label}
                  </p>
                  <div className="flex justify-between mt-2">
                    <p className="text-xl font-bold text-trading-primary font-funnel">
                      {comparison.value1}
                    </p>
                    <p className="text-xl font-bold text-blue-500 font-funnel">
                      {comparison.value2}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h1 className="text-2xl font-bold  font-funnel">Summary</h1>

          {/* Summary Text */}
          <p className="text-lg text-gray-300 font-funnel mb-8">
            The performance overview below highlights key trends and insights
            over the past six months. It showcases consistent growth patterns
            with minimal drawdowns, making it an ideal time to explore new
            opportunities.
          </p>

          <Card className="glass-card p-6">
            <h2 className="text-xl font-bold mb-4 font-funnel">
              Performance Comparison
            </h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis
                    dataKey="name"
                    stroke="#666"
                    fontFamily="Funnel Display"
                  />
                  <YAxis stroke="#666" fontFamily="Funnel Display" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1A1A1A",
                      border: "1px solid #333",
                      fontFamily: "Funnel Display",
                    }}
                  />
                  <Legend wrapperStyle={{ fontFamily: "Funnel Display" }} />
                  <Line
                    type="monotone"
                    dataKey="strategy1"
                    name="Strategy 1"
                    stroke="#10B981"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="strategy2"
                    name="Strategy 2"
                    stroke="#3B82F6"
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

export default Comparison;
