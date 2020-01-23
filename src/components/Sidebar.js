import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { blogURI } from "../../globals"

const SidebarPosts = () => (
  <StaticQuery
    query={graphql`
      query {
        posts(first: 10) {
          edges {
            node {
              id
              title
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <ul>
        <li>
           {data.allWordpressPage.edges.map(edge => (
              <Link
                className="postlink"
                to={edge.node.slug}
                key={edge.node.slug}
              >
                {edge.node.title}
              </Link>
            ))}
        </li>
      </ul>
    )
  }
  ></StaticQuery>
)

export default SidebarPosts


