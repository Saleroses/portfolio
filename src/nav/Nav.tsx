import React from 'react';
import s from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={s.nav}>
            <a className={s.navLink} href={""}>Главная</a>
            <a className={s.navLink} href={""}>Скилы</a>
            <a className={s.navLink} href={""}>Проекты</a>
            <a className={s.navLink} href={""}>Контакты</a>
        </div>
    );
};

