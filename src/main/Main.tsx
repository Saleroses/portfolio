import React, {useEffect, useState} from 'react';
import s from './Main.module.css'

export type TypewriterPropsType = {
    text: Array<string>,
    delay: number
}

const Main = () => {


    const SpecializedListText = [
        "Type Script",
        'Redux',
        "Java Script",
        "React",
    ]

    const Typewriter = (props: TypewriterPropsType) => {
        const [currentText, setCurrentText] =  useState('');
        const [currentIndex, setCurrentIndex] = useState(0);
        const [finishText, setFinishText] =  useState('');
        const [finishIndex, setFinishIndex] = useState(0);


        useEffect(() => {
            if (currentIndex < props.text.length) {
                const timeout = setTimeout(() => {
                    setCurrentText(props.text[currentIndex]);
                    setCurrentIndex(currentIndex + 1);
                }, props.delay);

                return () => clearTimeout(timeout);
            } else {
                setCurrentIndex(0)
            }

        }, [currentIndex, props.delay]);

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
                        <span className={s.cursorBlink}>|</span>
                    </p>
                </div>
            </div>


        </div>
    );
};

export default Main;