import CodeSymbol from './CodeSymbol';
import FirstTimeline from './FirstTimeline';
import SecondTimeline from './SecondTimeline';
import ThirdTimeline from './ThirdTimeline';

import styles from './Header.module.css';
import { useRef, useState } from 'react';

export default function Header() {
    const [secondStart, setSecondStart] = useState(false);
    const [thirdStart, setThirdStart] = useState(false);

    const codeSymbolRef = useRef(null);

    return (
        <header>
            <div className={styles['header-text-container']}>
                {!thirdStart ? (
                    <CodeSymbol codeSymbolRef={codeSymbolRef} />
                ) : undefined}
                {!secondStart ? (
                    <FirstTimeline setSecondStart={setSecondStart} />
                ) : undefined}
                {secondStart && !thirdStart ? (
                    <SecondTimeline
                        setThirdStart={setThirdStart}
                        codeSymbolRef={codeSymbolRef}
                    />
                ) : undefined}
                {thirdStart ? <ThirdTimeline /> : undefined}
            </div>
            {/* <HeaderBackground /> */}
        </header>
    );
}
