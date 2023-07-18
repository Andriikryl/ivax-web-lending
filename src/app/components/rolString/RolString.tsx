import styles from "./style.module.css";

interface IRolString {
  string: string;
  className: string;
}

export default function RolString({ string, className }: IRolString) {
  return (
    <div className={styles.marquee}>
      <ul className={styles.marquee__content}>
        <li className={className}>{string}</li>
        <li className={className}> {string}</li>
        <li className={className}> {string}</li>
      </ul>
      <ul className={styles.marquee__content} aria-hidden="true">
        <li className={className}>{string}</li>
        <li className={className}> {string}</li>
        <li className={className}> {string}</li>
      </ul>
    </div>
  );
}
