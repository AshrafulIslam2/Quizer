import React, { createContext } from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
export const quizCatagoryContext = createContext();

const Home = () => {
  const quizSection = useLoaderData();

  return (
    <div>
      <quizCatagoryContext.Provider value={quizSection}>
        <Quiz></Quiz>
      </quizCatagoryContext.Provider>
    </div>
  );
};

export default Home;
