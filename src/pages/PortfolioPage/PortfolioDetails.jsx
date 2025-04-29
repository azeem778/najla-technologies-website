import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { PortfolioData } from '../../data'
import { Breadcrumbs } from '../../components'
import { Card, Col, Divider, Flex, Image, Row, Typography } from 'antd'

const { Title,Text } = Typography
const PortfolioDetails = () => {

    const { pId } = useParams()
    const details = PortfolioData.find((pro) => pro.id === pId);

    return (
        <div className='m-top-80'>
            <Breadcrumbs titleone={details?.title} titletwo={details?.subtitle} breadcrumbitem={{ item: 'Portfolio', to: '/' }} />
            <div className='container padding-main'>
                <Row gutter={[32,40]}>
                    <Col span={24}>
                        <Image src={"/assets/images/"+details?.img} height={550} width={'100%'} style={{objectFit:'cover',objectPosition:'top'}} className='round-corner-one' preview={false} alt="" />
                    </Col>
                    <Col span={24}>
                        <Flex vertical gap={10}>
                            <Title level={2} className='m-0'>{details?.title2}</Title>
                            {
                                details?.desc?.map((para,i)=>
                                    <Text className='fs-15 text-justify' key={i}>{para}</Text>
                                )
                            }
                        </Flex>
                    </Col>
                    <Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}} lg={{span: 16}}>
                        <Row gutter={32}>
                            {
                                details?.portfolioDetail?.map((data,index)=>
                                    <Col span={24} key={index}>
                                        <Flex vertical gap={10}>
                                            <Title level={2} className='m-0'>{data?.title}</Title>
                                            {
                                                data?.desc?.map((para,i)=>
                                                    <Text className='fs-15 text-justify' key={i}>{para}</Text>
                                                )
                                            }
                                        </Flex>
                                    </Col>
                                )
                            }
                        </Row>
                    </Col>
                    <Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}} lg={{span: 8}}>
                        <Flex vertical gap={20}>
                            <NavLink to={'/portfolio'} className='btn3 text-center'>Need This Project?</NavLink>
                            <Card className='bg-revo p-0'>
                                <Title level={4}>Project Information</Title>
                                <Divider />
                                {
                                    details?.prodetails?.map((pro,p)=>
                                        <>
                                            <Flex vertical gap={5} key={p}>
                                                <Title level={5} className='brand-text m-0'>{pro?.title}</Title>
                                                <Text className='fs-14'>
                                                    {pro?.subtitle}
                                                </Text>
                                            </Flex>
                                            <Divider />
                                        </>
                                    )
                                }
                                <Flex justify='center' gap={10}>
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
                            </Card>
                        </Flex>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export {PortfolioDetails}