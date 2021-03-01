import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
`;

export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  width: 100%;

  li {
    a {
      padding: 15px;
      background: transparent;
      font-family: cursive, sans-serif;
      color: #000312;
      padding-top: 15px;
      padding-bottom: 15px;
      border: 0;
      transition: background-color 0.2s;
      font-weight: 600;
      font-size: 1.2em;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        color: gray;
        background: #000312;
      }
    }
  }
`;
