import React from 'react'
import { Button, Card, Col, Row, Typography } from 'antd'

const { Title } = Typography
const NewsLetter = () => {
  return (
    <div>
        <Card className='rounded-12 news-card'>
            <Row gutter={[24,24]} justify={'space-between'} align={'middle'}>
                <Col lg={{span: 15}} md={{span: 17}} sm={{span: 24}} xs={{span: 24}}>
                    <Title level={3} className='m-0'>
                        Discover why <span className='brand-text'>Insight</span> IAM is the agreement solution  your business needs
                    </Title>
                </Col>
                <Col lg={{span: 4}} md={{span: 4}} sm={{span:24}} xs={{span: 24}}>
                    <Button className='btn-news'>
                        View All Solutions
                    </Button>
                </Col>
            </Row>
        </Card>
    </div>
  )
}

export {NewsLetter}