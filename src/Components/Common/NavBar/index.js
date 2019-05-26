import React from "react";
import styled from "styled-components";
import palette  from '../../../Pallete';
const Navbar = styled.nav`
  /* margin: 10px;
  padding: 10px; */
  width: 100%;
  height: 100px;
  background-color:${palette.color.grey.main};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const List = styled.li`
  list-style: none;
  margin-left: 20px;
  padding: 10px;
  color:${palette.color.grey};
  :hover{
    color:${palette.color.primary.main};
    cursor:pointer;
    -webkit-transition:bottom .10s ease-in-out;
    -moz-transition:bottom .10s ease-in-out;
    -o-transition:bottom .10s ease-in-out;
    transition:bottom .3s ease-in-out
  }
  
`;

const NavBar = () => {
  return (
    <Navbar>
      
        <List>Products</List>
        <List>About</List>
        <List>Order</List>
        <List>Contact</List>
      
    </Navbar>
  );
};

export default NavBar;
