import React from 'react'
import { Card, Col, Flex, Row, Typography, Image } from 'antd'
import Slider from 'react-slick';
import { ServiceData } from '../../../data'
import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import './index.css'

const { Title, Text } = Typography;
const Ourservices = () => {
  
    const {t} = useTranslation()

    const ServicesData = ServiceData(t)
    const { language } = useSelector(state=>state?.app)
    var testimonialSlider = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow: <img src='/assets/icons/arrow-right.png'  width={30} />,
        prevArrow: <img src='/assets/icons/arrow-left.png' className={language === 'ar' ? 'ar-transform':null} width={30} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    arrows: false,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    arrows: false,
                }
            }
        ]
    }

    return (
        <section className='padding-main'>
            <div className="container">
                <Row gutter={[24, 24]} justify={'center'}>
                    <Col sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 18 }} xl={{ span: 18 }}>
                        <Flex vertical className='w-100' align='center' gap={20}>
                            <Flex vertical gap={5} align='center'>
                                <motion.div>
                                    <Title level={1} className='text-center m-0'>
                                        <Trans i18nKey="Our Services" components={{ span: <span className="text-brown" /> }} />
                                    </Title>
                                </motion.div>
                                <div className="bar-main">
                                    <div className="bar bar-big"></div>
                                </div>
                            </Flex>
                            <Text className='fs-15 text-center'>
                                <Trans i18nKey="service-desc" components={{ span: <strong></strong>}} />
                            </Text>
                        </Flex>
                    </Col>
                    <Col span={24}>
                        <Slider {...testimonialSlider}>
                            {
                                ServicesData?.map((item, index) => 
                                    <div className='px-2 h-100'>
                                        <Card className='shadow-c h-100 border-0 servicecard' key={index}>
                                            <Flex vertical gap={20} align='center'>
                                                <span className='servicecard-badge'>
                                                    <Image src={"/assets/icons/"+item?.img} preview={false} width={40} />
                                                </span>
                                                <Title level={5} className='m-0 text-center'>
                                                    {item?.title}
                                                </Title>
                                                <Text className='fs-14 text-center'>
                                                    {item?.desc}
                                                </Text>
                                            </Flex>
                                        </Card>
                                    </div>
                                )
                            }
                        </Slider>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export { Ourservices }