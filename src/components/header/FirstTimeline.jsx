import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './FirstTimeline.module.css';

export default function FirstTimeline({ setSecondStart }) {
    const wordRef = useRef(null);
    const squaresUpperContainerRef = useRef(null);
    const squaresLowerContainerRef = useRef(null);

    const letterOne = useRef(null);
    const letterTwo = useRef(null);
    const letterThree = useRef(null);

    const firstTimelineAnimation = () => {
        const squares = [
            squaresUpperContainerRef.current,
            squaresLowerContainerRef.current,
        ];
        const letters = [
            letterOne.current,
            letterTwo.current,
            letterThree.current,
        ];

        const wordTimeline = gsap.timeline({
            onComplete: () => setSecondStart(true),
        });

        wordTimeline
            .fromTo(
                squares,
                { scaleX: 0, scaleY: 0 },
                {
                    duration: 1,
                    ease: 'elastic.out(1,0.8)',
                    scaleX: 1.2,
                    scaleY: 1.2,
                }
            )
            .set(
                letters,
                {
                    opacity: 1,
                    duration: 0.1,
                },
                0.2
            )
            .fromTo(
                letters,
                {
                    yPercent: 100,
                },
                {
                    yPercent: 0,
                    duration: 0.5,
                    ease: 'power3.out',
                    stagger: 0.1,
                },
                0.5
            )
            .to(squares, { duration: 0.5, scaleX: 1.2, scaleY: 1.2 })
            .to(
                squares,
                { duration: 0.8, ease: 'back.in(1.4)', y: '-1.2em' },
                'textDisappear'
            )
            .to(
                wordRef.current,
                { duration: 0.8, ease: 'back.in(1.4)', y: '-1.2em' },
                'textDisappear'
            )
            .to(
                letters,
                {
                    duration: 0.8,
                    ease: 'back.in(1.4)',
                    y: '1.2em',
                },
                'textDisappear'
            )
            .to(squares, {
                duration: 0.5,
                ease: 'power4.out',
                scaleX: 0,
                scaleY: 0,
            });
    };

    useEffect(() => {
        firstTimelineAnimation();
    }, []);

    return (
        <div className={styles.word__container}>
            <div ref={wordRef} className={styles.word__wrapper}>
                <span ref={letterOne} className={styles.letter}>
                    H
                </span>
                <span ref={letterTwo} className={styles.letter}>
                    e
                </span>
                <span ref={letterThree} className={styles.letter}>
                    y
                </span>
            </div>
            <div
                ref={squaresUpperContainerRef}
                className={[
                    styles.square__wrapper,
                    styles['square__wrapper--upper'],
                ].join(' ')}
            >
                <div
                    className={[styles.square, styles['square--upper']].join(
                        ' '
                    )}
                >
                    <svg
                        viewBox="0 0 157 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="seamless-rectangle-line-top"
                        aria-hidden="true"
                    >
                        <path
                            d="M6.78125 10.64L13.8769 2C14.0663 1.77 14.3453 1.64 14.6443 1.64L144.913 2C145.241 2 145.55 2.17 145.74 2.44L151.5 11"
                            strokeWidth="2"
                        ></path>
                    </svg>
                </div>
            </div>
            <div
                ref={squaresLowerContainerRef}
                className={[
                    styles.square__wrapper,
                    styles['square__wrapper--lower'],
                ].join(' ')}
            >
                <div
                    className={[styles.square, styles['square--lower']].join(
                        ' '
                    )}
                >
                    <svg
                        viewBox="0 0 157 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="seamless-rectangle-line-bottom"
                        aria-hidden="true"
                    >
                        <path
                            d="M150.802 10L155.822 17.44C156.272 18.1 155.792 19 154.992 19H2.00249C1.15249 19 0.692494 18.02 1.23249 17.36L7.30249 10"
                            strokeWidth="2"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}
