import React, { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Model S</a>

        <a href="#">Model 3</a>

        <a href="#">Model X</a>

        <a href="#">Model Y</a>

        <a href="#">Solar Roof</a>

        <a href="#">Solar Panels</a>
      </Menu>

      <RightMenu>
        <MainRmenu>
          <a href="#">Shop</a>
          <a href="#">Account</a>
        </MainRmenu>
        <CustomMenu onClick={() => setBurgerStatus(true)}>
          <a href="#">Menu</a>
        </CustomMenu>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li>
          <a href="#">Existing Inventory </a>
        </li>
        <li>
          <a href="#">Used Inventory </a>
        </li>
        <li>
          <a href="#">Trade-In </a>
        </li>
        <li>
          <a href="#">Demo Drive </a>
        </li>
        <li>
          <a href="#">Insurance </a>
        </li>
        <li>
          <a href="#">Cybertruck </a>
        </li>
        <li>
          <a href="#">Roadster </a>
        </li>
        <li>
          <a href="#">Semi </a>
        </li>
        <li>
          <a href="#">Charging </a>
        </li>
        <li>
          <a href="#">Powerwall </a>
        </li>
        <li>
          <a href="#">Commercial Energy </a>
        </li>
        <li>
          <a href="#">Utilities </a>
        </li>
        <li>
          <a href="#">Find Us </a>
        </li>
        <li>
          <a href="#">Support </a>
        </li>
        <li>
          <a href="#">Investor Relations </a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 400;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  a {
    font-weight: 400;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`;

const MainRmenu = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const CustomMenu = styled.div``;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 400;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
