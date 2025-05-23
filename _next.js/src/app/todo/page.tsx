import { TodoPage } from "@/components/TodoPage";
import styles from "./page.module.css";

export default function Todo() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <TodoPage />
      </main>
    </div>
  );
}
