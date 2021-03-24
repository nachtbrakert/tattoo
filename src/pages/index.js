import * as React from "react"
import { graphql } from "gatsby"
import Grid from "@components/grid"
import Card from "@components/card"
import Layout from "@components/layout"
import SEO from "@components/seo"

const IndexPage = props => {
  const {
    data: { people },
  } = props
  return (
    <Layout>
      <SEO title="Home" />
      <Grid>
        {people.edges.map((person, index) => (
          <Card key={`people-${index}`} {...person.node} />
        ))}
        {people.edges.map((person, index) => (
          <Card key={`people-${index}`} {...person.node} />
        ))}
        {people.edges.map((person, index) => (
          <Card key={`people-${index}`} {...person.node} />
        ))}
      </Grid>
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
            gatsbyImageData(layout: CONSTRAINED, height: 800, width: 550)
          }
        }
      }
    }
  }
`
