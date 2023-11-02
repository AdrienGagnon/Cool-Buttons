import styles from './LoadMore.module.css';
import Btn from './Btn';
import { useRef } from 'react';

export default function LoadMore() {
    const loadBtnRef = useRef(null);
    return (
        <Btn
            text={'Load More'}
            loadBtnRef={loadBtnRef}
            customClass={'loadMoreBtn'}
        />
    );
}
