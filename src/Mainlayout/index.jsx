import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Aboutus, Contactus, Home, PortfolioPage, ServicePage } from '../pages';
import { Footer, Navbar } from '../components';
import { AnimatePresence, motion } from 'framer-motion';
import { PortfolioDetails } from '../pages/PortfolioPage/PortfolioDetails';
import ScrollTop from '../components/ScrollTop';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { actionsApi } from '../shared';

const Mainlayout = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

const AppContent = () =>{

  const dispatch=useDispatch()
  const { i18n } = useTranslation();
  useEffect(()=>{
    let lang= localStorage.getItem("lang")
    i18n.changeLanguage(lang  || 'ar')
    dispatch(actionsApi?.changeLanguage(lang  || 'ar'))
    document.body.dir = i18n.dir();
  }, [])

    return(
      <>
      <ScrollTop/>
      <Navbar/>
      <AnimatePresence mode="wait">
        <Routes>
            <Route path='/' element={
              <Transition>
                <Home/>
              </Transition>
            }/>
            <Route path='/contactus' element={
              <Transition>
                <Contactus/>
              </Transition>
            }/>
            <Route path='/aboutus' element={
              <Transition>
                <Aboutus/>
              </Transition>
            }/>
            <Route path='/portfolio' element={
              <Transition>
                <PortfolioPage/>
              </Transition>
            }/>
            <Route path='/portfolio/details/:pId' element={
              <Transition>
                <PortfolioDetails/>
              </Transition>
            }/>
            <Route path='/services' element={
              <Transition>
                <ServicePage/>
              </Transition>
            }/>
        </Routes>
        </AnimatePresence>
        <Footer/>
      </>
    )
}

const Transition = ({ children }) => {
  return (
    <motion.div
      className="page-wrapper"
      initial={{ y: "10%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }} 
      exit={{ y: "-10%", opacity: 0 }}
      transition={{ duration: .3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export {Mainlayout}