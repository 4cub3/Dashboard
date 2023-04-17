import React from "react";
import progressIcon from "../../assets/icons/ListprogressIcon.svg";
import linkIcon from "../../assets/icons/LinkSimpleHorizontallinkIcon.svg";
import commentIcon from "../../assets/icons/ChatTeardropDots.svg";
import Members from "../members/Members";

const CardProgress = ({
  image1,
  image2,
  image3,
  progress,
  comments,
  links,
  className,
  claculatedWidth,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-[1.4rem] leading-[1.7rem]">
        <p className="text-gray-400 flex items-center gap-2">
          <img src={progressIcon} alt="" /> Progress
        </p>
        <p className="font-semibold dark:text-gray-500">{progress}/10</p>
      </div>

      <div
        className={`bg-gray-300 h-3 w-full before:block relative rounded-full ${className} ${claculatedWidth} before:h-full  overflow-hidden `}
      ></div>

      <div className="flex justify-between items-center">
        <div className="gap-3 text-gray-400 flex">
          <span className="flex gap-2">
            <img src={commentIcon} alt="" /> {comments}
          </span>
          <span className="flex gap-2">
            <img src={linkIcon} alt="" /> {links}
          </span>
        </div>
        <Members image1={image1} image2={image2} image3={image3} />
      </div>
    </div>
  );
};

export default CardProgress;
