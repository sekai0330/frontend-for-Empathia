/** @jsx jsx */
import { jsx, Container, Flex, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
// import Link from 'next/link'
// import Logo from 'components/logo';
// import LogoDark from 'assets/logo.svg';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import MobileDrawer from './mobile-drawer';
import {menuItems, additionLinks} from './header.data';
import { useRouter } from 'next/router'

import { useLogout } from 'hooks/useLogout';
import { useAuthContext } from 'hooks/useAuthContext';

export default function Header({ className }) {
  const router = useRouter()

  // logout hook
  const { logout } = useLogout()

  // global user state
  const { user } = useAuthContext()

  // logs user out upon click
  const handleClick = () => {
    router.push("/")
    logout()
  }

  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">

        <Container sx={styles.container}>

          <a href="/" sx={styles.logoLink}><p sx={styles.logoText}>TALKHAPPI</p></a>


          <Flex as="nav" sx={styles.nav}>

          {(router.pathname != "/") ? (<></>) : ( <>
            {menuItems.map(({ path, label }, i) => (
              <Link
                activeClass="active"
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
              >
                {label}
              </Link>   
            ))}
          </>)}

          
          {/* Render button only if pathname is not /product */}
          {router.pathname != "/product" && <a href={!user ? "/signup" : "/product"} > 
              <Button
                className="donate__btn"
                variant="secondary"
                aria-label="Get Started"
              >
                {!user ? "Get Started" : "New Talk!"}
              </Button>
            </a>}
            

          {/* Conditional rendering to check if user is logged in */}
          { user && (
            <>
              {router.pathname != "/dashboard" && 
              <a href="/dashboard"> 
                <Button
                  className="donate__btn"
                  variant="secondary"
                  aria-label="dashboard"
                >
                  Dashboard
                </Button>
              </a> }
              

              {/* <span>Logged in with: {user.email}</span> */}
              <button onClick={handleClick} style={styles.logoutButton}>Log out: {user.email}</button>
            </>
          )}

          {/*  */}
          { !user && (
            <>
              {additionLinks.map(({ path, label }, i) => (
              <a href={path} key={i} style={styles.additionalLinksStyles}>
                {label}
              </a>
            ))}

            
            </>
          )}


          </Flex>

          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    flexWrap: 'nowrap',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: '0px',
    marginLeft: '0px',
    left: 0,
    right: 0,
    width: '100%'
  },

  additionalLinksStyles: {
    textDecoration: 'none',
  },

  nav: {
    mx: 'auto',
    marginRight: '0px',
    display: 'none',
    float: 'right', 
    color: 'inherit',
    whiteSpace: 'nowrap',
    '@media screen and (min-width: 1220px)': {
      display: 'block',
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
    },
  },
  logoText: {
    fontSize: '24px',
  },
  logoLink: {
    textDecoration: 'none',
    color: 'inherit'
  },

  logoutButton: {
    marginLeft: '10px',
    background: 'transparent',
    border: 'solid 1px #9B9FA5',
    borderRadius: '4px', 
    color: '#9B9FA5',
    padding: '5px',
    cursor: 'poiner'
  }
  
};
