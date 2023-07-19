"use client";
import { useState } from "react";
import { Container } from "../../container/Container";
import style from "./style.module.css";
import Card from "./Card";
import Buttons from "./Buttons";
import Data from "./data";
import MainBtn from "../../btns/MainBtn";

export default function Project() {
  const [item, setItem] = useState(Data);
  const menuItems: string[] = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat: string) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  return (
    <section className={style.project}>
      <Container>
        <div className={style.flex__group}>
          <h3 className={style.project__title}>
            <span>Latest</span>Projects
          </h3>
          <div className={style.btn__box}>
            <Buttons
              filterItem={filterItem}
              setItem={setItem}
              menuItems={menuItems}
            />
          </div>
        </div>
        <ul className={style.card__list}>
          <Card item={item} />
        </ul>
        <div className={style.project__btn}>
          <MainBtn text="Load more projects" />
        </div>
      </Container>
    </section>
  );
}
