"use client";
import Image from "next/image";
import style from "./style.module.css";

type Item = {
  id: number | string;
  img: string;
  category: string;
  title: string;
};

type CardProps = {
  item: Item[];
};

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <>
      {item.map((val: Item) => {
        return (
          <li key={val.id} className={style.card}>
            <div className={style.card__img}>
              <Image src={val.img} width={374} height={455} alt="image" />
            </div>
            <span className={style.card__category}>{val.category}</span>
            <h4 className={style.card__title}>{val.title}</h4>
          </li>
        );
      })}
    </>
  );
};

export default Card;
