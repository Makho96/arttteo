import { CSSProperties } from 'react';
import './style.css'

type Props = {
  size?: 'sm' | 'md' | 'lg',
  type?: 'submit' | 'reset' | 'button',
  text?: string,
  children?: React.ReactNode,
  onClick?: () => void;
  withBorder?: boolean;
  style?: CSSProperties;
  className?: string;
}

const Button = (props: Props) => {
  const {
    size = 'md',
    type = 'button',
    text,
    children,
    withBorder,
    style,
    className,
    onClick,
  } = props;
  return (
    <button
      onClick={onClick}
      type={type} 
      className={`button ${className}`}
      data-size={size} 
      data-widthborder={withBorder} 
      style={{...style}}
    >
      <div className='text'>
        {children || text}
      </div>
      <span className="first"></span>
      <span className="second"></span>
      <span className="third"></span>
      <span className="fourth"></span>
    </button>
  )
}

export default Button;