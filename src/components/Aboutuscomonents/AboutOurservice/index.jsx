import React from 'react'
import { Row, Col, Flex, Image, Typography, Button } from 'antd'
import { motion } from 'framer-motion'
import { Trans, useTranslation } from 'react-i18next'

const { Title, Text } = Typography
const AboutOurservice = () => {

    const {t} = useTranslation()

    const data = [
        {
            title: t("Web Development"),
            desc: t("Responsive, user-friendly websites tailored to your business needs.")
        },
        {
            title: t("Mobile Development"),
            desc: <Trans i18nKey="mobile" components={{ span: <strong></strong> }} />
        },
        {
            title: t("UI/UX Design"),
            desc: t("Visually appealing, easy-to-navigate designs optimized for user satisfaction.")
        },
        {
            title: t("IT Consultancy"),
            desc: t("Expert guidance to help you identify the right technology solutions.")
        },
        {
            title: t("QA & Testing"),
            desc: t("Rigorous testing to ensure your project is bug-free and secure.")
        },
        {
            title: t("Cyber Security"),
            desc: t("Robust solutions to protect your business from digital threats.")
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
                    <Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                        <Flex vertical gap={20}>
                            <Flex vertical gap={5}>
                                <Title level={1} className='m-0'>
                                    <Trans i18nKey="Our Services" components={{ span: <span className="text-brown" /> }} />
                                </Title>
                                <div className="bar-main">
                                    <div className="bar bar-big"></div>
                                </div>
                            </Flex>
                            <Title level={4} className='m-0'>
                                {t('We offer a comprehensive range of IT services, including:')}
                            </Title>
                            <Row gutter={[16, 16]} className='mt-3'>
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
                    <Col sm={{ span: 24 }} md={{ span: 11 }} lg={{ span: 11 }}>
                        <div>
                            <Image src='assets/images/services-1.jpg' alt='Our Story' className='rounded-20' preview={false} />
                        </div>
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

export { AboutOurservice }