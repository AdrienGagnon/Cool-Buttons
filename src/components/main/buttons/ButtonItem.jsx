import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { TransitionGroup } from 'react-transition-group';
import { Transition } from 'react-transition-group';

import styles from './ButtonItem.module.css';
import './ButtonItem.css';

import CustomButton from './CustomButton';
import ShowOptions from './ShowOptions';
import Parameters from './Parameters';
import ItemInteractions from './ItemInteractions';
import CodeSample from './CodeSample';

export default function ButtonItem({
    buttonData,
    transitionToggleCodeSample,
    refArray,
    index,
}) {
    const [showCodeSample, setShowCodeSample] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const itemRef = useRef(null);

    const toggleShowOptions = () => {
        setShowOptions(!showOptions);
    };

    const toggleCodeSample = () => {
        setShowCodeSample(!showCodeSample);
        transitionToggleCodeSample(itemRef.current);
    };

    useEffect(() => {
        refArray[index] = itemRef.current;
    }, []);

    return (
        <div
            ref={itemRef}
            className={[styles.container, 'button-item-container'].join(' ')}
        >
            <div className={styles.button__example}>
                <CustomButton buttonData={buttonData} />
                <div className={styles.parameters}>
                    <ShowOptions toggleShowOptions={toggleShowOptions} />
                    <Parameters showOptions={showOptions} />
                </div>
            </div>
            <ItemInteractions toggleCodeSample={toggleCodeSample} />
            <CodeSample
                buttonData={buttonData}
                showCodeSample={showCodeSample}
            />
        </div>
    );
}
