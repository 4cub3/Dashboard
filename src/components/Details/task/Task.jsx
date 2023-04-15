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
    <main className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 justify-between flex-wrap sm:flex-nowrap'>
        {taskItem}
    </main>
  )
}

export default Task