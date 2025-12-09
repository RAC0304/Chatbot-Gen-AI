"use client"

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const lineData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 600 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 800 },
  { name: "May", value: 900 },
  { name: "Jun", value: 1100 },
]

const barData = [
  { name: "Task A", value: 85 },
  { name: "Task B", value: 72 },
  { name: "Task C", value: 91 },
  { name: "Task D", value: 68 },
]

const pieData = [
  { name: "Completed", value: 65 },
  { name: "Pending", value: 25 },
  { name: "In Progress", value: 10 },
]

const COLORS = ["#22d3ee", "#a855f7", "#6366f1"]

export default function Dashboard() {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Analytics Dashboard</h1>
          <p className="text-foreground/60">Visualisasi data dan metrik AI Anda</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-card border-cyan-500/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-foreground/80">Total Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-cyan-400">12,543</p>
              <p className="text-xs text-foreground/60 mt-2">+12% dari bulan lalu</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-purple-500/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-foreground/80">Avg Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-purple-400">245ms</p>
              <p className="text-xs text-foreground/60 mt-2">-8% lebih cepat</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-blue-500/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-foreground/80">Accuracy Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-blue-400">94.2%</p>
              <p className="text-xs text-foreground/60 mt-2">+2.3% improvement</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-card border-cyan-500/20">
            <CardHeader>
              <CardTitle>Performance Trend</CardTitle>
              <CardDescription>Tren performa AI dalam 6 bulan terakhir</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1e293b",
                      border: "1px solid #0e7490",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#22d3ee"
                    strokeWidth={2}
                    dot={{ fill: "#22d3ee", r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-card border-purple-500/20">
            <CardHeader>
              <CardTitle>Task Efficiency</CardTitle>
              <CardDescription>Efisiensi penyelesaian task</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1e293b",
                      border: "1px solid #a855f7",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="value" fill="#a855f7" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Pie Chart */}
        <Card className="bg-card border-blue-500/20">
          <CardHeader>
            <CardTitle>Task Status Distribution</CardTitle>
            <CardDescription>Distribusi status task saat ini</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid #6366f1",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
