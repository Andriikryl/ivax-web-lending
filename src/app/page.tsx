import styles from "../app/components/rolString/style.module.css";
import Hero from "./components/sections/hero/Hero";
import Deliver from "./components/sections/deliver/Deliver";
import Things from "./components/sections/things/Things";
import RolString from "./components/rolString/RolString";

export default function Home() {
  return (
    <>
      <Hero />
      <Deliver />
      <Things />
      <RolString
        string="UX _ Web development _ Brand identity"
        className={styles.marquee__item}
      />
      <RolString
        string="UX _ Mobile apps _ Video _ Filmmaking "
        className={styles.marquee__item__stroke}
      />
    </>
  );
}
