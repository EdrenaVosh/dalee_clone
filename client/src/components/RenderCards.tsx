import React, { FC } from 'react';
import { Card } from './Card';
import { Data } from '../types';

interface RenderCardsProps {
  data: Data[] | null;
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
