import ActionsList from "./ActionsList";
import Logo from "./Logo";
import { NavigationWrapper } from "./Navigation.Styled";
import NavList from "./NavList";

const Navigation = () => {
  const navItems = ["Shop", "Team", "Events", "Compant", "Contact"];

  return (
    <NavigationWrapper>
      <Logo />
      <NavList navItems={navItems} />
      <ActionsList />
    </NavigationWrapper>
  );
};

export default Navigation;
