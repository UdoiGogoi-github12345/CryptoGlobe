import React, { useEffect, useState } from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Card, Col, Input, Row } from 'antd'
import { Link } from 'react-router-dom'
import millify from 'millify'
const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100
  const { data, isFetching } = useGetCryptosQuery(count)
  const coins = data?.data?.coins

  const [coinList, setCoinList] = useState(coins)

  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (coins) {
      const filteredData = coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setCoinList(filteredData)
    }
  }, [coins, searchTerm])

  if (isFetching) return 'LOading.....'
  return (
    <>
      {!simplified && (
        <div className='search-crypto'>
          <Input
            placeholder='Search for a crypto'
            onChange={(e) => {
              setSearchTerm(e.target.value)
            }}
          />
        </div>
      )}

      <Row gutter={[32, 32]}>
        {coinList?.map((coin) => (
          <Col xs={24} sm={12} lg={6} key={coin.uuid}>
            <Link to={`/crypto/${coin.uuid}`}>
              <Card
                title={`${coin.rank}.${coin.name}`}
                extra={<img src={coin.iconUrl} className='crypto-image' />}
                hoverable
              >
                <p>Price:{millify(coin.price)}</p>
                <p>Market Cap:{millify(coin.marketCap)}</p>
                <p>Daily Change:{millify(coin.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies
