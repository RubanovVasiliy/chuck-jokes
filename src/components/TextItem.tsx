import React from 'react';

interface TextItemPropsTypes {
  children: React.ReactNode;
  className: string;
}

export default function TextItem(props: TextItemPropsTypes) {
  const { children, className } = props;

  return <div className={className}>{children}</div>;
}
