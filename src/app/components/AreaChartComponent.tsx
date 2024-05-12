import { BoxProps } from "@chakra-ui/react";
import { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
interface ChartType {
  primaryColor: string;
  secondaryColor: string;
  tertioryColor: string;
  wrapperProps: BoxProps;
}

const data = [
  {
    name: "A",
    uv: 40,
    pv: 24,
    amt: 24,
  },
  {
    name: "B",
    uv: 30,
    pv: 13,
    amt: 22,
  },
  {
    name: "C",
    uv: 20,
    pv: 98,
    amt: 2290,
  },
  {
    name: "D",
    uv: 27,
    pv: 39,
    amt: 20,
  },
  {
    name: "E",
    uv: 18,
    pv: 48,
    amt: 21,
  },
];

const AreaChartComponent = ({
  primaryColor,
  secondaryColor,
  tertioryColor,
  wrapperProps,
}: ChartType) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart
        width={500}
        height={200}
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={secondaryColor} stopOpacity={0.8} />
            <stop offset="95%" stopColor={secondaryColor} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="uv"
          stroke={primaryColor}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
