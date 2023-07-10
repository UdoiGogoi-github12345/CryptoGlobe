import React from 'react'
import { Layout } from 'antd'
import { Routes, Route } from 'react-router-dom'

import Homepage from './Homepage'
import Exchanges from './Exchanges'
import Cryptocurrencies from './Cryptocurrencies'
import Cryptodetails from './Cryptodetails'
import News from './News'

const { Content } = Layout

const Mainlayout = () => {
  return (
    <Layout>
      <Content>
        <div className='routes'>
          <Routes>
            {/* Routes->Route->path and element*/}
            <Route path='/' element={<Homepage />} />
            <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
            <Route path='/crypto/:coinId' element={<Cryptodetails />} />
            <Route path='/news' element={<News />} />
          </Routes>
        </div>
      </Content>
    </Layout>
  )
}

export default Mainlayout
