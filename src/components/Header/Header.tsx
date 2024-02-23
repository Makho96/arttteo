import Logo from "../Logo";
import Navigation from "../Navigation";
import Button from "../Shared/Button";
import './style.css';

const Header = () => {
  return <header>
    <div className="logo-container">
      <Logo />
    </div>
    <div className="nav-container">
      <Navigation />
    </div>
    <div className="talk-to-us">
      <Button text="talk to us" withBorder />
    </div>
  </header>
};

export default Header;