import React from "react";
import style from "./style.module.css";
export default function SubBtn({ text }: { text: string }) {
  return <button className={style.sub__btn}>{text}</button>;
}
