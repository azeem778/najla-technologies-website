import React from 'react'
import './index.css'
import { Row, Col, Typography, Flex, Image, Card, Button } from 'antd'
import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'react-i18next';
const { Title } = Typography;
const Ourteam = () => {

        const {t} = useTranslation()


        const teamData= [
            {
                id:'1',
                img:'najla.jpg',
                name:'Najla alshail',
                designation:'Founder & Managing Partner'
            },
            {
                id:'2',
                img:'usman.png',
                name:'Mohammed Usman',
                designation:'Co-Founder & IT Projects Director'
            },
            
            {
                id:'3',
                img:'alia.jpg',
                name:'Alyaa Alshail',
                designation:'Operations and Client Relations Manager'
            },
            {
                id:'4',
                img:'ftk.jpg',
                name:'Abdul Ahad Fatik',
                designation:'Chief IT Engineer'
            },
        ]
    return (
        <section className='padding-main bg-dark-blue'>
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
                        <Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 14 }} xl={{ span: 14 }}>
                            <Flex vertical align='center' className='w-100' gap={15}>
                                <Title level={1} className='text-center m-0 text-white'>
                                    <Trans i18nKey={"our-team"} components={{span: <span className='text-brown'></span>}} />
                                </Title>
                                <div className="bar-main">
                                    <div className="bar bar-big"></div>
                                </div>
                                <Title level={4} className='text-center m-0 text-white'>
                                    <Trans i18nKey={"team-desc"} components={{span: <span className='text-brown'></span> }} />
                                </Title>
                            </Flex>
                        </Col>
                    </Row>
                </motion.div>
                <Row gutter={[16, 16]} className='mt-50'>
                    {
                    teamData?.map((item,index)=>
                    <Col sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 6 }} xl={{ span: 6 }} key={index}>
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{ delay: index, duration: 1, ease: "easeInOut" }}
                            viewport={{once: false}}
                            className='h-100'
                        >
                            <Card className='shadow-c h-100 border-0 teamcard'>
                                <Flex vertical gap={20}>
                                    <div className='team-img-sec'>
                                        <Image src={`assets/images/${item?.img}`} className='team-img' width={'100%'} preview={false} />
                                        <div className='social-link'>
                                            <Flex gap={10} justify='space-around'>
                                                {/* <span className='social-link-badge'>
                                                    <Image src='assets/icons/facebook-w.png' preview={false} width={25} />
                                                </span>
                                                <span className='social-link-badge'>
                                                    <Image src='assets/icons/instagram-w.png' preview={false} width={25} />
                                                </span> */}
                                                <span className='social-link-badge'>
                                                    <Image src='assets/icons/linkedin-w.png' preview={false} width={25} />
                                                </span>
                                            </Flex>
                                        </div>
                                    </div>
                                    <Title level={3} className='m-0 text-white text-center'>
                                        {t(item?.name)}
                                    </Title>
                                    <Title level={4} className='m-0 text-white text-center'>
                                        {t(item?.designation)}
                                    </Title>
                                </Flex>
                            </Card>
                        </motion.div>
                    </Col>
                        )
                    }
                </Row>
            </div>
        </section>
    )
}

export { Ourteam }