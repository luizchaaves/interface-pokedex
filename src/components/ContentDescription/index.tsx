import React from 'react';
import { Title } from './styles';
import Divider from '../Divider';

interface Props {
  title: string;
  children: React.ReactNode;
}

const ContentDescription = ({ title, children }: Props) => {
  return (
    <div>
      <Title>
        <h3>{title}</h3>
        <Divider />
      </Title>
      {children}
    </div>
  );
};

export default ContentDescription;
