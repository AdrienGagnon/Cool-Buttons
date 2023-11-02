import { useEffect, useRef } from 'react';
import styles from './SecondTimeline.module.css';
import gsap from 'gsap';

export default function SecondTimeline({ setThirdStart, codeSymbolRef }) {
    const sentence = [...'Want some spicy '];

    const wordWrapperRef = useRef(null);
    const wordWrapperTranslateRef = useRef(null);
    const interogationRef = useRef(null);

    const secondTimelineAnimation = () => {
        const letters = gsap.utils.toArray(
            wordWrapperRef.current.querySelectorAll('* > .letter__container')
        );

        const secondWordTimeline = gsap.timeline({
            onComplete: () => setThirdStart(true),
        });
        secondWordTimeline
            .fromTo(
                letters,
                { yPercent: -100 },
                {
                    duration: 1,
                    ease: 'power2.out',
                    yPercent: 300,
                    stagger: 0.1,
                }
            )
            .to(
                letters,
                {
                    duration: 0.5,
                    ease: 'power1.in',
                    yPercent: 200,
                    stagger: 0.1,
                },
                1
            )
            .fromTo(
                interogationRef.current,
                {
                    yPercent: -100,
                },
                {
                    ease: 'elastic.out(1,0.5)',
                    duration: 1,
                    yPercent: 0,
                },
                1
            )
            .fromTo(
                wordWrapperTranslateRef.current,
                {
                    yPercent: -100,
                },
                {
                    ease: 'elastic.out(1,0.5)',
                    duration: 1,
                    yPercent: 0,
                },
                1
            )
            .to(wordWrapperTranslateRef.current, {
                ease: 'elastic.out(1,0.5)',
                duration: 1,
                yPercent: 100,
            })
            .to(wordWrapperTranslateRef.current, {
                ease: 'elastic.out(1,0.5)',
                duration: 1,
                yPercent: 200,
            })
            .to(codeSymbolRef.current, {
                x: '100vw',
                duration: 2,
            });
    };

    useEffect(() => {
        secondTimelineAnimation();
    }, []);

    return (
        <div className={styles.word__container}>
            <div ref={wordWrapperRef} className={styles.word__wrapper}>
                {sentence.map((letter, i) => {
                    return letter === ' ' ? (
                        <span key={i}>&nbsp;</span>
                    ) : (
                        <span
                            key={i}
                            className={[
                                styles.letter__container,
                                'letter__container',
                            ].join(' ')}
                        >
                            <span className={styles['letter--visible']}>
                                {letter}
                            </span>
                            <span className={styles['letter--visible']}>
                                {letter}
                            </span>
                            <span className={styles['letter--visible']}>
                                {letter}
                            </span>
                            <span>{letter === ' ' ? ' ' : letter}</span>
                        </span>
                    );
                })}
            </div>

            <div
                className={[
                    styles.word__wrapper,
                    styles['categories-container'],
                ].join(' ')}
            >
                <div
                    ref={wordWrapperTranslateRef}
                    className={styles['word-wrapper--translate']}
                >
                    <span
                        className={[styles.word, styles['word--visible']].join(
                            ' '
                        )}
                    >
                        inputs
                    </span>
                    <span
                        className={[styles.word, styles['word--visible']].join(
                            ' '
                        )}
                    >
                        checkboxes
                    </span>
                    <span
                        className={[styles.word, styles['word--visible']].join(
                            ' '
                        )}
                    >
                        buttons
                    </span>
                    <span
                        className={[
                            styles.word,
                            styles['visually-hidden'],
                        ].join(' ')}
                    >
                        checkboxes
                    </span>
                </div>
            </div>

            <div className={styles.word__wrapper}>
                <div
                    ref={interogationRef}
                    className={styles['interrogation-wrapper--translate']}
                >
                    <span>?</span>
                </div>
            </div>
        </div>
    );
}
