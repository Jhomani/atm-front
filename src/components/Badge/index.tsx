import React from 'react';

interface InBadge {
  children?: JSX.Element | string;
  quantity?: number;
  showEmpty?: number;
  className?: string;
}

export const Badge = (props: InBadge) => {
  const {children, className = '', quantity = 0, showEmpty = false} = props;

  return (
    <div className={`badge ${className}`}>
      <span className="badge-quantity">{quantity}</span>
      {children}
    </div>
  );
};
