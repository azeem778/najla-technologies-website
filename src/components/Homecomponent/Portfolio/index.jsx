import React from 'react'
import { useState } from 'react';
import { Row, Col, Typography, Flex, Image, Card } from 'antd'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const { Title, Text, Paragraph } = Typography;
const Portfolio = () => {
    const [expanded, setExpanded] = useState(false)
    const valuesData = [
        {
            id: '1',
            img: '3dcityscape.webp',
            title: '3d Cityscapes',
            desc: 'Lorem ipsum  is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have content.'
        },
        {
            id: '2',
            img: 'usastockmarket.webp',
            title: 'USA Stock Market',
            desc: 'Lorem ipsum  is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have content.'
        },
        {
            id: '3',
            img: 'rental-management.webp',
            title: 'Healthflow Pro – Rental Management',
            desc: 'Lorem ipsum  is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have content.'
        },
        // {
        //     id:'3',
        //     img:'penotee.webp',
        //     title:'Penotee',
        //     desc:'Lorem ipsum  is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have content.'
        // }
    ]

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
        nextArrow: <img src='/assets/icons/arrow-right.png' width={30} />,
        prevArrow: <img src='/assets/icons/arrow-left.png' width={30} />,
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
                        <Flex vertical className='w-100' align='center' gap={15}>
                            <motion.div>
                                <Title level={1} className='text-center m-0'>
                                    Our <span className='text-brown'>Portfolios</span>
                                </Title>
                            </motion.div>
                            <div className="bar-main">
                                <div className="bar bar-big"></div>
                            </div>
                            <Title level={3} className='text-center m-0'>
                                Some recent work
                            </Title>
                        </Flex>
                    </Col>
                    <Col span={24}>
                        <Slider {...testimonialSlider}>
                            {
                                valuesData?.map((cdata, index) => {
                                    return (
                                        <div className='px-2'>
                                            <Card className='shadow-c h-100 portfoliocard p-0 rounded-20 h-100'>
                                                <img src={`assets/images/${cdata.img}`} width={'100%'} height={300} className='rounded-20' />
                                                <div className='content-port'>
                                                    <Flex vertical gap={5} className='content mt-3 px-2' align='center'>
                                                        <Title level={5} className='m-0 text-white'>
                                                            {cdata?.title}
                                                        </Title>
                                                        <Paragraph
                                                            ellipsis={{
                                                                rows: 2,
                                                                className: 'fs-15',
                                                                expandable: 'collapsible',
                                                                symbol: expanded ? 'less' : 'more',
                                                                onExpand: () => setExpanded(!expanded)
                                                            }}
                                                            className='text-white'
                                                        >
                                                            {cdata?.desc}
                                                        </Paragraph>
                                                        <Link to={''}>
                                                            <img src="/assets/icons/link.png" width={20} alt="" />
                                                        </Link>
                                                    </Flex>
                                                </div>
                                            </Card>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export { Portfolio }