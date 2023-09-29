import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return(
    <Layout pageTitle="Home Page">
      <p>I'm making this by following gatsby tutorial!</p>
      <StaticImage
        alt="clifford, looking straight at the camera,feeling tired of his life"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage