import React, { useEffect, useRef, useState } from 'react'
import { Row, Col, Typography, Flex, Card, Rate, Space, Image, message } from 'antd';
import Slider from 'react-slick';
import { Trans, useTranslation } from 'react-i18next';

const { Title, Text, Paragraph } = Typography;
function Testimonials() {
    const [expanded, setExpanded] = useState(false)
    const {t} = useTranslation()

    const testimonialData = [
        {
            img: 'av-1.png',
            title: 'Zahir Ziyad',
            desc: 'I accidentally stumbled upon Mozeff while looking for another tool but I am very glad I did!.'
        },
        {
            img: 'av-1.png',
            title: 'Arim Shah',
            desc: 'Such a clean, beautiful template and so easy to customise. Would highly recommend.'
        },
        {
            img: 'av-1.png',
            title: 'Aryan Khan',
            desc: 'I never realized how much money i was wasting on unnecessary expenses until I started using Brixso.'
        },
        {
            img: 'av-1.png',
            title: 'Sam Sozan',
            desc: 'I accidentally stumbled upon Mozeff while looking for another tool but I am very glad I did!. I accidentally stumbled upon Mozeff while looking for another tool but I am very glad I did!.'
        },
    ]

    var testimonialSlider = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            }
        ]
    }

    return (
        <Row gutter={[24, 24]} justify={'center'}>
            <Col span={24}>
                <Flex vertical align='center' gap={20}>
                    <Flex vertical gap={5} align='center'>
                        <Title level={1} className='text-center m-0'>
                            <Trans i18nKey={'read_what'} components={{span: <span className='text-brown'></span> }} />
                        </Title>
                        <div className="bar-main">
                            <div className="bar bar-big"></div>
                        </div>
                    </Flex>
                    <Title level={3}>
                        {t("Don't take our word for it. Listen to our partners")}
                    </Title>
                </Flex>
            </Col>
            <Col span={24}>
                <Slider {...testimonialSlider}>
                    {
                        testimonialData?.map((data, index) => {
                            return (
                                <div className='px-2 h-250' key={index}>
                                    <Card className='border-gray feedbk' >
                                        <div className='bg-img'>
                                            <Image src='assets/images/testimonial-two-shape.png' alt="najla" preview={false} />
                                        </div>
                                        <Space direction='vertical' size={10} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            {/* <img src={`assets/images/${data?.img}`} width={35} height={35} style={{ borderRadius: 50, objectFit: 'cover' }} /> */}
                                            <Text className='fs-15'>
                                                {
                                                    data?.title
                                                }
                                            </Text>
                                            <Rate defaultValue={5} />
                                            <Paragraph
                                                ellipsis={{
                                                    rows: 2,
                                                    expandable: 'collapsible',
                                                    symbol: expanded ? 'less' : 'more',
                                                    onExpand: () => setExpanded(!expanded)
                                                }}
                                                className='text-gray m-0'
                                            >
                                                {data?.desc}
                                            </Paragraph>
                                        </Space>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </Slider>
            </Col>
        </Row>
    )
}

export { Testimonials }