import React from "react";
import EmptyIllustration from "../../assets/images/illustration-empty.svg";

const Result = ({ computedResult }) => {
  console.log(computedResult)
  return (
    <div className="bg-slate-900 p-8 flex-1 rounded-bl-[3.5rem] rounded-3xl rounded-tl-none">
      {computedResult ? (
        <div>
        <h1 className="text-white text-xl font-medium">Your results</h1>
        <p className="text-slate-300 leading-6 text-sm py-3">Your results are shown below based on the information you provided. To adjust the results, edit the form and click"calculate repayments" again.</p>
        <div className="bg-dark rounded-xl my-8 px-6 py-8 border-t-4 border-lime-500">
          <div className="border-b-[1px] border-slate-500">
            <h6 className="text-slate-300 text-sm">Your monthly replayments</h6>
            <h4 className="text-lime-500 text-5xl py-4 font-bold mb-5">£1,797.74</h4>
          </div>
          <div className="pt-8">
            <h6 className="text-slate-300 text-sm">Total you'll repay over the term</h6>
            <h5 className="text-white text-xl py-2 font-bold">£539,322.9</h5>
        </div>
        </div>
        </div>
      ) : (
        <div className="flex-col flex items-center h-full justify-center">
          <img src={EmptyIllustration} alt="empty-illustration" />
          <h1 className="text-white text-2xl mt-4 font-bold">
            Results shown here
          </h1>
          <h6 className="text-slate-500 text-md font-semibold text-center text-wrap mt-4">
            Complete the form and click "calculate repayments" to see what your
            monthly repayments would be.
          </h6>
        </div>
      )}
    </div>
  );
};

export default Result;
