import React from 'react'
import { Row, Col, Typography, Flex, Image, Card } from 'antd'
import {motion} from 'framer-motion'
import { Trans, useTranslation } from 'react-i18next';
const { Title, Text } = Typography;
const Ourvalues = () => {

    const {t} = useTranslation()

    const valuesData = [
        {
            id: '1',
            img: 'services.png',
            title: 'Top-Notch Services',
            desc: 'Our top-notch services are designed to exceed expectations and deliver exceptional results. '
        },
        {
            id: '2',
            img: 'excellence.png',
            title: 'Commitment to excellence',
            desc: "We are dedicated to delivering exceptional services to clients around the globe. "
        },
        {
            id: '3',
            img: 'customer-retention.png',
            title: 'Customers Satisfaction',
            desc: "Above all, customer satisfaction is our top priority and we guarantee outstanding results."
        }
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
                    <Row justify={'center'}>
                        <Col sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 18 }} xl={{ span: 18 }}>
                            <Flex vertical justify='center' align='center' className='w-100' gap={20}>
                                <Flex vertical gap={5} align='center'>
                                    <Title level={1} className='text-center m-0'>
                                        <Trans i18nKey={'company_intro'} components={{span: <span className='text-brown'></span>}} />
                                    </Title>
                                    <div className="bar-main">
                                        <div className="bar bar-big"></div>
                                    </div>
                                </Flex>
                                <Title level={4} className='text-center m-0'>
                                    {t('Empowering SMBs in the kingdom of Saudi Arabia with Tailored IT Solutions')}
                                </Title>
                                <Text className='text-center fs-15'>
                                    <Trans i18nKey="service-desc" components={{ span: <strong></strong>}} />
                                </Text>
                            </Flex>
                        </Col>
                    </Row>
                </motion.div>
                <Row gutter={[16, 16]} justify={'space-between'} className='mt-50'>
                    {
                        valuesData?.map((cdata, index) => (
                            <Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 7 }} xl={{ span: 7 }} key={index}>
                                <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{ delay:index, duration: 1, ease: "easeInOut" }}
                                viewport={{once: false}}
                                >
                                    <Card className='shadow-c rounded-20 py-3 h-100 ourvaluesCard'>
                                        <Row gutter={[24, 24]} justify={'space-between'} align={'middle'}>
                                            <Col span={24}>
                                                <Flex justify='center'>
                                                    <span className='servicecard-badge'>
                                                        <Image src={"/assets/icons/"+cdata?.img} preview={false} width={40} />
                                                    </span>
                                                </Flex>
                                                <Flex vertical gap={20} className='content'>
                                                    <Title level={4} className='m-0  text-center'>
                                                        {cdata?.title}
                                                    </Title>
                                                    <Text className='text-center fs-15'>
                                                        {cdata?.desc}
                                                    </Text>
                                                </Flex>
                                            </Col>
                                        </Row>
                                        <div className='dots-image'>
                                            <Image src='assets/images/dot.svg' width={200} preview={false} />
                                        </div>
                                    </Card>
                                </motion.div>
                            </Col>
                        ))
                    }

                </Row>
            </div>
        </section>
    )
}

export { Ourvalues }