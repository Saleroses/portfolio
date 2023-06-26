import React from 'react';
import s from './Skills.module.css'
import Skill from "../skill/Skill";

const Skills = () => {
    return (
        <div className={s.container}>
            <div className={s.skills}>
                <div className={s.title}>
                    Мои скилы
                </div>
                    <Skill />
            </div>
            
        </div>
    );
};

export default Skills;