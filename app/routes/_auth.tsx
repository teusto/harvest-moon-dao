import { Outlet } from "@remix-run/react"
import Footer from "~/components/footer"
import Header from "~/components/header"
import styles from '~/styles/layouts.module.scss'

export default function AuthLayout() {

    return (
        <section className={styles.wrapper}>
            <Header />
            <Outlet />
            <Footer />
        </section>
    )
}