import React from 'react'
import './styles.scss'

export interface CounterProps {
  count: number;
  className: string;
};

const Counter: React.FC<CounterProps> = ({ count, className }) => (
  <div className={`counter ${className}`}>
    <p
      key={count}
      className={`counter__count ${className ? className + '__count' : ''}`}
    >
      {count}
    </p>
  </div>
)

export default Counter;
