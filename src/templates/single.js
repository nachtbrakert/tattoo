import React from "react"
import Layout from "@components/layout"
import { graphql } from "gatsby"

const Single = ({ data: { page } }) => {
  console.log("singleData:", page)
  return (
    <Layout>
      <h1>{page.name}</h1>
    </Layout>
  )
}

export default Single

export const query = graphql`
  query($id: String!) {
    page: contentfulPeople(id: { eq: $id }) {
      name
    }
  }
`
