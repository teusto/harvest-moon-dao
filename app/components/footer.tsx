import styles from '~/components/styles.module.scss'
import { IoLogoInstagram, IoWallet } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const Footer = (): React.JSX.Element => {
    return (
        <section className={styles.footer_wrapper}>
            <div className={styles.container_icons}>
                <div className={styles.icon}>
                    <FaXTwitter size={'1.25rem'}/>
                </div>
                <div className={styles.icon}>
                    <IoLogoInstagram size={'1.25rem'}/>
                </div>
                <div className={styles.icon}>
                    <IoWallet size={'1.25rem'}/>
                </div>
            </div>
            <div className={styles.container_watermark}>
                <p>Made by me</p>
            </div>
        </section>
    )
};

export default Footer;
