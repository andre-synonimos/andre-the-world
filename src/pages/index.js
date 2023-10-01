import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo  from '../components/seo'

const IndexPage = () => {
  return(
    <Layout pageTitle="Home Page">
      <p>I'm making this by following gatsby tutorial!</p>
      <StaticImage
        alt="clifford, looking straight at the camera,feeling tired of his life"
        src="../images/unko.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page"/>

export default IndexPage