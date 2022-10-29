import { MdArrowBackIosNew } from 'react-icons/md';
import styles from './styles/hero.module.css';

const PrevButton = ({onClick}) => {
    return (
        <div onClick={onClick} className={styles.PrevButton}>
            <MdArrowBackIosNew />
        </div>  
    )
}

export default PrevButton