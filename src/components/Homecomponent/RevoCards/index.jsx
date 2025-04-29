import { Card, Col, Flex, Image, Row, Typography } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { NewsLetter } from '../NewsLetter'

const { Title,Text } = Typography
const RevoCards = () => {

    const data = [
        {
            img:'card-1.avif',
            title:'IAM Core',
            desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore fugiat quia voluptas unde. Ratione dolor, ab libero eaque saepe inventore debitis maiores repellat aperiam animi rem, et, culpa esse ipsa?'
        },
        {
            img:'card-2.avif',
            title:'IAM for Customer Experience (CX)',
            desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore fugiat quia voluptas unde. Ratione dolor, ab libero eaque saepe inventore debitis maiores repellat aperiam animi rem, et, culpa esse ipsa?'
        },
        {
            img:'card-3.avif',
            title:'IAM for Sales',
            desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore fugiat quia voluptas unde. Ratione dolor, ab libero eaque saepe inventore debitis maiores repellat aperiam animi rem, et, culpa esse ipsa?'
        },
        {
            img:'card-4.avif',
            title:'Contract Lifecycle Management',
            desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore fugiat quia voluptas unde. Ratione dolor, ab libero eaque saepe inventore debitis maiores repellat aperiam animi rem, et, culpa esse ipsa?'
        },
    ]

  return (
    <div className='bg-revo'>
        <div className='container'>
            <Row gutter={[64,40]}>
                <Col lg={{span: 14}} md={{span: 14}} sm={{span: 24}} xs={{span: 24}}>
                    <Flex vertical gap={15}>
                        <Title level={2} className='m-0'>
                            IAM Applications designed to fit every team    
                        </Title>
                        <Text className='fs-18 text-gray'>
                            Our suite of applications are packages that contain core features built to fit the specific needs of your business and industry.
                        </Text>
                    </Flex>
                </Col>
                {
                    data?.map((carddata,index)=>
                        <Col lg={{span: 12}} md={{span: 12}} sm={{span: 24}} xs={{span: 24}} key={index}>
                            <Card className='border-0 bg-transparent revo-card'>
                                <img src={"/assets/images/"+carddata?.img} width={'100%'} className='rounded-20' alt="" />
                                <Flex vertical gap={20} className='mt-3'>
                                    <Title className='m-0' level={4}>
                                        {carddata?.title}
                                    </Title>
                                    <Text className='fs-16'>
                                        {carddata?.desc}
                                    </Text>
                                    <NavLink to={''}>
                                        <Text strong className='brand-text'>Explore more</Text> 
                                    </NavLink>
                                </Flex>
                            </Card>
                        </Col>
                    )
                }
                <Col span={24}>
                    <NewsLetter />
                </Col>
            </Row>
        </div>
    </div>
  )
}

export {RevoCards}