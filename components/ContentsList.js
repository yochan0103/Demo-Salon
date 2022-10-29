import styles from './styles/ContentsList.module.css';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';

const ContentsList = (props) => {
    const {title, ImageSrc, width, height, ImageAlt, contents, ButtonLink} = props;
    return (
        <div className={styles.ContentsWrapper}>
            <Card sx={{m:"1rem", boxShadow:5}}>
                <div className={styles.imageWrapper} scroll={false}>
                    <Link href={ButtonLink} scroll={false}>
                        <Image src={ImageSrc} alt={ImageAlt} width={width} height={height} objectFit="contain" />
                    </Link>
                </div> 
                <div className={styles.titleWrapper}>
                    <Typography sx={{
                        borderBottom:"solid 2px orange;", 
                        display:"inline-block", 
                        fontFamily:"'Lato-Regular', 'Hiragino Kaku Gothic ProN', Verdana, Meiryo, sans-serif;",
                        letterSpacing:"0.14em",
                        fontSize:'1.17em',
                    }}>
                        <Link href={ButtonLink} scroll={false}>
                            {title}
                        </Link>
                    </Typography>
                </div>
                <Typography sx={{
                        fontFamily:"'Lato-Regular', 'Hiragino Kaku Gothic ProN', Verdana, Meiryo, sans-serif;",
                        letterSpacing:"0.14em",
                        m:"1rem",
                }}>
                    {contents}
                </Typography>
                <div className={styles.ButtonWrapper}>
                    <Button variant='contained' color='warning' sx={{fontFamily:'Hiragino Kaku Gothic ProN', letterSpacing:'0.14em'}}>
                        <Link href={ButtonLink} scroll={false}>
                            More
                        </Link>
                    </Button>
                </div>
            </Card>
        </div>
    )
}

export default ContentsList