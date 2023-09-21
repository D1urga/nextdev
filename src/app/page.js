import Header from "./components/header";
import style from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={style.space}></div>
      <Header />
    </main>
  );
}
