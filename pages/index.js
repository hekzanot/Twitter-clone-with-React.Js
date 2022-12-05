import React from 'react'

import Layout from '../components/layout'
import Tweet from '../components/index'


function HomePage() {
  return (
    <Layout>
      <Tweet name="M. Eren" slug="hekzanot" datetime={new Date("2022-12-05")}
      text= 
      {
        `React ile Twitter klonu yapmak

sabır ve emek ister`
      }
      >

      </Tweet>

      <Tweet name="M. Eren" slug="hekzanot" datetime={new Date("2022-12-05")}
      text= 
      {
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`
      }
      >

      </Tweet>
    </Layout>
  )
}

export default HomePage
