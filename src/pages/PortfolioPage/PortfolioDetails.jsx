import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Breadcrumbs } from '../../components'
import { Card, Col, Divider, Flex, Image, Row, Typography } from 'antd'
import { PortfolioData } from '../../data'
import { useTranslation } from 'react-i18next'

const { Title,Text } = Typography
const PortfolioDetails = () => {

    const {t} = useTranslation()
    const { pId } = useParams()
    const data = PortfolioData(t)
    const details = data.find((pro) => pro.id === pId);

    return (
        <div className='m-top-80'>
            <Breadcrumbs titleone={details?.title} titletwo={details?.subtitle} breadcrumbitem={{ item: t('Portfolio'), to: '/' }} />
            <div className='container padding-main'>
                <Row gutter={[32,24]}>
                    <Col span={24}>
                        <Image src={"/assets/images/portfolio/"+details?.smimg} height={550} width={'100%'} style={{objectFit:'cover',objectPosition:'top'}} className='round-corner-one' preview={false} alt="" />
                    </Col>
                    <Col span={24}>
                        <Flex vertical gap={15}>
                            <Title level={3} className='m-0'>{details?.title2}</Title>
                            {
                                details?.desc?.map((para,i)=>
                                    <Text className='fs-15 text-justify' key={i}>{para}</Text>
                                )
                            }
                        </Flex>
                    </Col>
                    <Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}} lg={{span: 16}}>
                        <Row gutter={[24,24]}>
                            {
                                details?.portfolioDetail?.map((data,index)=>
                                    <Col span={24} key={index}>
                                        <Flex vertical gap={15}>
                                            <Title level={4} className='m-0'>{data?.title}</Title>
                                            {
                                                data?.desc?.map((para,i)=>
                                                    <Text className='fs-15 text-justify' key={i}>{para}</Text>
                                                )
                                            }
                                            <ul className='px-3'>
                                                {
                                                    data?.points?.map((list,l)=>
                                                        <li key={l}>
                                                            <Text className='fs-15 text-justify'>{list}</Text>
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                            <Text className='fs-15 text-justify'>{data?.p}</Text>
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