import React from 'react'
import { Row, Col, Typography, Flex, Image, Space } from 'antd'
import { motion } from 'framer-motion'
import { Trans, useTranslation } from 'react-i18next'

const { Title, Text } = Typography
const Ourworkflow = () => {

    const {t} = useTranslation()
    const data = [
        {
            title: t("Initial Consultation"),
            desc: t("We start by understanding your business needs and project goals. Our team will schedule a meeting to discuss your requirements, budget, and timeline.")
        },
        {
            title: t("Requirement Gathering"),
            desc: t("Our experts will work closely with you to gather all necessary details, including design preferences, technical specifications, and target audience.")
        },
        {
            title: t("Proposal and Planning"),
            desc: t("Based on your requirements, we’ll create a detailed project proposal, including timelines, milestones, and costs. Once approved, we move to the planning phase.")
        },
        {
            title: t("Design and Development"),
            desc: t("Our team will design and develop your project, whether it’s a website, mobile app, or custom software. We focus on user-friendly interfaces and seamless functionality.")
        },
        {
            title: t("Testing and Quality Assurance"),
            desc: t("Before delivery, we rigorously test your project to ensure it’s bug-free, secure, and performs flawlessly across all devices and platforms.")
        },
        {
            title: t("Deployment and Launch"),
            desc: t("Once testing is complete, we’ll deploy your project and ensure a smooth launch. Our team will provide training and support to help you get started.")
        },
        {
            title: t("Post-Launch Support"),
            desc: t("We offer ongoing support and maintenance to ensure your project continues to perform at its best. Our team is always available to address any issues or updates.")
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
                    <Row gutter={[16, 16]} justify={'space-between'} align={'middle'}>
                        <Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                            <Flex vertical gap={20}>
                                <Flex vertical gap={5}>
                                    <Title level={1} className='m-0'>
                                        <Trans i18nKey={'workflow'} components={{span: <span className='text-brown'></span> }} />
                                    </Title>
                                    <div className="bar-main">
                                        <div className="bar bar-big"></div>
                                    </div>
                                </Flex>
                                <Text className='fs-15'>
                                    <Trans i18nKey='workflow-desc' components={{span: <strong></strong>}}></Trans>
                                </Text>
                                <Row gutter={[16, 16]} className='mt-3'>
                                    {
                                        data?.map((data,index)=>
                                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} key={index}>
                                                <Flex gap={10} vertical>
                                                    <Title level={5} className='m-0'> {index+1}. {data?.title}</Title>
                                                    <Text className='fs-14'>{data?.desc}</Text>
                                                </Flex>
                                            </Col>
                                        )
                                    }
                                </Row>
                            </Flex>
                        </Col>
                        <Col sm={{ span: 24 }} md={{ span: 11 }} lg={{ span: 11 }}>
                            <div>
                                <Image src='assets/images/workflow-1.webp' preview={false} className='rounded-20' />
                            </div>
                        </Col>

                    </Row>
                </div>
            </section>
        </motion.div>
    )
}

export { Ourworkflow }