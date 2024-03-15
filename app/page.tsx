import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>Git Flow Test Page</h1>
            <div>Git Flow 트리 구조를 한번 만들어볼까??</div>
            <div>이거 급한거야!!!</div>
        </main>
    );
}
