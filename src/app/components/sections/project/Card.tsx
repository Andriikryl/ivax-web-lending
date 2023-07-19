"use client";
import Image from "next/image";

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
          <div key={val.id}>
            <div>
              <Image src={val.img} width={374} height={455} alt="image" />
            </div>
            <span>{val.category}</span>
            <h4>{val.title}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Card;
