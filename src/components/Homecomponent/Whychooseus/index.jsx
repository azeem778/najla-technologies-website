import React from 'react'
import { Row, Col, Typography, Flex, Image } from 'antd'
const { Title, Text } = Typography
import { motion } from 'framer-motion'
import { Trans, useTranslation } from 'react-i18next'

const Whychooseus = () => {

    const {t} = useTranslation()

    const data = [
        {
            title: t("Cultural Understanding"),
            desc: t("As a Saudi-based IT firm, we deeply understand the local market, business practices, and customer preferences. Our solutions are designed to resonate with your audience and meet your specific needs.")
        },
        {
            title: t("Affordable and Flexible"),
            desc: t("We offer competitive pricing and flexible payment plans to ensure our services fit your budget. Whether you’re an individual entrepreneur or a growing business, we have a solution for you.")
        },
        {
            title: t("Tailored Solutions"),
            desc: t("From custom app development to website design, we create solutions that are tailored to your business. Our team works closely with you to ensure every detail meets your expectations.")
        },
        {
            title: t("Expert Team"),
            desc: t("Our team combines Saudi cultural insights with global technical expertise to deliver high-quality, innovative solutions. We’re passionate about helping SMBs in Riyadh achieve their digital goals")
        },
    ]
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
            viewport={{ once: false }}
        >
            <section className='padding-main'>
                <div className="container">
                    <Row gutter={[16, 16]} align={'middle'} justify={'space-between'}>
                        <Col sm={{ span: 24 }} md={{ span: 11 }} lg={{ span: 11 }}>
                            <div>
                                <Image src='assets/images/why.jpg' preview={false} className='rounded-20' />
                            </div>
                        </Col>
                        <Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                            <Flex vertical gap={20}>
                                <Flex vertical gap={5}>
                                    <Title level={4} className='m-0'>
                                        <Trans i18nKey={'why_choose'} components={{span: <span className='text-brown'></span> }} />
                                    </Title>
                                    <div className="bar-main">
                                        <div className="bar bar-big"></div>
                                    </div>
                                </Flex>
                                <Title level={1} className='m-0'>
                                    {t('Why Choose Najla Technologies?')}
                                </Title>
                                {/* <Text className='fs-15'>Our digital marketing services offer expert consulting and management across a wide range of online marketing strategies.</Text> */}
                                <Row gutter={[16, 16]} className='mt-3'>
                                    {
                                        data?.map((data,index)=>
                                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} key={index}>
                                                <Flex vertical gap={15}>
                                                    <Flex gap={10}>
                                                        <span className='choose-badge'>
                                                            <Image src='assets/icons/checked.png' preview={false} width={20} />
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
                </div>
            </section>
        </motion.div>
    )
}

export { Whychooseus }