import React from 'react'
import { Row, Col, Flex, Image, Typography, Button, Divider } from 'antd'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
const { Title, Text } = Typography
const Bringteam = () => {


    const {t} = useTranslation()

    return (
        <section className='padding-main'>
            <div className="container">
                <Row gutter={[16, 16]} justify={'space-between'}>
                    <Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                        <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                        viewport={{once: false}}
                        >
                        <Flex vertical gap={15}>
                            <Title level={1} className='m-0'>
                                {t('Empowering the Future: Arab Heritage Meets IT Innovation')}
                            </Title>
                            <Text className='fs-15'>
                                {t('We strive to provide exceptional IT solutions that blend the rich traditions of Arab professionalism and ethics with cutting-edge technology. Our goal is to create an outstanding and seamless experience for every client by focusing on service excellence, integrity, and innovation.')}
                            </Text>
                            <Divider className='bg-brand'/>
                            <div>
                            <Row gutter={[16,16]} align={'middle'}>
                                <Col xs={{span:5}} sm={{span:5}} md={{span:5}} lg={{span:5}}>
                                <Image src='assets/images/ceo.png' preview={false} width={80} style={{ borderRadius: "50%" }}/>
                                </Col>
                                <Col xs={{span:19}} sm={{span:19}} md={{span:19}} lg={{span:19}}>
                                    <Flex vertical gap={10}>
                                        <Text className='fs-15'>Squad development is the process creang web minds lod</Text>
                                        <Flex gap={30} align='center'>
                                            <Title level={4} className='m-0'>Najla Shoaib</Title>
                                            <Text level={5} className=''>CEO & Co-Owner at Najla</Text>
                                        </Flex>
                                    </Flex>
                                </Col>
                            </Row>
                            </div>
                        </Flex>
                        </motion.div>
                    </Col>
                    <Col sm={{ span: 24 }} md={{ span: 11 }} lg={{ span: 11 }}>
                        <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
                        viewport={{once: false}}
                        >
                            <Image src='assets/images/bringteam.webp' alt='Our Story' className='rounded-20' preview={false} />
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export { Bringteam }