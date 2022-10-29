import Image from 'next/image';
import Slick from 'react-slick';
import styles from './styles/hero.module.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { MdArrowForwardIos } from 'react-icons/md';
import PrevButton from './PrevButton';
import NextButton from './NextButton';

const Hero = () => {
    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 5000,
        nextArrow: <NextButton />,
        prevArrow: <PrevButton />,
    };
    return (
        <div className={styles.ContentsWrapper}>
            <ul className={styles.sliderWrapper}>
                <Slick {...setting}>
                    <li className={styles.sliderItems}>
                        <Image src="/025.jpeg" alt="" width={800} height={600} objectFit="contain" />
                    </li>
                    <li className={styles.sliderItems}>
                        <Image src="/033.jpeg" alt="" width={800} height={600} objectFit="contain" />
                    </li>
                    <li className={styles.sliderItems}>
                        <Image src="/035.jpeg" alt="" width={800} height={600} objectFit="contain" />
                    </li>
                </Slick>
            </ul>
        </div>
    )
}

export default Hero