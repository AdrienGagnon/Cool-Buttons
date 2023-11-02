import Filters from './filters/Filters';
import ButtonItem from './buttons/ButtonItem';

import { buttonsData } from '../constants/constants';

import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import { useRef } from 'react';

import styles from './Main.module.css';
import { codeSampleDuration } from '../constants/constants';
import LoadMore from '../miscellaneous/LoadMore';

export default function Main() {
    gsap.registerPlugin(Flip);

    const refArray = useRef([]);

    const transitionToggleCodeSample = item => {
        const state = Flip.getState(refArray.current);

        item.classList.toggle('showCodeSample');

        Flip.from(state, {
            absolute: false,
            duration: codeSampleDuration,
        });
    };

    return (
        <section className={styles['section-buttons']}>
            <div className={styles['main-container']}>
                <Filters />
                <div className={styles['buttons-container']}>
                    {buttonsData.map((buttonData, i) => {
                        return (
                            <ButtonItem
                                key={i}
                                buttonData={buttonData}
                                transitionToggleCodeSample={
                                    transitionToggleCodeSample
                                }
                                refArray={refArray.current}
                                index={i}
                            />
                        );
                    })}
                </div>
                <LoadMore />
            </div>
        </section>
    );
}
