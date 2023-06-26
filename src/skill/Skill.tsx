import React from 'react';
import s from './Skill.module.css'
import typescript from '../image/skills/typescript.svg'
import javascript from '../image/skills/javascript.svg'
import react from '../image/skills/react.svg'
import css from '../image/skills/css.svg'
import html from '../image/skills/html.svg'
import materialUa from '../image/skills/materialUa.svg'
import redux from '../image/skills/redux.svg'


const Skill = () => {

    return (
        <div className={s.container}>
            <div className={s.skill}>
                <img className={s.image} src={typescript} alt="typescript"/>
                <div className={s.name}>TypeScript</div>
            </div>
            <div className={s.skill}>
                <img className={s.image} src={javascript} alt="JavaScript"/>
                <div className={s.name}>JavaScript</div>
            </div>
            <div className={s.skill}>
                <img className={s.image} src={react} alt="React"/>
                <div className={s.name}>React</div>
            </div>
            <div className={s.skill}>
                <img className={s.image} src={css} alt="CSS3"/>
                <div className={s.name}>CSS</div>
            </div>
            <div className={s.skill}>
                <img className={s.image} src={html} alt="html"/>
                <div className={s.name}>HTML</div>
            </div>
            <div className={s.skill}>
                <img className={s.image} src={materialUa} alt="materialUa"/>
                <div className={s.name}>Material UI</div>
            </div>
            <div className={s.skill}>
                <img className={s.image} src={redux} alt="redux"/>
                <div className={s.name}>Redux</div>
            </div>

        </div>
    );
};

export default Skill;