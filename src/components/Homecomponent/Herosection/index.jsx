import React from 'react'
import './index.css'
import { Row, Col, Typography, Flex, Button, Image } from 'antd'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;
const Herosection = () => {

  const {t}= useTranslation()
  const navigate = useNavigate()
  return (
    <section className='hero'>
      <div className="container">
        <Row gutter={[16, 16]} align={'middle'} justify={'space-between'}>
          <Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }}>
            <Flex vertical gap={20}>
              {/* <Title level={4} className='m-0'>{t('Najla Technologies Pvt. Ltd')}</Title> */}
              <Title className='m-0' level={2}>
                {t('Najla Technologies – Your Trusted IT Partner in Riyadh')}
              </Title>
              
              <Text className='fs-15 text-justify'>
                {/* {t('Unlock the full potential of your business with cutting-edge software solutions designed to drive growth and innovation. By turning your ideas into powerful, customized applications, we help you stay ahead of the curve in today’s competitive market.')} */}
                {t('Najla Technologies provides affordable, customized IT solutions for small and medium businesses (SMBs) in Riyadh. From app development to website design, we deliver innovative, culturally aligned solutions to help your business thrive. Discover how we can transform your digital presence today.')}
              </Text>
              <Flex gap={10}>
                <Button onClick={()=>navigate('/aboutus')} className='btn'>{t('About Us')}</Button>
                <Button onClick={()=>navigate('/contactus')} className='btn2'>{t('Contact Us')}</Button>
              </Flex>
            </Flex>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 10 }} lg={{ span: 10 }} xl={{ span: 10 }}>
            <div className='heroimginner'>
              <img src='assets/images/banner.webp' alt='' preview={false}/>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export { Herosection }