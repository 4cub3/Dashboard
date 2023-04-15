import React from "react";

const Members = ({ image1, image2, image3 }) => {
  return (
    <figure className="flex">
      <div className="w-12 h-12 border border-white rounded-full overflow-hidden">
        <img
          src={image1}
          alt=""
          className=" w-full h-full object-cover"
        />
      </div>
      <div className="w-12 h-12 -ml-6 border border-white rounded-full overflow-hidden">
        <img
          src={image2}
          alt=""
          className=" w-full h-full object-cover"
        />
      </div>
      <div className="w-12 h-12 -ml-6 border border-white rounded-full overflow-hidden">
        <img
          src={image3}
          alt=""
          className=" w-full h-full object-cover"
        />
      </div>
    </figure>
  );
};

export default Members;
