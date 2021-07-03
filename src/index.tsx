import React, { useState, useEffect } from 'react'
import Counter from 'counter-ui';

export type CounterWrapperProps = {
  className?: string
}

const CounterWrapper: React.FC<CounterWrapperProps> = ({ className = '' }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (count > 99) return setCount(0)

      setCount(count + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [count, setCount])

  return (
    <div className='counter__wrapper'>
      <Counter className={className} count={count} />
    </div>
  )
}

export default CounterWrapper;
