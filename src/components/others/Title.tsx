import React from "react";

interface TitleProps {
  title: string;
  color?: string;
  size?: string;
  align?: string;
}

function Title({ title, color, size, align }: TitleProps) {
  return <h1 className={`${color} ${size} text-${align}`}>{title}</h1>;
}

export default Title;
