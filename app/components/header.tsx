import styles from './styles.module.scss'
import Logo from '../imgs/logo.png'
import { Link, NavLink } from "@remix-run/react";

const Header = (): React.JSX.Element => {
    return (
        <section className={styles.header_wrapper}>
            <div className={styles.container_logo}>
                <img src={Logo} className={styles.logo} />
            </div>
            <div className={styles.navigation}>
                <NavLink to="/dashboard">
                    {({ isActive, isPending }) => (
                        <p className={isActive && styles.selected}>Home</p>
                    )}
                </NavLink>
                <NavLink to="/treasury">
                    {({ isActive, isPending }) => (
                        <p className={isActive && styles.selected}>Treasury</p>
                    )}
                </NavLink>
                <NavLink to="/voting">
                    {({ isActive, isPending }) => (
                        <p className={isActive && styles.selected}>Voting</p>
                    )}</NavLink>
                <NavLink to="/tasks">
                    {({ isActive, isPending }) => (
                        <p className={isActive && styles.selected}>Tasks</p>
                    )}</NavLink>
            </div>
            <div />
        </section>
    )
};

export default Header;
