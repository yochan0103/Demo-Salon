import { motion } from "framer-motion"
import styles from "./styles/Concept-page.module.css"

const ConceptPage = () => {
    return (
        <motion.div
            initial={{opacity:0}}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}  
        >
            <h1 className={styles.title}>コンセプトページです。</h1>
        </motion.div>
    )
}

export default ConceptPage