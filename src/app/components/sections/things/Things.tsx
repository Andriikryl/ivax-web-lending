import React from "react";
import style from "./style.module.css";
import { Container } from "../../container/Container";

export default function Things() {
  return (
    <section className={style.things}>
      <Container>
        <div className={style.things__box}>
          <h3 className={style.things__title}>
            We promise <span>six things</span>
          </h3>
          <div className={style.flex__group}>
            <ul className={style.things__list}>
              {" "}
              <li className={style.list__item}>
                Personalized approach towards each case
              </li>
              <li className={style.list__item}>No job is too small</li>
              <li className={style.list__item}>
                We are creative, inspired, curious, logic and open to critic
              </li>
            </ul>
            <ul className={style.things__list__rith}>
              <li className={style.list__item__right}>
                Your deadline is our religion
              </li>
              <li className={style.list__item__right}>
                Maximum flexibility to meet your needs{" "}
              </li>
              <li className={style.list__item__right}>
                24/7 direct contact with us{" "}
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
