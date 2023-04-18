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
    <main className='grid grid-cols-1 md:grid-cols-3 smm:grid-cols-2 gap-16 px-9 py-6 sm:px-[4.4rem] sm:py-[2.8rem] bg-gray-50 dark:bg-gradient-to-r dark:from-slate-950 dark:to-slate-900 transition-colors duration-300 max-w-[1920px] mx-auto'>
        {taskItem}
    </main>
  )
}

export default Task