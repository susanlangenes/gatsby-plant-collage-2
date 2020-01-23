import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { blogURI } from "../../globals"

const SidebarPosts = () => (
  <StaticQuery
    query={graphql`
      allWordpressPost {
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
           {data.allWordpressPost.edges.map(post => (
              <Link
                className="postlink"
                to={post.node.slug}
                key={post.node.slug}
              >
                {post.node.title}
              </Link>
            ))}
        </li>
      </ul>
    )
  }
  ></StaticQuery>
)

export default SidebarPosts


