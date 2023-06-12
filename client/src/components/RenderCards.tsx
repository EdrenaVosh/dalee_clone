import React, { FC } from 'react';
import { Card } from './Card';

interface Data {
  _id: string;
}

interface RenderCardsProps {
  data?: Data[];
  title: string;
}

export const RenderCards: FC<RenderCardsProps> = ({ data, title }) => {
  if (data?.length) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">{title}</h2>
  );
};
