"use client";

import * as React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const monthlyData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
];

const pieData = [
  { browser: "chrome", users: 400, fill: "var(--chart-1)" },
  { browser: "safari", users: 300, fill: "var(--chart-2)" },
  { browser: "firefox", users: 200, fill: "var(--chart-3)" },
  { browser: "edge", users: 150, fill: "var(--chart-4)" },
];

const radarData = [
  { subject: "Design", score: 80 },
  { subject: "Code", score: 92 },
  { subject: "SEO", score: 75 },
  { subject: "Speed", score: 88 },
  { subject: "A11y", score: 90 },
  { subject: "UX", score: 84 },
];

const radialData = [
  { name: "completed", value: 72, fill: "var(--chart-1)" },
];

const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb", // biru
    },
    mobile: {
      label: "Mobile",
      color: "#f97316", // oren
    },
    users: {
      label: "Users",
      color: "#8b5cf6", // ungu
    },
    score: {
      label: "Score",
      color: "#10b981", // hijau
    },
    value: {
      label: "Value",
      color: "#ef4444", // merah
    },
  };

function ChartCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default function ChartsPage() {
  return (
    <main className="p-4 md:p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Charts Showcase</h1>
          <p className="text-muted-foreground mt-2">
            Area, Bar, Line, Pie, Radar, Radial, and Tooltip examples in one
            page.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <ChartCard title="Area Chart">
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <AreaChart data={monthlyData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                    type="monotone"
                    dataKey="desktop"
                    stroke="#2563eb"
                    fill="#2563eb"
                    fillOpacity={0.35}
                    />
                <Area
                    type="monotone"
                    dataKey="mobile"
                    stroke="#f97316"
                    fill="#f97316"
                    fillOpacity={0.3}
                />
              </AreaChart>
            </ChartContainer>
          </ChartCard>

          <ChartCard title="Bar Chart">
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <BarChart data={monthlyData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="desktop" fill="#2563eb" radius={8} />
                <Bar dataKey="mobile" fill="#f97316" radius={8} />  
              </BarChart>
            </ChartContainer>
          </ChartCard>

          <ChartCard title="Line Chart">
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <LineChart data={monthlyData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                    type="monotone"
                    dataKey="desktop"
                    stroke="#2563eb"
                    strokeWidth={3}
                    dot={{ r: 4, fill: "#2563eb" }}
                />
                <Line
                    type="monotone"
                    dataKey="mobile"
                    stroke="#f97316"
                    strokeWidth={3}
                    dot={{ r: 4, fill: "#f97316" }}
                />
              </LineChart>
            </ChartContainer>
          </ChartCard>

          <ChartCard title="Pie Chart">
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent nameKey="browser" />} />
                <Pie
                  data={pieData}
                  dataKey="users"
                  nameKey="browser"
                  innerRadius={60}
                  outerRadius={95}
                  paddingAngle={4}
                >
                  {pieData.map((entry) => (
                    <Cell key={entry.browser} fill={entry.fill} />
                  ))}
                  <LabelList
                    dataKey="browser"
                    position="outside"
                    className="fill-foreground text-xs"
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </ChartCard>

          <ChartCard title="Radar Chart">
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Radar
                dataKey="score"
                fill="#10b981"
                fillOpacity={0.45}
                stroke="#10b981"
                />
              </RadarChart>
            </ChartContainer>
          </ChartCard>

          <ChartCard title="Radial Chart">
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <RadialBarChart
                data={radialData}
                innerRadius="55%"
                outerRadius="95%"
                startAngle={90}
                endAngle={-270}
              >
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <RadialBar
                  dataKey="value"
                  background
                  cornerRadius={12}
                  fill="var(--chart-1)"
                />
              </RadialBarChart>
            </ChartContainer>
          </ChartCard>

          <ChartCard title="Tooltip Demo">
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <BarChart data={monthlyData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      indicator="line"
                      labelClassName="font-semibold"
                    />
                  }
                />
                <Bar dataKey="desktop" fill="var(--chart-1)" radius={8} />
              </BarChart>
            </ChartContainer>
          </ChartCard>
        </div>
      </div>
    </main>
  );
}