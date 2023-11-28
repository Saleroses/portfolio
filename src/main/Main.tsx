import React, {useEffect, useState} from 'react';
import s from './Main.module.css'

export type TypewriterPropsType = {
    text: Array<string>,
    delay: number
}

const Main = () => {


    const SpecializedListText = [
        "Software engineer",
        "React",
        "Type Script",
        "Java Script",
    ]

    const Typewriter = (props: TypewriterPropsType) => {
        const [currentText, setCurrentText] =  useState('');
        const [currentIndex, setCurrentIndex] = useState(0);


        useEffect(() => {
            if (currentIndex < props.text.length) {
                const timeout = setTimeout(() => {
                    setCurrentText(props.text[currentIndex]);
                    setCurrentIndex(prevIndex => prevIndex + 1);
                }, props.delay);

                return () => clearTimeout(timeout);
            } else {
                setCurrentIndex(0)
            }
        }, [currentIndex, props.delay, props.text]);

        return <span>{currentText}</span>;
    };

    return (
        <div className={s.mainBlock}>
            <div className={s.foto}>
                <div className={s.container}>
                    <h1>Привет! Я Егор</h1>
                    <span className={s.text}>Frontend developer </span>
                    <p className={s.text2}><span>{"Specialized in "}</span>
                        <span className={s.specialized}><Typewriter text={SpecializedListText} delay={2000}/>
                        </span>
                    </p>
                </div>
            </div>


        </div>
    );
};

export default Main;