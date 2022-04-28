import React from 'react';
import './Options.css';

interface Props {
  title: string;
}

export function Options({ title }: Props) {
  return (<div className="OptionsContainer">
    User clicks should be displayed here.
  </div>);
};
