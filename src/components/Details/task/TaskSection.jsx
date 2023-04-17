import React from "react";
import Label from "../../../shared/label/Label";
import Card from "../../../shared/card/Card";
import CardTitle from "../../../shared/cardTitle/CardTitle";
import CardProgress from "../../../shared/cardProgress/CardProgress";
import Button from "../../../shared/button/Button";
import plusDark from '../../../assets/icons/PlusaddIcon.svg';
const TaskSection = ({ title, number, cardTitleProgress, image, cardImage }) => {
  const progressList = cardTitleProgress.map((data) => (
    <section key={data.id} className={`space-y-6 ${data.order}`}>
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
    <figure key={img.id} className={`h-[16.8rem] ${img.color} ${img.order}`}>
    <img src={img.image} alt="" className="w-full h-full object-cover xl:object-contain" />
  </figure>
  ))
  
  return (
    <section className="space-y-12 space-x-2 lg:w-[30%] lg:max-w-3xl smd:w-[48%] w-full smm:flex-1">
      <Label title={title} number={number} />
      <Card className='space-y-6 overflow-y-scroll max-h-[55rem] flex flex-col rounded-xl'>
        {images}
        {progressList}
      </Card>
      <Button className='w-full bg-labelColor py-[1.2rem] px-[2.4rem] border-dashed border-2 dark:border-slate-700 dark:text-gray-400 dark:bg-slate-800 transition-colors duration-300'>
        <img src={plusDark} alt="" />
        Add task
      </Button>
    </section>
  );
};

export default TaskSection;
