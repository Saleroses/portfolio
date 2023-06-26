import React from 'react';
import s from './aboutMe.module.css'
import foto from '../image/aboutMe/about-img.jpg'


const AboutMe = () => {

    return (
        <div className={s.container}>
            <div>
                <img className={s.foto} src={foto} alt=""/>
                <button className={s.button}>Скачать CV</button>
            </div>
            <div className={s.text}>
                <div className={s.header}>Обо мне</div>
                <div className={s.specialized}>Web Developer</div>
                <div className={s.description}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at
                        dolorem doloribus earum et eveniet, excepturi fugiat impedit, laboriosam laudantium neque odio
                        sint sunt
                        vero, voluptates? Deserunt iure placeat recusandae!</p>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;