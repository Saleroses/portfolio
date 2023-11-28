import React, { useState, useEffect } from 'react';



export type TypewriterPropsType = {
    text: Array<string>,
    delay: number
}

export const Typewriter = (props: TypewriterPropsType) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentTextChanger = setInterval(()=>{
        for (let i = 0; i < props.text.length; i++) {
            setCurrentText(props.text[i])

        }
    }, 1000)

    useEffect(() => {
        if (currentIndex < props.text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + props.text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, props.delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, props.delay, props.text]);

    return <span>{currentText}</span>;
};