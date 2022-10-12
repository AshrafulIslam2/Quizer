import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { EyeIcon } from "@heroicons/react/24/solid";

const QuizPerCatagory = () => {
  const Datas = useLoaderData();
  const [quiz, SetQuiz] = useState();
  const [showans, SetShowans] = useState(false);
  const { data } = Datas;
  const { name, questions } = data;
  const chekCorrectAnswer = () => {
    const rightanswer = questions.find(
      (question) => question.correctAnswer === quiz
    );
    if (rightanswer) {
      toast.success("Great! Correct Answer.");
    } else {
      toast.error("Opps! Worng Answer.");
    }
  };

  return (
    <div className="w-full">
      <div className="w-full">
        <h1 className="text-2xl text-center  font-semibold">
          Quiz Name: <span className="text-4xl font-bold">{name}</span>
        </h1>
        <div>
          {" "}
          <Toaster />
        </div>
      </div>
      <div className="w-full">
        {questions.map((question) => {
          const { options } = question;
          return (
            <div className="m-10 w-full">
              <h1 className=" w-full text-center font-semibold m-5 flex justify-center items-center">
                {question.question.slice(3, -4)}
                <span className="pl-2">
                  <EyeIcon
                    className="h-5 w-5 text-black "
                    onClick={() => SetShowans(!showans)}
                  />
                </span>
              </h1>
              <h1
                className={
                  showans
                    ? `visible text-center font-bold text-2xl p-3`
                    : `hidden`
                }
              >
                {question.correctAnswer}
              </h1>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5  w-full mx-auto">
                {options.map((option) => {
                  return (
                    <div className="bg-emerald-600  shadow-xl w-96 p-4 mx-auto rounded-xl">
                      <input
                        className="cursor-pointer"
                        type="radio"
                        value={option}
                        name="quiz"
                        onChange={(e) => SetQuiz(e.target.value)}
                        onClick={chekCorrectAnswer}
                      />
                      <label className="text-center" for="quiz">
                        {option}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizPerCatagory;
