import { useState } from "react";

const Logo = () => {
  return (
    <img
      className="logo"
      alt="logo"
      src="https://cdnb.artstation.com/p/assets/images/images/041/081/239/large/vivien-kecskes-ratatouille-04.jpg?1630690912"
    />
  );
};

const Title = () => {
  return <h1>Ratatouille </h1>;
};

const Header = () => {
  const [signIn, setSignIn] = useState(false);
  function isSignIn() {
    if (signIn) {
      setSignIn(false);
    } else {
      setSignIn(true);
    }
  }
  return (
    <div className="header">
      <Logo />
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Restaurant</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
        </ul>
      </div>
      <div>
        {signIn ? (
          <button onClick={() => isSignIn()}>SignOut</button>
        ) : (
          <button onClick={() => isSignIn()}>SignIn</button>
        )}
      </div>
    </div>
  );
};

export default Header;
