import React from 'react';

import { Container } from './styles';
import Navbar from './navbar';

const Dashboard: React.FC = () => (
  <>
    <Container>
      <Navbar />
      <h1>Hello World</h1>
      <p>Template</p>
      <br />
      <a href="Page2">Sign up</a>
      <div id="pag01">01</div>
      <div id="pag02">02</div>
      <div id="pag03">03</div>
      <div id="pag04">04</div>
    </Container>
  </>
);

export default Dashboard;
