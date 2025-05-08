import React from 'react'
import Slider from 'react-slick'
import { Row, Col, Flex, Space, Typography } from 'antd'
import { ProjectPortpolioData } from '../../../data'
import { useTranslation } from 'react-i18next'
const { Title, Text } = Typography

const ProjectPortpolio = () => {
    const {t} = useTranslation()
    const Websites = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1400,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    return (
        <div className='mb-3'>
            <Row  gutter={[24,64]}>
                <Col span={24}>
                    <Flex vertical align='center' className='text-center' gap={10}>
                        <Title level={1} className='text-center m-0'>
                            {t('Our Proven Projects in Web, App, and IT Solutions Across Saudi Arabia')}
                        </Title>
                        <Text className='text-center fs-15'>
                            {t('Explore our portfolio of successful digital projects, including mobile app development, web platforms, and customized IT solutions delivered to businesses in Riyadh and throughout the Kingdom.')}
                        </Text>
                    </Flex>
                </Col>
                <Col span={24}>
                    <Slider {...Websites}>
                        {
                            ProjectPortpolioData?.map((items, index) =>
                                <div className='px-3' key={index}>
                                    <Space direction='vertical' size={20} className='h-100 w-100'>
                                        <img src={`assets/images/${items?.img}`} width={'100%'} className='round-corner-one h-100' />
                                        <Flex vertical gap={5}>
                                            <Title level={4} className='head-font m-0 px-3'>
                                                {items?.title}
                                            </Title>
                                            <Title level={5} className='head-font fw-400 m-0 px-3 fs-16'>
                                                {items?.subtitle}
                                            </Title>
                                        </Flex>
                                    </Space>
                                </div>
                            )
                        }
                    </Slider>
                </Col>
            </Row>

        </div>
    )
}

export { ProjectPortpolio }
