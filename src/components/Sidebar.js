import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { blogURI } from "../../globals"

const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
      wpgraphql {
        posts {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    }
    `}
    render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
  ></StaticQuery>
)

export default ComponentName


