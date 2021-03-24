const Promise = require(`bluebird`)
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const singlePeople = path.resolve("./src/templates/single.js")
    resolve(
      graphql(
        `
          {
            allContentfulPeople {
              edges {
                node {
                  id
                  name
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulPeople.edges
        posts.forEach(post => {
          createPage({
            path: `/people/${post.node.name.toLowerCase()}/`,
            component: singlePeople,
            context: {
              slug: post.node.name.toLowerCase(),
              id: post.node.id,
            },
          })
        })
      })
    )
  })
}
