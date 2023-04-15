import React from "react";
import Label from "../../../shared/label/Label";
import Card from "../../../shared/card/Card";
import CardTitle from "../../../shared/cardTitle/CardTitle";
import CardProgress from "../../../shared/cardProgress/CardProgress";
import Button from "../../../shared/button/Button";
import plusDark from '../../../assets/icons/PlusaddIcon.svg';
const TaskSection = ({ title, number, cardTitleProgress, image, cardImage }) => {
  const progressList = cardTitleProgress.map((data) => (
    <section key={data.id} className="space-y-6 ">
      <CardTitle headTitle={data.headTitle} body={data.body} />
      <CardProgress
        image1={data.image1}
        image2={data.image2}
        image3={data.image3}
        className={data.className}
        claculatedWidth={data.claculatedWidth}
        comments={data.comments}
        links={data.links}
        progress={data.progress}
      />
    </section>
  ));

  const images = cardImage.map(img =>(
    <figure key={img.id} className={`h-[16.8rem] ${img.color}`}>
    <img src={image} alt="" className="w-full h-full object-fill xl:object-contain" />
  </figure>
  ))
  
  return (
    <section className="space-y-4 xl:w-[30%]">
      <Label title={title} number={number} />
      <Card className='space-y-6 overflow-y-scroll max-h-[55rem]'>
        {images}
        {progressList}
      </Card>
      <Button className='w-full bg-labelColor py-[1.2rem] px-[2.4rem]'>
        <img src={plusDark} alt="" />
        Add task
      </Button>
    </section>
  );
};

export default TaskSection;
