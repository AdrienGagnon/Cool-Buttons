import { useEffect, useRef } from 'react';
import styles from './ThirdTimeline.module.css';
import Btn from '../miscellaneous/Btn';
import gsap from 'gsap';
import ArrowDown from '../miscellaneous/ArrowDown';

export default function ThirdTimeline() {
    const firstWordRef = useRef(null);
    const secondWordRef = useRef(null);
    const btnRef = useRef(null);

    const thirdTimelineAnimation = () => {
        const thirdWordTimeline = gsap.timeline();
        thirdWordTimeline
            .fromTo(
                firstWordRef.current,
                {
                    x: '-100vw',
                },
                {
                    x: 0,
                    duration: 1,
                }
            )
            .fromTo(
                secondWordRef.current,
                {
                    x: '100vw',
                },
                {
                    x: 0,
                    duration: 1,
                },
                0.5
            )
            .fromTo(
                btnRef.current,
                {
                    yPercent: '-100',
                    opacity: 0,
                },
                {
                    yPercent: 0,
                    opacity: 1,
                    duration: 1,
                },
                1
            );
    };

    useEffect(() => {
        thirdTimelineAnimation();
    }, []);

    return (
        <div className={styles['cool-buttons-title']}>
            <div
                ref={firstWordRef}
                className={[styles.title__word, styles['word--first']].join(
                    ' '
                )}
            >
                <span className={styles['letter-1']} data-text="C">
                    C
                </span>
                <span className={styles['letter-2']} data-text="O">
                    O
                </span>
                <span className={styles['letter-3']} data-text="O">
                    O
                </span>
                <span className={styles['letter-4']} data-text="L">
                    L
                </span>
                <Btn
                    text={'Hell yeah!'}
                    btnRef={btnRef}
                    customClass={'titleBtn'}
                >
                    <ArrowDown />
                </Btn>
            </div>
            <div
                ref={secondWordRef}
                className={[styles.title__word, styles['word--second']].join(
                    ' '
                )}
            >
                <span className={styles['letter-1']} data-text="B">
                    B
                </span>
                <span className={styles['letter-2']} data-text="U">
                    U
                </span>
                <span className={styles['letter-3']} data-text="T">
                    T
                </span>
                <span className={styles['letter-4']} data-text="T">
                    T
                </span>
                <span className={styles['letter-5']} data-text="O">
                    O
                </span>
                <span className={styles['letter-6']} data-text="N">
                    N
                </span>
                <span className={styles['letter-7']} data-text="S">
                    S
                </span>
            </div>
        </div>
    );
}
