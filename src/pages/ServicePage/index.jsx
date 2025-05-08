import React from 'react'
import { Breadcrumbs, ServiceCards } from '../../components'
import { useTranslation } from 'react-i18next'

const ServicePage = () => {

  const {t}= useTranslation()

  return (
    <div className='m-top-80'>
      <Breadcrumbs titleone={t('Services')} titletwo={t('Innovative technology solutions specifically designed to meet your business needs in Saudi Arabia and enhance your digital growth.')} breadcrumbitem={{ item: t('Services'), to: '/' }} image='ourservicesnew.jfif' />
      <div className='container'>
        <ServiceCards/>
      </div>
    </div>
  )
}

export {ServicePage}