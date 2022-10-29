import { MdArrowForwardIos } from 'react-icons/md';
import styles from './styles/hero.module.css';

const NextButton = ({onClick}) => {
    return (
        <div onClick={onClick} className={styles.NextButton}>
            <MdArrowForwardIos />
        </div>  
    )
}

export default NextButton