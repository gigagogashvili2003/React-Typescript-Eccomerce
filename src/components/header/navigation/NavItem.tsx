import React from "react";
import { Link } from "react-router-dom";
import { NavItemWrapper } from "./Navigation.Styled";

const NavItem: React.FC<{ name: string }> = (props) => {
  const { name } = props;

  return (
    <NavItemWrapper>
      <Link to={`/${name.toLowerCase()}`}>{name}</Link>
    </NavItemWrapper>
  );
};

export default NavItem;
