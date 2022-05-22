// import { Link } from "react-router-dom";

// function Nav() {
//     return (
//         <nav id="nav">
//             <Link to="/highscores" className='fas fa-hand-point-left fa-lg'>Highscores</Link>
//             <h2>{new Date().toLocaleTimeString()}</h2>
//         </nav>
//     );
// }

// setInterval(Nav, 1000);

import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

export const Count = () => {
const [currentCount, setCount] = useState(600);

const secondsTo_HHMMSS = (seconds) => {
    //format to a readable friendly timer
    let hour = Math.floor(seconds / 3600);
    let minute = Math.floor((seconds % 3600) / 60);
    let second = seconds % 60;

    if(hour.toString().length === 1) {
          hour = `0${hour}`;
    }
    if(minute.toString().length === 1) {
          minute = `0${minute}`;
    }
    if(second.toString().length === 1) {
          second = `0${second}`;
    };

    let timer = `${minute}min ${second}sec`;

    return timer;
}

const timer = () => setCount(currentCount - 1);

useEffect(
    () => {
        if (currentCount <= 0) {
            return;
        }
        const id = setInterval(timer, 1000);
        return () => clearInterval(id);
    },
    // [currentCount]
);

console.log(currentCount)

return <div>Time : {secondsTo_HHMMSS(currentCount)}</div>;
};

function Nav() {
    return (
        <nav id="nav">
            <Link to="/highscores" className='fas fa-hand-point-left fa-lg'>Highscores</Link>
            {Count()}
        </nav>
    );
}


export default function RunQuiz(){
    const confirmQuiz = () => {
        if(!window.confirm('Quiz will start now, be ready!')) {
           return <Navigate to={"/"} />
        }
    }
    return (
        <>
        {confirmQuiz()}
        <Nav />
        {/* {setInterval(Nav, 1000)} */}
        <div className="quiz-container">
            <main className="quiz">
                questions appear here
            </main>
        </div>
        </>
    )
}