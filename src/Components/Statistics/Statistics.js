import React from "react";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const quizDatas = useLoaderData();
  const { data } = quizDatas;
  console.log(data);
  return <div>This Statistic</div>;
};

export default Statistics;
