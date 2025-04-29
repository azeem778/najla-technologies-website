import React from 'react'
import { Row, Col, Flex, Image, Typography } from 'antd'
import { motion } from 'framer-motion'
const { Title, Text } = Typography
const Ourcommitment = () => {
    return (
        <motion.div 
        initial={{ y: 20, opacity: 0 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                viewport={{once: false}}
        >
            <section className='bg-grey padding-main'>
            <div className="container">
                <Row gutter={[16, 16]}>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 9 }} lg={{ span: 8 }}>
                        <Row gutter={[16, 16]}>
                            <Col span={24}>
                                <div>
                                <Flex gap={10}>
                                    <Flex vertical gap={15}>
                                        <Title level={4} className='text-end m-0'>Experience</Title>
                                        <Text className='fs-15 text-end'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, iste?</Text>
                                    </Flex>
                                    <span>
                                        <Image src='assets/icons/experience.svg' preview={false} width={40} />
                                    </span>
                                </Flex>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div>
                                <Flex gap={10}>
                                    <Flex vertical gap={15}>
                                        <Title level={4} className='text-end m-0'>Products</Title>
                                        <Text className='fs-15 text-end'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, iste?</Text>
                                    </Flex>
                                    <span>
                                        <Image src='assets/icons/product.svg' preview={false} width={40} />
                                    </span>
                                </Flex>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div>
                                <Flex gap={10}>
                                    <Flex vertical gap={15}>
                                        <Title level={4} className='text-end m-0'>Approach</Title>
                                        <Text className='fs-15 text-end'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, iste?</Text>
                                    </Flex>
                                    <span>
                                        <Image src='assets/icons/approach.svg' preview={false} width={40} />
                                    </span>
                                </Flex>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }} lg={{ span: 6 }}>
                        <div>
                            <Image src='assets/images/features.png' preview={false}/>
                        </div>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }}>
                        <Row gutter={[16, 16]}>
                            <Col span={24}>
                                <div>
                                <Flex gap={10}>
                                    <span>
                                        <Image src='assets/icons/pricing.svg' preview={false} width={40} />
                                    </span>
                                    <Flex vertical gap={15}>
                                        <Title level={4} className='m-0'>Pricing</Title>
                                        <Text className='fs-15'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, iste?</Text>
                                    </Flex>
                                </Flex>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div>
                                <Flex gap={10}>
                                    <span>
                                        <Image src='assets/icons/delivery.svg' preview={false} width={40} />
                                    </span>
                                    <Flex vertical gap={15}>
                                        <Title level={4} className='m-0'>Delivery</Title>
                                        <Text className='fs-15'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, iste?</Text>
                                    </Flex>
                                </Flex>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div>
                                <Flex gap={10}>
                                    <span>
                                        <Image src='assets/icons/support.svg' preview={false} width={40} />
                                    </span>
                                    <Flex vertical gap={15}>
                                        <Title level={4} className='m-0'>Support</Title>
                                        <Text className='fs-15'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, iste?</Text>
                                    </Flex>
                                </Flex>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </section>
        </motion.div>
    )
}

export { Ourcommitment } 