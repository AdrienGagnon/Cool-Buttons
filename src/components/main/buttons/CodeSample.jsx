import { useEffect, useRef } from 'react';
import styles from './CodeSample.module.css';

import Prism from 'prismjs';
import showElement from '../../../utils/showElement';
import { codeSampleDuration } from '../../constants/constants';

export default function CodeSample({ buttonData, showCodeSample }) {
    const codeBlockRefHTML = useRef(null);
    const codeBlockRefCSS = useRef(null);
    const codeContainerRef = useRef(null);

    useEffect(() => {
        showElement(
            showCodeSample,
            codeContainerRef.current,
            codeSampleDuration
        );
        if (showCodeSample) {
            Prism.highlightAll(codeBlockRefHTML.current);
            Prism.highlightAll(codeBlockRefCSS.current);
        }
    }, [showCodeSample]);

    return (
        <div ref={codeContainerRef} className={styles.code__container}>
            <div className={styles.code__snippet}>
                <div className={styles.content__name}>HTML</div>
                <pre className={styles['line-numbers']}>
                    <code ref={codeBlockRefHTML} className={'language-html'}>
                        {buttonData.html}
                    </code>
                </pre>
            </div>

            <div className={styles.code__snippet}>
                <div className={styles.content__name}>CSS</div>
                <pre className={styles['line-numbers']}>
                    <code ref={codeBlockRefCSS} className={'language-css'}>
                        {buttonData.css}
                    </code>
                </pre>
            </div>
        </div>
    );
}
