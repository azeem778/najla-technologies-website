import React from 'react'
import './index.css'
import { Row, Col, Flex, Card, Form, Typography, Image, Input, Button, message } from 'antd'
import { motion } from 'framer-motion';
import TextArea from 'antd/es/input/TextArea';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const { Title, Text } = Typography;
const Formsection = () => {

    const {t}= useTranslation()
    const { language } = useSelector(state=>state?.app)
    return (
        <section className='padding-main'>
            <div className="container">
                <Row gutter={[24,24]} justify={'center'}>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 10 }}>
                        <Card className='border-0 left-contact'>
                            <Flex vertical gap={20}>
                                <Flex gap={10} align='center'>
                                    <span className='servicecard-badge'>
                                        <Image src={"/assets/icons/call.png"} preview={false} width={30} />
                                    </span>
                                    <Text className='fs-16 fw-500'>124438800-3</Text>
                                </Flex>
                                <Flex gap={10} align='center'>
                                    <span className='servicecard-badge'>
                                        <Image src={"/assets/icons/email.png"} preview={false} width={30} />
                                    </span>
                                    <Text className='fs-16 fw-500'>example@example.com</Text>
                                </Flex>
                                <Flex gap={10} align='center'>
                                    <span className='servicecard-badge'>
                                        <Image src={"/assets/icons/location.png"} preview={false} width={30} />
                                    </span>
                                    <Text className='fs-16 fw-500'>Riyadh, Saudi Arab</Text>
                                </Flex>
                                <Flex gap={10} className='mt-3'>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <Image src='/assets/icons/twitter.png' width={'30px'} preview={false} />
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <Image src='/assets/icons/facebook.png' width={'30px'} preview={false} />
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <Image src='/assets/icons/linkedin.png' width={'30px'} preview={false} />
                                    </a>
                                    <a href="#" target="_blank" >
                                        <Image src='/assets/icons/insta.png' width={'30px'} preview={false} />
                                    </a>
                                </Flex>
                            </Flex>
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 14 }}>
                        <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
                        viewport={{once: false}}
                        >
                        <Card className='h-100 contact-card shadow-c'>
                            <Form
                                layout='vertical'
                            >
                                <Row gutter={[16, 16]}>
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                                        <Form.Item
                                            label={t("First Name")}
                                            name="firstName"
                                            rules={[
                                                {
                                                    required:true,
                                                    message:t('Please enter your first name')
                                                }
                                            ]}
                                        >
                                            <Input size='large' placeholder={t('Enter First Name')}/>
                                        </Form.Item>
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                                        <Form.Item
                                            label={t("Last Name")}
                                            name="lastName"
                                            rules={[
                                                {
                                                    required:true,
                                                    message:t('Please enter your last name')
                                                }
                                            ]}
                                        >
                                            <Input size='large' placeholder={t('Enter Last Name')} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                                        <Form.Item
                                            label={t("Subject")}
                                            name="subject"
                                            rules={[
                                                {
                                                    required:true,
                                                    message:t('Please enter subject')
                                                }
                                            ]}
                                        >
                                            <Input size='large' placeholder={t('Enter Subject')}/>
                                        </Form.Item>
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                                        <Form.Item label={t("Message")} name="message">
                                            <TextArea rows={4} placeholder={t('Enter Your Message')} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                                        <Flex justify={language === 'ar' ? 'start' : 'end'}>
                                            <Button className='btn'>{t('Submit')}</Button>
                                        </Flex>
                                    </Col>
                                </Row>
                            </Form>
                        </Card>
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export { Formsection } 