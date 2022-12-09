import styled from 'styled-components';
import LinkButton from '../sub_components/LinkButton';

const Nav = styled.nav`
   position: fixed;
   top: 0;
   width: 100%;
   background-color: grey;
   padding: 16px 25px;
   z-index: 10;
   opacity: 0.8;
   display: flex;

   ul {
      list-style: none;
      display: flex;
      width: 100%;

      li {
         &::last-of-type {
            justify-self: flex-end;
         }
      }
   }
`;

function Navigation() {
   return (
      <Nav>
         <ul>
            <li>
               <LinkButton text='Contact Us'></LinkButton>
            </li>
         </ul>
      </Nav>
   );
}

export default Navigation;
