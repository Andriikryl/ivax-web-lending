import styles from "./page.module.css";
import Hero from "./components/sections/hero/Hero";
import Deliver from "./components/sections/deliver/Deliver";

export default function Home() {
  return (
    <>
      <Hero />
      <Deliver />
    </>
  );
}
