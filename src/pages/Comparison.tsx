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

    value2: "14.2%",
  },
  {
    label: "Annualized Return",
    value1: "8.2%",
    value2: "9.1%",
  },
  {
    label: "Drawdown",
    value1: "1.8",

    value2: "1.6",
  },
  {
    label: "Deals Closed",
    value1: "68%",

    value2: "65%",
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
            <h1 className="text-3xl sm:text-3xl font-bold mb-8 font-funneln ">
              Strategy Comparison
            </h1>
          </div>
          <h1 className="text-2xl font-bold  font-funnel mt-2">Summary</h1>
          {/* Summary Text */}
          <p className="text-lg text-gray-300 font-funnel mb-8">
            The performance overview below highlights key trends and insights
            over the past six months.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
            {comparisons.map((comparison) => (
              <Card key={comparison.label} className="glass-card">
                <CardContent className="p-2 sm:p-6">
                  <p className="text-sm text-gray-400 font-funnel">
                    {comparison.label}
                  </p>
                  <div className="flex justify-between  mt-1 sm:mt-2">
                    <p className="text-lg sm:text-2xl font-bold text-trading-primary font-funnel">
                      {comparison.value1}
                    </p>
                    <p className="text-lg sm:text-2xl font-bold text-blue-500 font-funnel">
                      {comparison.value2}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="w-full mt-8 p-4 sm:p-6 mb-4 sm:mb-8 bg-background/80 backdrop-blur-sm border-muted">
            <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">
              Performance Comparison
            </h2>
            <div className="h-[300px] sm:h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={data}
                  margin={{ top: 5, right: 10, left: -10, bottom: 5 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="hsl(var(--muted-foreground) / 0.2)"
                    vertical={true}
                    horizontal={true}
                  />
                  <XAxis
                    dataKey="name"
                    stroke="hsl(var(--muted-foreground))"
                    tick={{ fontSize: 12 }}
                    tickMargin={10}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    tick={{ fontSize: 12 }}
                    tickMargin={10}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)",
                      fontSize: "12px",
                    }}
                  />
                  <Legend
                    wrapperStyle={{
                      paddingTop: "20px",
                      fontSize: "12px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="strategy1"
                    name="Strategy 1"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="strategy2"
                    name="Strategy 2"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
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
