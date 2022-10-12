import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const QuizPerCatagory = () => {
  const Datas = useLoaderData();
  const [quiz, SetQuiz] = useState();
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
    <div>
      <div>
        <h1 className="text-2xl text-center  font-semibold">
          Quiz Name: <span className="text-4xl font-bold">{name}</span>
        </h1>
        <div>
          {" "}
          <Toaster />
        </div>
      </div>
      <div>
        {questions.map((question) => {
          const { options } = question;
          return (
            <div className="m-10">
              <h1 className="text-center font-semibold m-5">
                {question.question.slice(3, -4)}
              </h1>
              <div className="grid grid-cols-2 gap-5  w-full mx-auto">
                {options.map((option) => {
                  return (
                    <div className="bg-emerald-600   cursor-pointer shadow-xl w-96 p-4 mx-auto rounded-xl">
                      <input
                        className="cursor-pointer"
                        type="radio"
                        value={option}
                        name="quiz"
                        onChange={(e) => SetQuiz(e.target.value)}
                        onClick={chekCorrectAnswer}
                      />
                      <label className="text-center cursor-pointer" for="quiz">
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
