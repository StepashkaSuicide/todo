import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./Components/TodoList";

export type filterValueType = 'All' | 'Active' | 'Completed'

function App() {

    let [tasks, setTasks] = useState([
            {id: 1, title: "HTML&CSS", isDone: false},
            {id: 2, title: "JS", isDone: true},
            {id: 3, title: "ReactJS", isDone: false},
            {id: 4, title: "ReactJS", isDone: true},
            {id: 5, title: "ReactJS", isDone: false},
            {id: 6, title: "ReactJS", isDone: true},
        ]
    )

    // let [filterValue, setFilterValue] = useState('All')

    // let   filterTask = tasks
    // if(filterValue==='Active'){
    //     filterTask = tasks.filter(el => el.isDone === false)
    // }
    // if(filterValue==='Completed'){
    //     filterTask = tasks.filter(el => el.isDone === true)
    // }
    // let filtered = (done: filterValueType) => {
    //     setFilterValue(done)
    // }

    const removeTasks = (taskId: number) => {
        tasks = tasks.filter((el) =>
            el.id !== taskId
        )
        setTasks(tasks)
    }




    return (
        <div className="App">
            <TodoList title={'What to learn 1'}
                      tasks={tasks}
                      removeTasks={removeTasks}
                      // filtered={filtered}


            />
        </div>
    );
}

export default App;
