import React from "react";
// import { Container } from './styles';

const Header = props => {
  return (
    <div className="header">
      <h3>{props.children}</h3>
    </div>
  );
};

export default Header;
