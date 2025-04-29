import React from 'react'
import { Breadcrumbs, PortfiolioCards } from '../../components'
import { useTranslation } from 'react-i18next'

const PortfolioPage = () => {

  const {t} = useTranslation()

  return (
    <div className='m-top-80'>
      <Breadcrumbs titleone={t('Portfolio')} titletwo={t('Our drawing is inside the portfolio he is holding in his arms.')} breadcrumbitem={{ item: t('Portfolio'), to: '/' }}  image='portfolionew.avif'/>
      <div className='container'>
        <PortfiolioCards />
      </div>
    </div>
  )
}

export {PortfolioPage}