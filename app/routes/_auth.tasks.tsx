import styles from '~/styles/tasks.module.scss'

const TaskCard = () => {
    return (
        <div className={styles.task_card}>
            <div className={styles.container}>
                <p className={styles.title}>Task Name</p>
                <div className={styles.info}>
                    <p>Due to: <span>12/07/2025</span></p>
                    <p>Owner: <span>Matheus Toscano</span></p>
                </div>
            </div>
        </div>
    )
}

const Tasks = (): React.JSX.Element => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.section}>
                <div className={styles.title}>
                    <p>My Tasks</p>
                </div>
                <div className={styles.container_tasks}>
                    <TaskCard />
                    <TaskCard />
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
