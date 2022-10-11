import React, { useContext } from "react";
import { quizCatagoryContext } from "../Home/Home";

const Quiz = () => {
  const AllQuizCatagoris = useContext(quizCatagoryContext);
  const QuizCatagories = AllQuizCatagoris.data;
  return (
    <div className=" grid grid-cols-4 gap-3">
      {QuizCatagories.map((Catagortry) => {
        return (
          <div className="bg-emerald-50">
            <img className="w-52 h-52" src={Catagortry.logo} alt="" srcset="" />
            <div>
              <h1>{Catagortry.name}</h1>
              <h1>Total Quiz: {Catagortry.total}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Quiz;
