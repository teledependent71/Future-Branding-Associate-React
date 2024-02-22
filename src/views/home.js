import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Future Branding Associate</title>
        <meta property="og:title" content="Future Branding Associate" />
      </Helmet>
    </div>
  )
}

export default Home
