import React from 'react'
import { Row, Col, Flex, Image, Typography, Button } from 'antd'
import { motion } from 'framer-motion'
import { Trans, useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

const { Title, Text } = Typography
const Ourmission = () => {

    const {t} = useTranslation()
    const { language } = useSelector(state=>state?.app)
    return (
        <section className='padding-main'>
            <div className="container">
                <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                viewport={{once: false}}
                >
                <Row gutter={[16, 16]} justify={'space-between'} align={'middle'}>
                    <Col sm={{ span: 24 }} md={{ span: 11 }} lg={{ span: 11 }}>
                        <Flex justify='center'>
                            <div className='heroimginner'>
                                <img src='assets/images/ourmission.jpg' alt='' preview={false}/>
                            </div>
                        </Flex>
                    </Col>
                    <Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                        <Flex vertical gap={20}>
                            <Flex vertical gap={5}>
                                <Title level={1} className='m-0'>
                                    <Trans i18nKey={'our_mission'} components={{span: <span className='text-brown'></span> }} />
                                </Title>
                                <div className="bar-main">
                                    <div className="bar bar-big"></div>
                                </div>
                            </Flex>
                            <div className={language === 'ar'?'border-r-grey px-3':'border-l-grey px-3'}>
                                <Flex vertical gap={20}>
                                    <Text className='fs-15'>
                                        <Trans i18nKey={'mission_desc'} components={{span: <strong></strong>}} />
                                    </Text>
                                    <Flex>
                                        <Button className='btn3'>{t('More Details')}</Button>
                                    </Flex>
                                </Flex>
                            </div>
                        </Flex>
                    </Col>
                </Row>
                </motion.div>
                    <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                    viewport={{once: false}}
                    >
                </motion.div>
            </div>
        </section>
    )
}

export { Ourmission }