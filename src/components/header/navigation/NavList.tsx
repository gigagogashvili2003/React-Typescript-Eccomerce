import { NavListWrapper } from "./Navigation.Styled";
import NavItem from "./NavItem";

const NavList: React.FC<{ navItems: string[] }> = (props) => {
  const { navItems } = props;
  return (
    <NavListWrapper>
      {navItems.map((item) => (
        <NavItem key={item} name={item} />
      ))}
    </NavListWrapper>
  );
};

export default NavList;
