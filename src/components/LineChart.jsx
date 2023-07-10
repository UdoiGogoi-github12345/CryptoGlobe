import React from 'react'
import { Line } from 'react-chartjs-2'
import { Typography, Select, Row, Col } from 'antd'

import millify from 'millify'

import {
  Chart,
  CategoryScale,
  PointElement,
  LineElement,
  LinearScale,
} from 'chart.js'

Chart.register(CategoryScale)
Chart.register(PointElement)
Chart.register(LineElement)
Chart.register(LinearScale)
const { Title, Text } = Typography
const { Option } = Select
const LineChart = ({ ch, coinName, currentPrice }) => {
  const coinPrice = []
  const coinTimeStamp = []

  for (let i = 0; i < ch?.data?.history?.length; i += 1) {
    coinPrice.push(ch.data.history[i].price)

    const unixTimestamp = ch.data.history[i].timestamp
    const date = new Date(unixTimestamp * 1000) // Multiply by 1000 to convert from seconds to milliseconds
    const formattedDate = date.toLocaleDateString() // Convert the date to a readable format

    coinTimeStamp.push(formattedDate)
  }
  const reversedCoinTimeStamp = coinTimeStamp.reverse()
  const reversedCoinPrice = coinPrice.reverse()
  //console.log(reversedCoinTimeStamp)
  const data = {
    labels: reversedCoinTimeStamp,
    datasets: [
      {
        label: 'Price in USD',
        data: reversedCoinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  }

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  return (
    <>
      <Row className='chart-header'>
        <Title level={5}>{coinName} Price Chart</Title>
        <Col className='price-container'>
          <Title level={5} className='price-change'>
            {ch?.data?.change}
          </Title>
          <Title level={5} className='current-price'>
            Current {coinName} Price : $ {millify(currentPrice)}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options}></Line>
    </>
  )
}

export default LineChart
