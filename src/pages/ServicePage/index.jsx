import React from 'react'
import { Breadcrumbs, ServiceCards } from '../../components'
import { useTranslation } from 'react-i18next'

const ServicePage = () => {

  const {t}= useTranslation()

  return (
    <div className='m-top-80'>
      <Breadcrumbs titleone={t('Services')} titletwo='Lorem ipsum is a dummy' breadcrumbitem={{ item: t('Services'), to: '/' }} image='ourservicesnew.jfif' />
      <div className='container'>
        <ServiceCards/>
      </div>
    </div>
  )
}

export {ServicePage}