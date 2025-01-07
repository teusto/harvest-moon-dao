import styles from '~/styles/voting.module.scss'

const Voting = (): React.JSX.Element => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container_current}>
                voting time this show up
            </div>
            <div className={styles.section}>
                <ul className={styles.options_list}>
                    <li className={styles.option_card}>
                        <div className={styles.card_top}>
                            <p>name crop</p>
                        </div>
                        <div className={styles.card_bottom}>
                            <div className={styles.card_left}>
                                <button>vote</button>
                            </div>
                            <div className={styles.card_right}>
                                <div className={styles.round}>s</div>
                                <div className={styles.round}>21</div>
                            </div>
                        </div>
                    </li>
                    <li className={styles.option_card}>
                        <div className={styles.card_top}>
                            <p>name crop</p>
                        </div>
                        <div className={styles.card_bottom}>
                            <div className={styles.card_left}>
                                <button>vote</button>
                            </div>
                            <div className={styles.card_right}>
                                <div className={styles.round}>s</div>
                                <div className={styles.round}>21</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
};

export default Voting
