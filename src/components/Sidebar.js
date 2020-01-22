import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { blogURI } from "../../globals"

const SidebarPosts = () => {
  const data = useStaticQuery(graphql`
    {
      posts(first: 10) {
        edges {
          node {
            title
            uri
          }
        }
      }
    }
  `)
  return <ul>
        <Link to={`${blogURI}/${uri}/`}>
          <li style={{ marginBottom: "5px" }}>{title}</li>
        </Link>
        </ul>
}

export default SidebarPosts
