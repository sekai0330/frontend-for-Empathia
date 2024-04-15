import React, { useContext } from 'react';
import { Box } from 'theme-ui';
import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from 'components/drawer';
import { DrawerContext } from '../../contexts/drawer/drawer.context';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { Link } from 'react-scroll';
import { jsx, Container, Flex, Button } from 'theme-ui';
import {
  FaFacebookF,
  FaTwitter,
  FaGithubAlt,
  FaDribbble,
} from 'react-icons/fa';
import {menuItems, additionLinks} from './header.data';

import { useLogout } from 'hooks/useLogout';
import { useAuthContext } from 'hooks/useAuthContext';
import { useRouter } from 'next/router'



const social = [
  {
    path: '/',
    icon: <FaFacebookF />,
  },
  {
    path: '/',
    icon: <FaTwitter />,
  },
  {
    path: '/',
    icon: <FaGithubAlt />,
  },
  {
    path: '/',
    icon: <FaDribbble />,
  },
];

const MobileDrawer = () => {
  const router = useRouter()
  // logout hook
  const { logout } = useLogout()

  // global user state
  const { user } = useAuthContext()

  // logs user out upon click
  const handleClick = () => {
    logout()
  }

  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: 'TOGGLE',
    });
  }, [dispatch]);

  return (
    <Drawer
      width="320px"
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdMenu size="26px" />
        </Box>
      }
      open={state.isOpen}
      toggleHandler={toggleHandler}
      closeButton={<IoMdClose size="24px" color="#000000" />}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Scrollbars autoHide>
        <Box sx={styles.content}>

          <a href="/" style={styles.logoLink}><p style={styles.logoText}>TALKHAPPi</p></a>

          <Box sx={styles.menu}>
          
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

              {/*  */}
              {!user && (
                <>
                  {additionLinks.map(({ path, label }, i) => (
                  <a href={path} key={i} style={styles.additionalLinksStyles}>
                    {label}
                  </a>
                ))}
                </>
              )}

        
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
            
            

            
          </Box>

          <Box sx={styles.menuFooter}>
            <Box sx={styles.social}>
              {social.map(({ path, icon }, i) => (
                <Box as="span" key={i} sx={styles.social.icon}>
                  <Link to={path}>{icon}</Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Scrollbars>
    </Drawer>
  );
};

const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',

    '@media screen and (min-width: 1220px)': {
      display: 'none',
    },
  },

  drawer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'dark',
  },

  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer',
  },

  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '100px',
    pb: '40px',
    px: '30px',
  },

  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: '500',
      color: 'text_white',
      py: '15px',
      cursor: 'pointer',
      borderBottom: '1px solid #e8e5e5',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'secondary',
      },
      '&.active': {
        color: 'secondary',
      },
    },
  },

  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto',
    marginTop: '20px',
    
  },

  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'text',
      fontSize: 14,
      mr: '15px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0',
      },
      '&:hover': {
        color: 'secondary',
      },
    },
  },

  button: {
    color: 'white',
    fontSize: '14px',
    fw: '700',
    height: '45px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0',
  },

  logoutButton: {
    marginTop: '20px',
    marginLeft: '10px',
    background: 'transparent',
    border: 'solid 1px #9B9FA5',
    borderRadius: '4px', 
    color: '#9B9FA5',
    padding: '5px',
    cursor: 'poiner'
  },

  logoText: {
    fontSize: '24px',
  },

  logoLink: {
    textDecoration: 'none',
    color: '#000'
  },
  
};

export default MobileDrawer;
