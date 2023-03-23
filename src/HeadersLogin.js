import React from 'react';
import logo from '../src/img/logo.png'

import { Navbar, NavbarBrand } from 'reactstrap';

  export default class HeadersLogin extends React.Component {
	render() {
	  return (
		<div>
		  <Navbar color="black" dark expand="md">
			<NavbarBrand href="/">
			<img src={logo} alt="logo" height="30" />
			</NavbarBrand>
		  </Navbar>
		</div>
	  );
	}
  }

