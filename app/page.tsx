import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/Header";

export default function Home() {
    return (
        <main className={styles.main}>
            <Header />
            <h1>Git Flow Test Page</h1>
            <div>이거 급한거야!!!</div>
        </main>
    );
}
