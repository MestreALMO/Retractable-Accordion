import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Container, Ul } from './styles';

const Navbar: React.FC = () => (
  <>
    <Container>
      <Accordion className="Accordion">
        <AccordionSummary
          className="AccordionSummary"
          expandIcon={<ExpandMoreIcon />}
        >
          Navbar
        </AccordionSummary>
        <AccordionDetails className="AccordionDetails">
          <Ul>
            <li>
              <a href="#pag01">01</a>
            </li>
            <li>
              <a href="#pag02">02</a>
            </li>
            <li>
              <a href="#pag03">03</a>
            </li>
            <li>
              <a href="#pag04">04</a>
            </li>
          </Ul>
        </AccordionDetails>
      </Accordion>
    </Container>
  </>
);

export default Navbar;
