import React from 'react';
import styles from './footer.module.css'


import { Nav } from 'reactstrap';
  
  export default class Footer extends React.Component {

	render() {
	  return (
		<div className={styles.navFooter}>
		  <Nav color="black" dark expand="md" d-flex justify-content-center>
		  <p className={styles.footerText}>Copyright © 2023 de  Valdisnei Streaming. Todos os direitos reservados</p>
		  </Nav>
		</div>
	  );
	}
  }
 