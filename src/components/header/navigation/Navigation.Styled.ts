import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 10px;
`;

export const LogoWrapper = styled.div`
  color: white;
  font-weight: 800;
  font-size: 25px;
`;

export const NavListWrapper = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 15px;
`;

export const NavItemWrapper = styled.li`
  padding: 5px;
  text-transform: uppercase;

  a {
    font-weight: 100;
    color: white;
  }
`;

export const ActionListWrapper = styled.ul`
  color: white;
`;
