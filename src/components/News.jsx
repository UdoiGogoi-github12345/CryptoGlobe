import React from 'react'
import { useState } from 'react'
import { useGetCryptoNewsQuery } from '../services/cryptonewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Row, Col, Card, Typography, Avatar, Select } from 'antd'

import moment from 'moment'

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocureency')
  const { data } = useGetCryptoNewsQuery({
    newsCategory: newsCategory,
    count: simplified ? 6 : 12,
  })
  const { data: coinsdata } = useGetCryptosQuery(100)
  console.log(coinsdata)
  const cnews = data?.value

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className='select-news'
            placeholder='select a crypto'
            optionFilterProp='children'
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) > 0
            }
          >
            <Select.Option value='Cryptocurrency'>CryptoCurrency</Select.Option>
            {coinsdata?.data?.coins.map((coin) => (
              <Select.Option value={coin.name}>{coin.name}</Select.Option>
            ))}
          </Select>
        </Col>
      )}
      {cnews &&
        cnews.map((article, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card className='news-card' hoverable>
              <a href={article.url}>
                <div className='news-image-container'>
                  <Typography.Title level={4}>{article.name}</Typography.Title>
                </div>

                <p>
                  {article.description.length > 100
                    ? `${article.description.substring(0, 100)}...`
                    : article.description}
                </p>

                <div className='provider-container'>
                  <Typography.Text>
                    {moment(article.datePublished).startOf('ss').fromNow()}
                  </Typography.Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
    </Row>
  )
}

export default News
