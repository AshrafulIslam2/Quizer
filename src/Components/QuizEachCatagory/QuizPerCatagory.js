import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const QuizPerCatagory = () => {
  const Datas = useLoaderData();
  const [quiz, SetQuiz] = useState();
  const { data } = Datas;
  const { name, questions } = data;
  console.log(questions);
  console.log(quiz);
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold">
          Quiz Name: <span className="text-4xl font-bold">{name}</span>
        </h1>
      </div>
      <div>
        {questions.map((question) => {
          const { options } = question;
          return (
            <div>
              <h1>{question.question.slice(3, -4)}</h1>
              <div className="grid grid-cols-2 gap-5">
                {options.map((option) => {
                  return (
                    <div className="bg-orange-400">
                      <input
                        type="radio"
                        value={option}
                        name="quiz"
                        onChange={(e) => SetQuiz(e.target.value)}
                      />
                      <label className="bg-red-400" for="quiz">
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
