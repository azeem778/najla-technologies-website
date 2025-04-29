import React from 'react'
import './index.css'
import { Row, Col, Flex, Typography, Breadcrumb } from 'antd'
import { useTranslation } from 'react-i18next';
const { Title, Text } = Typography;
const Breadcrumbs = ({ titleone, titletwo,breadcrumbitem,image }) => {

  const {t} = useTranslation()
  const items =[
    {
      title: <Title level={5} className='text-white fw-400'>{t('Home')}</Title>,
    },
    {
      title: <Title level={5} className='text-white fw-400'>{breadcrumbitem?.item}</Title>,
    }
  ]



  return (
    <section className='padding-main bg-dark-blue breadcrumb' style={{ backgroundImage: `url(assets/images/${image})` }}>
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Flex vertical align='center'>
            <Breadcrumb
              items={items}
              className='text-center'
            />
            </Flex>
          </Col>
          <Col span={24}>
            <Flex vertical gap={10} className='w-100' align='center'>
              <Title level={2} className='text-brown m-0'>{titleone}</Title>
              <Title level={3} className='text-white m-0 fw-400'>{titletwo}</Title>
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export { Breadcrumbs } 