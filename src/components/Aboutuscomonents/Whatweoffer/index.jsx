import React from 'react'
import './index.css'
import { Row, Col, Card, Flex, Typography, Image } from 'antd'
const { Title, Text } = Typography;
const Whatweoffer = () => {
    const cardData = [
        {
            id: '1',
            img: 'web-development.png',
            title: 'Web Application Development'
        },
        {
            id: '2',
            img: 'mobile-application.png',
            title: 'Mobile Application Development'
        },
        {
            id: '3',
            img: 'web-designing.png',
            title: 'Web Designing'
        },
        {
            id: '4',
            img: 'ui-ux.png',
            title: 'UI/UX Designing'
        },
        {
            id: '5',
            img: 'digital-marketing.png',
            title: 'Digital Marketing'
        },
        {
            id: '5',
            img: 'cms.png',
            title: 'CMS Development'
        },
    ]
    return (
        <section className='padding-main'>
            <div className="container">
                <Row gutter={[16, 16]} justify={'center'}>
                    <Col span={16}>
                        <Flex vertical gap={10}>
                            <Title level={1} className='m-0 text-center'>What <span className='text-skyblue'>We</span> Offers</Title>
                            <Text className='fs-15 text-center'>
                                We help clients globally pursue their Digital Transformation goals through intelligent software development. We deliver cutting-edge solutions for our clients.
                            </Text>
                        </Flex>
                    </Col>
                </Row>
                <Row gutter={[16, 16]} justify={'space-between'} className='mt-5'>
                    {
                        cardData?.map((cdata, index) => (
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 7 }} key={index}>
                                <Card className='shadow-c offercard border-0'>
                                    <span className='offercard-badge'></span>
                                    <Flex justify='center'>
                                        <Image src={`assets/icons/${cdata.img}`} className='offercard-badge-image' width={40} preview={false} />
                                    </Flex>

                                    <Title level={5} className='mt-3 text-center offercard-title'>{cdata?.title}</Title>
                                </Card>
                            </Col>
                        ))
                    }

                </Row>
            </div>
        </section>
    )
}

export { Whatweoffer } 