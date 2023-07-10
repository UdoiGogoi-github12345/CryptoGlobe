import React from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Col, Row, Statistic, Typography } from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi'
import Cryptocurrencies from './Cryptocurrencies'
import News from './News'

const Homepage = () => {
  const simplified = true
  const { data, isFetching } = useGetCryptosQuery(10)
  const globalStats = data?.data?.stats
  if (isFetching) return 'Loading......'
  return (
    <>
      <Typography.Title level={2} className='heading'>
        Global Crypto Stats
      </Typography.Title>

      <Row>
        <Col span={12}>
          <Statistic title='Total CryptoCurrencies' value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Exchanges'
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total MarketCap'
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total 24H Volume'
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Markets'
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className='home-heading-container'>
        <Typography.Title level={2} className='home-title'>
          Top 10 Cryptocurrencies in the World
        </Typography.Title>
        <Typography.Title level={3} className='show-more'>
          <Link to='/cryptocurrencies'>Show more</Link>
        </Typography.Title>
      </div>
      <Cryptocurrencies simplified={simplified} />

      <div className='home-heading-container'>
        <Typography.Title level={2} className='home-title'>
          Latest Crypto News
        </Typography.Title>
        <Typography.Title level={3} className='show-more'>
          <Link to='/news'>Show more</Link>
        </Typography.Title>
      </div>
      <News simplified={simplified} />
    </>
  )
}

export default Homepage
