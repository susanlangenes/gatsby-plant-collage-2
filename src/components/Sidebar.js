import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { blogURI } from "../../globals"

const SidebarPosts = () => (
  <StaticQuery
    query={graphql`
      {
        posts(first: 10) {
          edges {
            node {
              id
              title
              date
            }
          }
        }
      }
    `}
    render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
  ></StaticQuery>
)

export default SidebarPosts


