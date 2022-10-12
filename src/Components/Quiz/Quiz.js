import React, { useContext } from "react";
import { quizCatagoryContext } from "../Home/Home";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Quiz = () => {
  const AllQuizCatagoris = useContext(quizCatagoryContext);
  const QuizCatagories = AllQuizCatagoris.data;
  console.log(QuizCatagories);
  return (
    <div className=" grid grid-cols-1 md:grid-cols-4 gap-3 ">
      {QuizCatagories.map((Catagortry) => {
        return (
          <div className="bg-emerald-50 flex flex-col justify-center items-center">
            <img
              className="w-52 h-52 mt-4"
              src={Catagortry.logo}
              alt=""
              srcset=""
            />
            <div className="flex w-full justify-evenly ">
              <h1 className="font-bold text-base lg:text-xl tracking-wide m-4">
                {Catagortry.name}
              </h1>
              <h1 className="font-bold text-base lg:text-xl tracking-wide m-4">
                Total Quiz: {Catagortry.total}
              </h1>
            </div>
            <Link
              className="flex bg-teal-600 w-full justify-center h-11 font-bold text-white text-2xl items-center hover:bg-teal-900"
              to={`home/${Catagortry.id}`}
            >
              Start Quiz
              <ChevronDoubleRightIcon className="h-8 w-8 text-black " />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Quiz;
