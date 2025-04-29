import { Button, Col, Image, Row, Typography } from 'antd'
import React from 'react'
import './index.css'

const ConceptSolution = () => {
  return (
    <div className='mb-3 mt-3'>
        <div className='container'>
            <Row gutter={[24,24]} align='middle' justify='center' className='pd-tb-left'>
                <Col lg={{span: 10}} md={{span:12}} xs={{span: 24}} sm={{span: 24}} >
                    <div className='text-center'>
                        <Image src='/assets/images/discovery.png' preview={false} />
                    </div>
                </Col>
                <Col lg={{span: 10}} md={{span:12}} xs={{span: 24}} sm={{span: 24}} >
                    <div>
                        <div className='cir-count'>1</div>
                        <Typography.Title level={3} className='brand-color'>
                            DISCOVERY
                        </Typography.Title>
                        <Typography.Text className='fs-16'>
                            Taking on a 360 degree view of your business - documentation, project requirements, business dynamics, goals and objectives to understand the project needs and limitations.
                        </Typography.Text>
                    </div>
                </Col>
            </Row>
            <div className='mobile-none'>
                <img src="/assets/images/left-line.png" width={'100%'} alt="" />
            </div>
            <Row gutter={[24,24]} align='middle' justify='center' className='pd-tb-right'>
                <Col lg={{span: 10}} md={{span:12}} xs={{span: 24}} sm={{span: 24}} >
                    <div>
                        <div className='cir-count'>2</div>
                        <Typography.Title level={3} className='brand-color'>
                            PLANNING
                        </Typography.Title>
                        <Typography.Text className='fs-16'>
                            Based on the data gathered, we structure the development roadmap and decide on technology stacks needed to develop a solid foundation for fast feature iterations, stable scaling, and easy integrations.
                        </Typography.Text>
                    </div>
                </Col>
                <Col lg={{span: 10}} md={{span:12}} xs={{span: 24}} sm={{span: 24}} >
                    <div className='text-center '>
                        <Image src='/assets/images/plaining.png' preview={false} />
                    </div>
                </Col>
            </Row>
            <div className='mobile-none'>
                <img src="/assets/images/right-line.png" width={'100%'} alt="" />
            </div>
            <Row gutter={[24,24]} align='middle' justify='center' className='pd-tb-left'>
                <Col lg={{span: 10}} md={{span:12}} xs={{span: 24}} sm={{span: 24}} >
                    <div className='text-center'>
                        <Image src='/assets/images/design.png' preview={false} />
                    </div>
                </Col>
                <Col lg={{span: 10}} md={{span:12}} xs={{span: 24}} sm={{span: 24}} >
                    <div>
                        <div className='cir-count'>3</div>
                        <Typography.Title level={3} className='brand-color'>
                            DESIGN
                        </Typography.Title>
                        <Typography.Text className='fs-16'>
                            Strategic structural design that supports the software usability and integrates your brand style into the digital medium. And we do this with IA wireframes, hi-fi mockups, and design prototypes.
                        </Typography.Text>
                    </div>
                </Col>
            </Row>
            <div className='mobile-none'>
                <img src="/assets/images/left-line.png" width={'100%'} alt="" />
            </div>
            <Row gutter={[24,24]} align='middle' justify='center' className='pd-tb-right'>
                <Col lg={{span: 10}} md={{span:12}} xs={{span: 24}} sm={{span: 24}} >
                    <div>
                        <div className='cir-count'>4</div>
                        <Typography.Title level={3} className='brand-color'>
                            DEVELOPMENT
                        </Typography.Title>
                        <Typography.Text className='fs-16'>
                            The development process and approach is defined by the project scope and requirements. We are no strangers to Agile, Lean or Waterfall methods - as software engineers, we build for structure, quality, and meaning.
                        </Typography.Text>
                    </div>
                </Col>
                <Col lg={{span: 10}} md={{span:12}} xs={{span: 24}} sm={{span: 24}} >
                    <div className='text-center '>
                        <Image src='/assets/images/develop.png' preview={false} />
                    </div>
                </Col>
            </Row>
            <div className='mobile-none'>
                <img src="/assets/images/right-line.png" width={'100%'} alt="" />
            </div>
            <Row gutter={[24,24]} align='middle' justify='center' className='pd-tb-left'>
                <Col lg={{span: 10}} md={{span:12}} xs={{span: 24}} sm={{span: 24}} >
                    <div className='text-center'>
                        <Image src='/assets/images/testing.png' preview={false} />
                    </div>
                </Col>
                <Col lg={{span: 10}} md={{span:12}} xs={{span: 24}} sm={{span: 24}} >
                    <div>
                        <div className='cir-count'>5</div>
                        <Typography.Title level={3} className='brand-color'>
                            TESTING, QA & LAUNCH
                        </Typography.Title>
                        <Typography.Text className='fs-16'>
                            QA team tests each feature based on the outlined requirements. Inconsistencies are noted and sent back to the development team for resolution. Each project iteration goes through an intensive testing procedure before it goes live.
                        </Typography.Text>
                    </div>
                </Col>
            </Row>
            <div className='mobile-none'>
                <img src="/assets/images/left-line.png" width={'50%'} alt="" />
            </div>
            <Row gutter={[24,24]} align='middle' justify='center' >
                <Col lg={{span: 10}} md={{span:12}} xs={{span: 24}} sm={{span: 24}} className='pd-tb-center'>
                    <div>
                        <div className='cir-count'>6</div>
                        <Typography.Title level={3} className='brand-color'>
                            ONGOING UPGRADES & MAINTENANCE
                        </Typography.Title>
                        <Typography.Text className='fs-16'>
                            Post-launch, we offer programs to ensure your product is always up-to-date and continues to evolve. There are no limits to our creativity. Just milestones in our progress.
                        </Typography.Text>
                    </div>
                </Col>
                <Col lg={{span: 10}} md={{span:12}} xs={{span: 24}} sm={{span: 24}} >
                    <div className='text-center '>
                        <Image src='/assets/images/ongoing.png' preview={false} />
                    </div>
                </Col>
                <Col lg={{span: 24}} md={{span:24}} xs={{span: 24}} sm={{span: 24}}>
                    <div className='pb-3 text-center'>
                        <Button 
                            size='large' 
                            className='btn-news'
                        >
                            GET STARTED NOW
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export {ConceptSolution}