import styles from '~/components/styles.module.scss'

const Footer = (): React.JSX.Element => {
    return (
        <section className={styles.footer_wrapper}>
            <div className={styles.container_icons}>
                <div>F</div>
                <div>I</div>
                <div>Met</div>
            </div>
            <div className={styles.container_watermark}>
                <p>Made by me</p>
            </div>
        </section>
    )
};

export default Footer;
