import React from 'react';
import Footer from '../Footer';
import CompLogin from '../CompLogin';
import HeadersLogin from '../HeadersLogin';

function Login() {
  return (  
    <div>
        <header>
          <HeadersLogin />
        </header> 
        <div>
        <CompLogin />
        </div>
      <footer>
          <Footer />
        </footer>
    </div>
  );
}

export default Login;
