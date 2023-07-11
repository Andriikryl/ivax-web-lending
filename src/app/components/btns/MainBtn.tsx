import React from "react";
import style from "./style.module.css";
export default function MainBtn({ text }: { text: string }) {
  return <button className={style.main__btn}>{text}</button>;
}
