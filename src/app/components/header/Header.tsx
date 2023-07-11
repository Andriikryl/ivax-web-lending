"use client";

import React, { useEffect, useState } from "react";
import { Container } from "../container/Container";
import Logo from "public/logo/logo.svg";
import Image from "next/image";
import style from "./style.module.css";
import BurgerButton from "./BurgerButton";

export default function Header() {
  const [activeState, setActiveState] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("dis-scroll", activeState);
  }, [activeState]);

  const handleClick = () => {
    setActiveState((prev) => !prev);
  };
  return (
    <header className={style.header}>
      <Container>
        <div className={style.header__box}>
          <a className={style.logo} href="#">
            <Image src={Logo} alt="logo" />
          </a>
          <nav
            className={`${style.nav} ${activeState ? style.menu_active : ""}`}
          >
            <ul className={style.nav__list}>
              <li className={style.list__item}>
                <a className={style.list__link} href="#">
                  Conatct
                </a>
              </li>
              <li className={style.list__item}>
                <a className={style.list__link} href="#">
                  Why work with us
                </a>
              </li>
              <li className={style.list__item}>
                <a className={style.list__link} href="#">
                  We delivery
                </a>
              </li>
              <li className={style.list__item}>
                <a className={style.list__link} href="#">
                  They trust us
                </a>
              </li>
              <li className={style.list__item}>
                <a className={style.list__link} href="#">
                  Latest Project
                </a>
              </li>
            </ul>
          </nav>
          <BurgerButton onClick={handleClick} activeState={activeState} />
        </div>
      </Container>
    </header>
  );
}
