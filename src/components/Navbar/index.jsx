import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './index.css';
import { Typography, Button, Dropdown } from 'antd';
import { actionsApi } from '../../shared/redux/actionsApi';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

const { Text } = Typography;

const Navbar = ({ isFooterLinkClicked, setRegClient }) => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const [activeLink, setActiveLink] = useState(0);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation()
  const dispatch= useDispatch()
  const [language, setLanguage]= useState()

  // translation area
  useEffect(() => {
    const activeIndex = menulink.findIndex(menu => menu.path === location.pathname);
    setActiveLink(activeIndex !== -1 ? activeIndex : 0);
  }, [location]);

  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  useEffect(()=>{
    let lang= localStorage.getItem("lang")
    setLanguage(lang  || 'ar')
    i18n.changeLanguage(lang  || 'ar')
    dispatch(actionsApi?.changeLanguage(lang  || 'ar'))
    document.body.dir = i18n.dir();
  }, []) 

  const handleChnage= (value)=>{
    setLanguage(value)
    localStorage.setItem("lang", value)
    i18n?.changeLanguage(value)
    // window.location.href='/'
    document.body.dir = i18n.dir(value);
    dispatch(actionsApi?.changeLanguage(value))
  }

  const items = [
    { label: 'Arabic', key: 1, onClick: () => handleChnage('ar'), },
    { label: 'Eng', key: 0, onClick: () => handleChnage('en'), },
  ]

  // end

  const showLargeNav = () => {
    const navbarSmall = document.getElementsByClassName("gen-navbar-small")[0];
    navbarSmall.setAttribute("class", "gen-navbar-small secondary-bg animation ");
    // gen-navbar-small-move
    const navbar = document.getElementsByClassName("gen-navbar")[0];
    if(language === 'ar')
      navbar.setAttribute('class', "gen-navbar secondary-bg gen-navbar-trans gen-mbl-border-l");
    else
      navbar.setAttribute('class', "gen-navbar secondary-bg gen-navbar-trans gen-mbl-border-r");
    setIsNavShowing(!isNavShowing);
  };

  const hideLargeNav = () => {
    const navbarSmall = document.getElementsByClassName("gen-navbar-small")[0];
    navbarSmall.setAttribute("class", "gen-navbar-small animation");
    const navbar = document.getElementsByClassName("gen-navbar")[0];
    if(language === 'ar')
      navbar.setAttribute('class',"gen-t gen-navbar")
    else
      navbar.setAttribute('class', "gen-navbar ");
    setIsNavShowing(!isNavShowing);
  };

  const menulink = [
    { tile: t('Home'), path: '/' },
    { tile: t('About Us'), path: '/aboutus' },
    { tile: t('Services'), path: '/services' },
    { tile: t('Portfolio'), path: '/portfolio' },
    { tile: t('Contact Us'), path: '/contactus' },

  ];

  

  

  return (
    <>
      <div className='gen-navbar-container' style={{ position: 'relative' }}>
        <div className='w-100'>
          <div className="gen-navbar-small">
            <div className="gen-navbar-inner">
              <div className='gen-navbar-left'><img src={'/assets/images/najla.png'} width={'100%'} alt="logo" /></div>
              <div className="gen-navbar-right">
                <div className="sp-cover" onClick={showLargeNav}>
                  <span className="sp sp-1 sp-1-click"></span>
                  <span className="sp sp-2 sp-2-click"></span>
                  <span className="sp sp-3 sp-3-click"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={language === 'ar' ? 'gen-navbar gen-t' : 'gen-navbar'}>
          <div className="gen-navbar-inner container">
            <div className='gen-navbar-left'>
              <img src='/assets/images/najla.png' width={'100%'} className='one' alt="logo" />
              <img src='/assets/icons/close.png' className='two' onClick={hideLargeNav} alt="close" />
            </div>
            <ul className="gen-navbar-middle">
              {
                menulink.map((menu, index) =>
                  menu.submenu ? (
                    <li
                      key={index}
                      className="items py-2 dropdownC"
                      onMouseEnter={toggleDropdown}
                      onMouseLeave={toggleDropdown}
                    >
                      <NavLink
                        to={menu.path}
                        className={activeLink === index && isFooterLinkClicked ? "nav-item active" : "nav-item"}
                        onClick={() => { setActiveLink(index); hideLargeNav(); }}
                      >
                        <div className='align-center'>
                          <Text strong className='my-0 item-name'>Connect to Pro</Text>
                        </div>
                      </NavLink>
                      <ul className="dropdownMenu">
                        {menu.submenu.map((submenu, subIndex) => (
                          <li key={subIndex} className="dropdown-item">
                            <NavLink
                              to={submenu.path}
                              className="nav-item"
                              onClick={hideLargeNav}
                            >
                              {submenu.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li key={index} className='items py-2'>
                      <NavLink
                        to={menu.path}
                        className={activeLink === index && isFooterLinkClicked ? "nav-item active" : "nav-item"}
                        onClick={() => { setActiveLink(index); hideLargeNav(); }}
                      >
                        <div className='align-center'>
                          <Text strong className= {language === 'ar' ? 'my-0 item-name fs-18':'my-0 item-name'}>{menu.tile}</Text>
                        </div>
                      </NavLink>
                    </li>
                  )
                )
              }
            </ul>
            <div>
              <Dropdown
                menu={{ items }}
                trigger={['click']}
              >
                <Button className='bg-transparent border0 p-0'>
                  <img src="/assets/images/world.png" alt="" width={30} />
                </Button>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Navbar };
