import React from 'react'
import { Card, Col, Flex, Row, Typography, Button, Image } from 'antd'
import { Trans, useTranslation } from 'react-i18next'
import { servicePageData } from '../../../data'
const { Title, Text } = Typography
const ServiceCards = () => {

  const {t} = useTranslation()
  return (
    <div className='padding-main'>
      <Row gutter={[24, 64]}>
        <Col span={24}>
          <Flex vertical align='center' className='text-center' gap={10}>
            <Title level={1} className='text-center m-0'>
              <Trans i18nKey={'Our Services'} components={{span: <span className='text-brown'></span>}} />
            </Title>
            <Text className='text-center fs-15'>
              {t('Repla – Innovative and Adaptable Digital Solutions for Modern Business')}
            </Text>
          </Flex>
        </Col>
        {
          servicePageData?.map((item,index) =>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} key={index}>
              <Card className='shadow-c h-100 border-0 servicecard'>
                <Flex vertical gap={20} align='center'>
                  <span className='servicecard-badge'>
                    <Image src={"/assets/icons/"+item?.img} preview={false} width={40} />
                  </span>
                  <Title level={5} className='m-0'>
                  {item?.title}
                  </Title>
                  <Text className='fs-14 text-justify'>
                  {item?.desc}
                  </Text>
                </Flex>
              </Card>
            </Col>
          
          )
        }
        
      </Row>
    </div>
  )
}

export { ServiceCards }