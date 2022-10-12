import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const quizDatas = useLoaderData();
  const { data } = quizDatas;
  console.log(data);
  const renderLineChart = (
    <LineChart width={600} height={300} data={data} className="mx-auto mt-10">
      <Line type="monotone" dataKey="total" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
  return (
    <div>
      {renderLineChart}
      <h1
        className="text-center
      "
      >
        This Chart is about Quiz Total{" "}
      </h1>
    </div>
  );
};

export default Statistics;
