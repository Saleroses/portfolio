import React from 'react';
import s from './Job.module.css'


const Job = () => {
    return (
        <div className={s.container}>
            <div className={s.title}>
                Рассматриваю работу в офисе и удаленно
            </div>
            <div className={s.buttonDiv}>
                <button className={s.button}>Нанять меня</button>
            </div>
        </div>
    );
};

export default Job;