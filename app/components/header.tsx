import styles from './styles.module.scss'
import Logo from '../imgs/logo.png'

const Header = (): React.JSX.Element => {
    return (
        <section className={styles.header_wrapper}>
            <div className={styles.container_logo}>
                <img src={Logo} className={styles.logo}/>
            </div>
            <div className={styles.navigation}>
                <p className={styles.selected}>Home</p>
                <p>Treasury</p>
                <p>Voting</p>
                <p>Tasks</p>
            </div>
            <div />
        </section>
    )
};

export default Header;
