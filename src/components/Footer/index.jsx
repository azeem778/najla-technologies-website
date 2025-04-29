import React from 'react'
import './index.css'
import { Row, Col, Image, Space, Typography, Divider, Flex } from 'antd'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const { Title, Text } = Typography
const Footer = () => {


    const {t}= useTranslation()

    const data = [
        {
            heading: t('COMPANY'),
            listdetail: [
                {
                    to:'/',
                    text:t('Home')
                },
                {
                    to:'/aboutus',
                    text:t('About Us')
                },
                {
                    to:'/',
                    text:t('Services')
                },
                {
                    to:'/portfolio',
                    text: t('Portfolio')
                },
                {
                    to:'/contactus',
                    text: t('Contact Us')
                }
            ],
        },
        {
            heading:t('SERVICES'),
            listdetail: [
                {
                    to:'/',
                    text:'Web Designing'
                },
                {
                    to:'/',
                    text:'Web Development'
                },
                {
                    to:'/',
                    text:"UI / UX Desinging"
                },
                {
                    to:'/',
                    text:"Figma Designing"
                },
                {
                    to:'/',
                    text:"Mobile Application"
                },
            ],
        },
        {
            heading: t('CONTACTS'),
            listdetail: [
                {
                    to:'/',
                    text:'0312-000000000',
                    desc:'Islamabad'
                },
            ],
            contacts:[
                {
                    title: t('Inquires'),
                    desc: 'example@gmail.com'
                },
                {
                    title: t('Support'),
                    desc: 'hrnajla@gmail.com'
                },
            ]
        },
    ]

 

  return (
    <div className='footer'>
        <div className='container'>
            <Row gutter={[12,12]} justify={'space-between'}>
                <Col lg={{span: 5}} md={{span: 24}} xs={{span: 24}} sm={{span: 24}}>
                    <Space direction='vertical' size={20} className='w-100'>
                        <div className='mb-1'>
                            <Link to={'/'}>
                                <img src='/assets/images/logo-white.png' width={130}/>
                            </Link>
                        </div>
                        <Flex gap={10}>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <Image src='/assets/icons/twitter.png' width={'23px'} preview={false} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <Image src='/assets/icons/facebook.png' width={'23px'} preview={false} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <Image src='/assets/icons/linkedin.png' width={'23px'} preview={false} />
                            </a>
                            <a href="#" target="_blank" >
                                <Image src='/assets/icons/insta.png' width={'23px'} preview={false} />
                            </a>
                        </Flex>
                    </Space>
                </Col>
                
                {
                    data?.map((items, index)=>
                    <Col lg={{span: items.heading === 'SERVICES' ? 8 : 5}} md={{span: 24}} xs={{span: 24}} sm={{span: 24}} key={index}>
                        <Space direction='vertical' size={15} className='list-cs'>
                            <Title className='m-0 text-white' level={5}>
                                {
                                    items?.heading
                                }
                            </Title>
                            <ul className={`ul-f m-0 ${items.id === 2 && 'count-2'}`}>
                                {
                                    items?.listdetail?.map((list,i)=>
                                        <li key={'menu'+ i}>
                                            <Flex vertical>
                                                <Link 
                                                    to={list?.to} 
                                                    className='hovera text-white'
                                                    >
                                                    {list?.text}
                                                </Link>
                                                {
                                                    list.desc &&
                                                    <Text className='text-white hovera'>
                                                        {
                                                            list?.desc
                                                        }
                                                    </Text>
                                                }
                                            </Flex>
                                        </li>
                                    )
                                }
                            </ul>
                            {
                                items?.contacts?.map((con,c)=>
                                <Flex vertical gap={5} className='' key={c}>
                                    <Title className='m-0 text-white' level={5}>
                                        {con?.title}
                                    </Title>
                                    <Text className='text-white hovera'>
                                        {con?.desc}
                                    </Text>
                                </Flex>
                                )
                            }
                        </Space>
                    </Col>
                    )
                }
                <Col span={24}>
                    <Divider className='my-2 bg-white'/>
                    <Flex justify='center' wrap  className='w-100 pt-2' gap={20}>
                        <Typography.Text className='fs-13 text-white'>
                            {t('Repla Technologies All right reserved. © 2025')}
                        </Typography.Text>
                    </Flex>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export {Footer}