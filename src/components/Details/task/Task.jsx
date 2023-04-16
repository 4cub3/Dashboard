import React from 'react'
import TaskSection from './TaskSection';
import { TASKS } from './taskList';

const Task = () => {
    const taskItem = TASKS.map(tsk =>(
        <TaskSection 
        key={tsk.id}
        title={tsk.title}
        number={tsk.number}
        cardTitleProgress={tsk.cardTitleProgress}
        image={tsk.image}
        cardImage={tsk.cardImage}
        />
    ))
  return (
    <main className='flex flex-col space-y-6 sm:justify-between sm:flex-row sm:space-y-0  md:justify-between flex-wrap md:flex-nowrap px-9 py-6 sm:px-[4.4rem] sm:py-[2.8rem] bg-gray-50'>
        {taskItem}
    </main>
  )
}

export default Task