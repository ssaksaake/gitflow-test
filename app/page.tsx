import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/Header";

export default function Home() {
    return (
        <main className={styles.main}>
            <Header />
            <h1>Git Flow Test Page</h1>
            <div>Git Flow 트리 구조를 한번 만들어볼까??</div>
            <div>Git Flow 트리 구조를 한번 만들어볼까??</div>
            오노노노 Amend
        </main>
    );
}
