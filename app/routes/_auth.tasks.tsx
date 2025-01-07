import styles from '~/styles/tasks.module.scss'

const Tasks = (): React.JSX.Element => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.section}>
                <div className={styles.title}>
                    <p>My Tasks</p>
                </div>
                <div className={styles.container_tasks}>
                    <div className={styles.task_card} />
                    <div className={styles.task_card} />
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.title}>
                    <p>Community Tasks</p>
                </div>
                <div className={styles.container_tasks}>
                    <div className={styles.task_card} />
                    <div className={styles.task_card} />
                    <div className={styles.task_card} />
                    <div className={styles.task_card} />
                </div>
            </div>
        </section>
    )
};

export default Tasks;
