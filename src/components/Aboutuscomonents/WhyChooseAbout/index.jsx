import React from 'react'
import { Row, Col, Flex, Image, Typography, Button } from 'antd'
import { motion } from 'framer-motion'
import { Trans, useTranslation } from 'react-i18next'

const { Title, Text } = Typography
const WhyChooseAbout = () => {

    const {t} = useTranslation()

    const data = [
        {
            title: t("Cultural Understanding"),
            desc: t("As a Saudi-based company, we deeply understand the local market and business practices.")
        },
        {
            title: t("Affordable and Transparent Pricing"),
            desc: t('We offer competitive pricing and flexible payment plans to fit your budget.')
        },
        {
            title: t("Tailored Solutions"),
            desc: t("Every project is customized to meet your unique business needs.")
        },
        {
            title: t("Commitment to Quality"),
            desc: t("From rigorous testing to ongoing support, we ensure your project is delivered to the highest standards.")
        },
        {
            title: t("Local Expertise, Global Standards"),
            desc: t("We combine Saudi cultural insights with global best practices to deliver world-class solutions.")
        },
    ]
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
                        <div>
                            <Image src='assets/images/whych.jpg' alt='Our Story' className='rounded-20' preview={false} />
                        </div>
                    </Col>
                    <Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                        <Flex vertical gap={20}>
                            <Flex vertical gap={5}>
                                <Title level={1} className='m-0'>
                                    <Trans i18nKey="why_choose" components={{ span: <span className="text-brown" /> }} />
                                </Title>
                                <div className="bar-main">
                                    <div className="bar bar-big"></div>
                                </div>
                            </Flex>
                            <Row gutter={[16, 16]}>
                                {
                                    data?.map((data,index)=>
                                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} key={index}>
                                            <Flex vertical gap={15}>
                                                <Flex gap={10}>
                                                    <span className='choose-badge'>
                                                        <Image src='assets/icons/checked.png' preview={false} width={15} />
                                                    </span>
                                                    <Title level={5}>
                                                        {
                                                            data?.title
                                                        }
                                                    </Title>
                                                </Flex>
                                                <Text className='fs-14'>
                                                    {
                                                        data?.desc
                                                    }
                                                </Text>
                                            </Flex>
                                        </Col>
                                    )
                                }
                            </Row>
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

export { WhyChooseAbout }