import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Card from "@components/card/index"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props => {
  const {
    data: { people },
  } = props
  return (
    <Layout>
      <SEO title="Home" />
      {people &&
        people.edges.map((person, index) => (
          <Card key={`people-${index}`} title={person.node.name} />
        ))}
      {/* <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p> */}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    people: allContentfulPeople {
      edges {
        node {
          id
          name
          image {
            fluid(quality: 92, maxWidth: 2560) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
