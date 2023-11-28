import React from 'react';
import s from './Main.module.css'
import {Typewriter} from "../header/Typewriter";


const Main = () => {
    let SpecializedListText = [
        "React",
        "Type Script",
        "Java Script",
    ]

    return (
        <div className={s.mainBlock}>
            <div className={s.foto}>
                <div className={s.container}>
                    <h1>Привет! Я Егор</h1>
                    <span className={s.text}>Frontend developer </span>
                    <p className={s.text2}><span>{"Specialized in "}</span>
                        <span className={s.specialized}><Typewriter text={SpecializedListText} delay={100}/>
                        </span>
                    </p>
                </div>
            </div>


        </div>
    );
};

export default Main;