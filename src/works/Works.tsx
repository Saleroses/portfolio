import React from 'react';
import s from './Works.module.css'
import img1 from '../image/works/img-1.jpg'
import img2 from '../image/works/img-2.jpg'
import img3 from '../image/works/img-3.jpg'
import img4 from '../image/works/img-4.jpg'
import img5 from '../image/works/img-5.jpg'
import img6 from '../image/works/img-6.jpg'


const Works = () => {
    return (
        <div className={s.container}>
            <div className={s.title}>
                Мои работы
            </div>
            <div className={s.work}>
                <div><img className={s.workImg} src={img1}/></div>
                <div><img className={s.workImg} src={img2}/></div>
                <div><img className={s.workImg} src={img3}/></div>
                <div><img className={s.workImg} src={img4}/></div>
                <div><img className={s.workImg} src={img5}/></div>
                <div><img className={s.workImg} src={img6}/></div>
            </div>
        </div>
    );
};

export default Works;