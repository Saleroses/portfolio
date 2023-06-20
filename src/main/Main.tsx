import React from 'react';
import s from './Main.module.css'


const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.foto}>
                <div className={s.container}>
                    <h1>Привет! Я Егор</h1>
                    <span className={s.text}>Frontend developer</span>
                </div>
            </div>



        </div>
    );
};

export default Main;