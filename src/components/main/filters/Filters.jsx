import Checkbox from '../../miscellaneous/Checkbox';
import styles from './Filters.module.css';

export default function Filters() {
    const buttons = [
        { name: 'All', identifier: 'allFilter', checked: true },
        { name: 'Buttons', identifier: 'buttonsFilter', checked: true },
        { name: 'Inputs', identifier: 'inputsFilter', checked: true },
        { name: 'Checkboxes', identifier: 'checkboxesFilter', checked: true },
    ];
    return (
        <div className={styles['filter-section']}>
            <h2>New ideas to spice up your designs</h2>
            <p>
                Browse a collection of buttons, inputs, checkboxes and copy the
                ones you like.
            </p>
            <div className={styles['filter-container']}>
                {buttons.map(button => {
                    return (
                        <div className={styles['filter-item']}>
                            <label htmlFor={button.identifier}>
                                {button.name}
                            </label>
                            <Checkbox
                                identifier={button.identifier}
                                checked={button.checked}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
