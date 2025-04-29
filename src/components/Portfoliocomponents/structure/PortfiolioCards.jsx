import React from 'react'
import { Card, Col, Flex, Row, Typography } from 'antd'
import { NavLink } from 'react-router-dom'
import { PortfolioData } from '../../../data'
import { Trans, useTranslation } from 'react-i18next'

const { Title, Text } = Typography
const PortfiolioCards = () => {

  const {t} = useTranslation()
  return (
    <div className='padding-main'>
      <Row gutter={[24,64]}>
        <Col span={24}>
          <Flex vertical align='center' className='text-center' gap={10}>
            <Title level={1} className='text-center m-0'>
              <Trans i18nKey={'Our Projects'} components={{span: <span className='text-brown'></span>}} />
            </Title>
            <Text className='text-center fs-15'>
              {t('Repla – Innovative and Adaptable Digital Solutions for Modern Business')}
            </Text>
          </Flex>
        </Col>
        {
          PortfolioData?.map((data, index)=>
            <Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}} lg={{span: 8}} key={index}>
              <Card className='bg-transparent border-0 card-p h-100'>
                <img src={"/assets/images/portfolio/"+data?.smimg} width={'100%'} className='round-corner-one h-100' alt="" />
                <div className='content-portfolio'>
                  <NavLink to={`/portfolio/details/${data?.id}`}>
                    <Flex vertical gap={5}>
                      <Text className='text-white fs-14'>{data?.subtitle}</Text>
                      <Title level={3} className='m-0 text-white'>{data?.title}</Title>
                    </Flex>
                  </NavLink>
                </div>
              </Card>
            </Col>
          )
        }
      </Row>
    </div>
  )
}

export {PortfiolioCards}