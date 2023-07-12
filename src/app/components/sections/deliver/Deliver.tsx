import React from "react";
import style from "./style.module.css";
import { Container } from "../../container/Container";
import ImageOne from "public/deliver/deliver-item.svg";
import ImageTwo from "public/deliver/deliver-item-two.svg";
import ImageThree from "public/deliver/deliver-item-three.svg";
import ImageFour from "public/deliver/deliver-item-four.svg";
import MainImage from "public/deliver/main-image.png";
import Image from "next/image";

export default function Deliver() {
  return (
    <section className={style.deliver}>
      <Container>
        <div className={style.deliver__box}>
          <h2 className={style.deliver__title}>
            We <span>deliver</span>
          </h2>
          <ul className={style.deliver__list}>
            <li className={style.list__item}>
              <div className={style.item__image}>
                <Image src={ImageOne} width={50} height={54} alt="image" />
              </div>
              <h3 className={style.item__title}>Branding</h3>
              <ul className={style.item__list}>
                <li className={style.sub__item}>Brand identity</li>
                <li className={style.sub__item}>Brand strategy</li>
                <li className={style.sub__item}>Visual conception</li>
                <li className={style.sub__item}>Advertising</li>
              </ul>
            </li>
            <li className={style.list__item}>
              <div className={style.item__image}>
                <Image src={ImageTwo} width={54} height={54} alt="image" />
              </div>
              <h3 className={style.item__title}>WEB design</h3>
              <ul className={style.item__list}>
                <li className={style.sub__item}>Websites</li>
                <li className={style.sub__item}>UX/UI</li>
                <li className={style.sub__item}>Mobile apps</li>
              </ul>
            </li>
            <li className={style.list__item}>
              <div className={style.item__image}>
                <Image src={ImageThree} width={56} height={54} alt="image" />
              </div>
              <h3 className={style.item__title}>Web development</h3>
              <ul className={style.item__list}>
                <li className={style.sub__item}>Landing-pages</li>
                <li className={style.sub__item}>Corporate sites</li>
                <li className={style.sub__item}>Online-stores</li>
              </ul>
            </li>
            <li className={style.list__item}>
              <div className={style.item__image}>
                <Image src={ImageFour} width={55} height={54} alt="image" />
              </div>
              <h3 className={style.item__title}>Video</h3>
              <ul className={style.item__list}>
                <li className={style.sub__item}>Filmmaking</li>
                <li className={style.sub__item}>Animation</li>
                <li className={style.sub__item}>Advertisement</li>
                <li className={style.sub__item}>Social</li>
              </ul>
            </li>
            <li className={style.list__itemImage}>
              <Image src={MainImage} width={514} height={641} alt="image" />
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
