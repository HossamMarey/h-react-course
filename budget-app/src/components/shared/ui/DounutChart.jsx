import React, { useMemo } from "react";

import { ResponsivePie } from "@nivo/pie";
import { useTransactions } from "../../../services/context/TransactionsContext";

const dataa = [
  {
    id: "java",
    label: "java",
    value: 17,
    color: "hsl(81, 70%, 50%)",
  },
  {
    id: "c",
    label: "c",
    value: 412,
    color: "hsl(276, 70%, 50%)",
  },
  {
    id: "python",
    label: "python",
    value: 137,
    color: "hsl(232, 70%, 50%)",
  },
  {
    id: "sass",
    label: "sass",
    value: 107,
    color: "hsl(24, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 85,
    color: "hsl(129, 70%, 50%)",
  },
];
const DounutChart = ({ type = "income" }) => {
  const { data } = useTransactions();

  const chartData = useMemo(() => {
    const filteredData = data.filter((item) => item.type === type);
    return filteredData.map((item, ix) => {
      return {
        id: item.title,
        label: item.title,
        value: Number(item.amount),
      };
    });
  }, [data, type]);

  return (
    <div className="w-full   h-[30rem]">
      <ResponsivePie
        data={chartData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#c5c5c5"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default DounutChart;
