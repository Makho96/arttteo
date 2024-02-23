import { useState, useEffect, Fragment, FC } from 'react';

import './style.css';
type Props = {
  text: string
}

const Bouncer = (props: Props) => {
  const { text } = props;
  const [active, setActive] = useState<boolean>(false);

  const titleArray:string[] = text.split('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActive(true);
      clearTimeout(timeout);
    }, 500)
  }, [])
  return (
    <div className={`bouncing-text ${active ? 'active' : ''}`}>
    {titleArray.map((symbol: string, index: number) => {
      return (
        <Fragment key={`${symbol}_${index}`}>
          {symbol === ' ' ? ' ' : (
            <SingleLetter 
              index={index + 1}
              symbol = {symbol}
            />            
          )}
        </Fragment>
      )
    })}
  </div>
  )
}

export default Bouncer


const SingleLetter:FC<{
  symbol: string,
  index: number
}> = (props) => {
  const {symbol, index} = props;
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      const timeout = setTimeout(() => {
        setIsHovered(false);
        clearTimeout(timeout);
      }, 1000)
    }
  }, [isHovered])
  return (
    <span 
      onMouseOver={() => {
        setIsHovered(true)
      }}
      className = {isHovered ? 'activeHoverEffect' : ''}
      style = {{'--i': index} as React.CSSProperties}
      >
      {symbol}
    </span>
  )
}