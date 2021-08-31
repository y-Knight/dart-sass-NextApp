import { ButtonProps } from './types/Button.types'
import styles from '../../styles/components/atoms/Button.module.scss'

export const Button = ({
    label,
    ...props
}: ButtonProps) => {
    return (
        <>
            <div className={styles.button_sass_sample}>
                <h1>sass</h1>
            </div>
            <div className={styles.button_container}>
                <button onClick={() => console.log('click')}>
                    {label}
                </button>
            </div>
        </>
    )
}

