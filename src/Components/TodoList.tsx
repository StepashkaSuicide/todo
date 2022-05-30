import React, {useState} from 'react';
import {filterValueType} from "../App";

type TodoListPropTypes = {
    title: string | number
    tasks: Array<TasksPropType>
    removeTasks: (taskId: number) => void
    // filtered: (done: filterValueType) => void
}

type TasksPropType = {
    id: number
    title: string
    isDone: boolean
}


export const TodoList = (props: TodoListPropTypes) => {

    let [filterValue, setFilterValue] = useState<filterValueType>('All')

    let   filterTask = props.tasks
    if(filterValue==='Active'){
        filterTask = props.tasks.filter(el => el.isDone === false)
    }
    if(filterValue==='Completed'){
        filterTask = props.tasks.filter(el => el.isDone === true)
    }
    let filtered = (done: filterValueType) => {
        setFilterValue(done)
    }




    return (
        <div>
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {filterTask.map(t => {
                        return (

                            <li key={t.id}>
                                <button onClick={() => props.removeTasks(t.id)}>x</button>
                                <input type="checkbox" checked={t.isDone}/>
                                <span>{t.title}</span>
                            </li>)
                    })}
                </ul>
                <div>
                    <button onClick={()=> filtered('All')}>All</button>
                    <button onClick={()=> filtered('Active')}>Active</button>
                    <button onClick={()=> filtered('Completed')}>Completed</button>
                </div>
            </div>
        </div>
    );
};
