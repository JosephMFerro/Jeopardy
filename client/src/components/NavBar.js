import React from "react";
import { NavLink, } from "react-router-dom";
import { Menu, } from "semantic-ui-react";

const Navbar = () => (
  <Menu>
    <Menu.Item>
      <NavLink exact to="/">
        Home
      </NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink exact to="/categories">
        Categories
      </NavLink>
    </Menu.Item>
  </Menu>
);

export default Navbar;