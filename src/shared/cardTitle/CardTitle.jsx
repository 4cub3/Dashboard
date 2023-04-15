import React from "react";
import threeDot from "../../assets/icons/Three-dotMenuIcon.svg";

const CardTitle = ({ headTitle, body }) => {
  return (
    <article className="gap-[1.9rem] ">
      <div className="flex items-center justify-between">
        <h3 className="leading-[1.9rem] font-semibold text-[1.6rem]">{headTitle} </h3>
        <button>
          <img src={threeDot} />
        </button>
      </div>
      <p className="leading-[1.7rem] text-[1.4rem] text-gray-500">{body}</p>
    </article>
  );
};

export default CardTitle;
