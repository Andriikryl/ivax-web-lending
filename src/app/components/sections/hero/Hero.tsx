import React from "react";
import style from "./style.module.css";
import { Container } from "../../container/Container";
import HeroImage from "public/hero/hero.png";
import Image from "next/image";
import SubBtn from "../../btns/SubBtn";
import MainBtn from "../../btns/MainBtn";

export default function Hero() {
  return (
    <section className={style.hero}>
      <Container className={style.hero__container}>
        <div className={style.hero__box}>
          <div>
            <h1 className={style.hero__title}>
              Paint <br />
              your thoughts <br />
              <span className={style.title__space}>with</span>
              <span className={style.title__decor}> IVAX</span>
            </h1>
            <div className={style.flex__group}>
              <SubBtn text="Portfolio" />
              <MainBtn text="Check with us" />
            </div>
          </div>
          <div className={style.image__box}>
            <div className={style.box}>
              <Image
                src={HeroImage}
                width={494}
                height={672}
                alt="hero image"
              />
            </div>
          </div>
        </div>
        <ul className={style.hero__list}>
          <li className={style.list__item}>
            <span className={style.item__number}>20+</span>
            <span className={style.item__description}>Experts</span>
          </li>
          <li className={style.list__item}>
            <span className={style.item__number}>25+</span>
            <span className={style.item__description}>Verticals</span>
          </li>
          <li className={style.list__item}>
            <span className={style.item__number}>50+</span>
            <span className={style.item__description}>Regular customers</span>
          </li>
          <li className={style.list__item}>
            <span className={style.item__number}>110+</span>
            <span className={style.item__description}>Completed projects</span>
          </li>
        </ul>
      </Container>
    </section>
  );
}
