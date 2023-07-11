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
          <div>
            <Image src={HeroImage} width={494} height={672} alt="hero image" />
          </div>
        </div>
      </Container>
    </section>
  );
}
