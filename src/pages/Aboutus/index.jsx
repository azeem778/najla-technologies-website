import React from 'react'
import { AboutOurservice, AboutusIntro, Breadcrumbs, Bringteam, Ourmission, Ourstory, Ourteam, WhyChooseAbout, } from '../../components'
import { useTranslation } from 'react-i18next'

const Aboutus = () => {

  const {t} = useTranslation()

  return (
    <div className='m-top-80'>
      <Breadcrumbs titleone={t('About Us')} titletwo={t('We Believe In Making A Positive Change In The World')} breadcrumbitem={{item:t('About Us'), to:'/'}} image='aboutusnew.jfif'/>
      <AboutusIntro />
      <Ourstory/>
      <Ourmission />
      <AboutOurservice />
      <WhyChooseAbout />
      <Ourteam/>
      <Bringteam/>
      {/* <Whatweoffer/> */}
    </div>
  )
}

export {Aboutus}