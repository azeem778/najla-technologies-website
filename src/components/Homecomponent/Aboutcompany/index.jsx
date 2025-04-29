import React from 'react'
import './index.css'
import { Row, Col, Flex, Image, Typography } from 'antd'
import {motion} from 'framer-motion'
import { useTranslation } from 'react-i18next'
const { Title, Text } = Typography
const Aboutcompany = () => {

    const {t} = useTranslation()

    const data = [
        {
            icon:'ab-1.png',
            title:'Personalized client care grounded in cultural understanding',
        },
        {
            icon:'ab-2.png',
            title:'Local expertise with global standards',
        },
        {
            icon:'ab-3.png',
            title:'Customized technology that fits the Saudi business environment',
        },
        {
            icon:'ab-4.png',
            title:'Ongoing support that feels like a true partnership',
        }
    ]

    return (
        <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
            viewport={{once: false}}
        >
            <section className='padding-main bg-dark-blue'>
                <div className="container">
                    <Row gutter={[16, 24]} justify={'space-between'} align={'middle'}>
                        <Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                            <Flex vertical gap={20}>
                                <Flex vertical gap={10}>
                                    <Title level={3} className='text-brown m-0 text-uppercase'>
                                        {t('About Us')}
                                    </Title>
                                    <div className="bar-main">
                                        <div className="bar bar-big"></div>
                                    </div>
                                </Flex>
                                <Title level={2} className='m-0 text-white'>
                                    {t('Our Journey From small Airbnb Rentals to Tailored Tech Solutions for Saudi Arabia')}
                                </Title>
                                <Text className='fs-15 text-grey text-justify'>
                                    {t('We began as a local company specializing in daily rental properties, and after proving our success in the real estate sector, we expanded by collaborating with international partners on technology projects. Through this journey, we realized that our deep understanding of Saudi culture and business needs makes us the perfect bridge between global innovation and local relevance. That’s why we partnered with leading international firms to deliver IT solutions specifically tailored for the Saudi market. What sets us apart from other IT agencies is:')}
                                </Text>
                                <Row gutter={[24, 24]} className='mt-3'>
                                    {
                                        data?.map((items,index)=>
                                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} key={index}>
                                                <div>
                                                    <Flex gap={15}>
                                                        <span className='aboutcompany-badge'>
                                                            <Image src={'assets/icons/'+items?.icon} preview={false} width={35} />
                                                        </span>
                                                        <Title level={5} className='m-0 text-white fw-500'>{t(items?.title)}</Title>
                                                        {/* <Flex vertical gap={10}>
                                                            
                                                            <Text className='fs-14 text-grey'>{items?.desc}</Text>
                                                        </Flex> */}
                                                    </Flex>
                                                </div>
                                            </Col>
                                        )
                                    }
                                </Row>
                            </Flex>
                        </Col>
                        <Col sm={{ span: 24 }} md={{ span: 11 }} lg={{ span: 11 }}>
                            <div className='heroimginner'>
                                <img src='assets/images/abt.jpg' alt='' preview={false}/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </motion.div>
    )
}

export { Aboutcompany }