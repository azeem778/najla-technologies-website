import React, { useState } from 'react'
import './index.css'
import { Row, Col, Flex, Card, Form, Typography, Image, Button } from 'antd'
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { MyInput, MySelect } from '../../Forms';
import { servcies,existingweb, methodCom } from '../../../shared/lookups/lookups';

const { Title, Text } = Typography;
const Formsection = () => {
    const [ selected, setSelected ] = useState()

    const handleChange = (e) => {
        setSelected( e === 'Yes' ? true : false )
    }

    const {t}= useTranslation()
    const { language } = useSelector(state=>state?.app)
    const service = servcies.map(item => ({ ...item, name: t(item?.name) }));
    const methodcoms = methodCom.map(item => ({ ...item, name: t(item?.name) }));
    const yesno = existingweb.map(item => ({ ...item, name: t(item?.name) }));
    return (
        <section className='padding-main'>
            <div className="container">
                <Row gutter={[24,24]} justify={'center'}>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
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
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 18 }}>
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
                                requiredMark={false}
                            >
                                <Row gutter={[16, 16]}>
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                                        <MyInput 
                                            label={t("Full Name")}
                                            name='fullName'
                                            required
                                            message={t('Enter full name')}
                                        />
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                                        <MyInput 
                                            label={t("Company Name (if applicable)")}
                                            name='companyName'
                                        />
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
                                        <MyInput 
                                            label={t("Phone Number")}
                                            name='fullName'
                                            required
                                            message={t('Enter phone number')}
                                        />
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                                        <MyInput 
                                            label={t("Email Address")}
                                            name='email'
                                            required
                                            message={t('Enter email address')}
                                        />
                                    </Col>
                                    <Col span={24}>
                                        <Title level={5} className='m-0 text-white text-center'>{t('Project Details')}</Title>
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 24 }}>
                                        <MySelect 
                                            label={t("What type of service are you looking for?")}
                                            name='service'
                                            required
                                            message={t('Choose service')}
                                            options={service}
                                        />
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                                        <MyInput 
                                            textArea
                                            label={t('Please briefly describe your project or your needs.')}
                                            name='brieflynote'
                                            required
                                            message={t('Enter breifly note')}
                                            rows={4}
                                        />
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                                        <MyInput 
                                            label={t("What is your target audience or market?")}
                                            name='targetAudience'
                                            required
                                            message={t('Enter target audience or market')}
                                        />
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                                        <MyInput 
                                            label={t("Do you have a specific deadline for this project?")}
                                            name='deadline'
                                            required
                                            message={t('Enter specific deadline')}
                                        />
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: selected ? 12:24 }}>
                                        <MySelect 
                                            label={t("Do you have an existing website, app, or system?")}
                                            name='existingweb'
                                            options={yesno}
                                            onChange = {(e)=>handleChange(e)}
                                        />
                                    </Col>
                                    {
                                        selected&&
                                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                                            <MyInput 
                                                label={t("Website Link")}
                                                name='link'
                                                required
                                                message={t('Enter website link')}
                                            />
                                        </Col>
                                    }
                                    <Col span={24}>
                                        <Title level={5} className='m-0 text-white text-center'>{t('Technical and Design Preferences')}</Title>
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                                        <MyInput 
                                            label={t("Do you have design preferences (colors, style, references)?")}
                                            name='design'
                                            required
                                            message={t('Enter design/style')}
                                        />
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                                        <MyInput 
                                            label={t("Are there any specific features you want to include?")}
                                            name='feature'
                                            required
                                            message={t('Enter specific features')}
                                        />
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 24 }}>
                                        <MyInput 
                                            label={t("Do you require ongoing maintenance and support?")}
                                            name='maintenance'
                                            required
                                            message={t('Enter ongoing maintenance')}
                                        />
                                    </Col>
                                    <Col span={24}>
                                        <Title level={5} className='m-0 text-white text-center'>{t('Budget and Contact')}</Title>
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                                        <MyInput 
                                            label={t("What is your estimated budget for this project?")}
                                            name='estbudget'
                                            required
                                            message={t('Enter estimated budget')}
                                            type='number'
                                        />
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                                        <MySelect 
                                            label={t("Preferred method of communication")}
                                            name='communication'
                                            required
                                            message={t('Enter method communication')}
                                            options={methodcoms}
                                        />
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                                        <MyInput 
                                            textArea
                                            label={t('Any additional notes or comments?')}
                                            name='additionalNote'
                                            rows={4}
                                        />
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