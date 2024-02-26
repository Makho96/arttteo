import { BackgroundSvg, StarSVG } from '../../static';
import CluchSRC from '../../assets/brands/Cluch.png';
import './style.css'
import Button from '../Shared/Button';
import { useTypingText } from '../../helpers/useTyping';
import { useEffect, useState } from 'react';
import Bouncer from '../Shared/Bouncer';
import SimpleSlider from '../Slider';

const Hero = () => {
  const [active, setActive] = useState(false)
  const { word } = useTypingText(
    ["exceptional SEO?", "your own AI?", "a developer?", "a tech team?"],
    50,
    20
  );
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setActive(true);
      clearTimeout(timeOut);
    },  100)
    return () => clearTimeout(timeOut)
  }, [])
  return (
    <div className={`hero-container ${active ? 'active' : ''}`}>
      <div className='background-container top'>
        <BackgroundSvg />
      </div>
      <div className='background-container bottom'>
        <BackgroundSvg />
      </div>
      <div className='main-text'>
        <div className='cluch'>
          <StarSVG />
          <span className='text'>5.0 Rated on</span>
          <img src={CluchSRC} alt='cluch-logo'/>
        </div>
        <h1>
          <span><Bouncer text='Need' /></span>
          <span className='changable-text'>{word}</span>
        </h1>
        <div className='button-container'>
          <Button text='talk to us' style={{background:'white'}} withBorder={false}/>
        </div>
      </div>
      <div className='slider-container'>
        <SimpleSlider />
      </div>
    </div>
  )
}

export default Hero;