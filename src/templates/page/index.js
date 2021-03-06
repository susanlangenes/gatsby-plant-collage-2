import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"


const Page = ({ pageContext }) => {
  const {
    page: { id, postId, title, content, excerpt },
  } = pageContext;

  return (
    <Layout>
      <SEO title={title} />

      <h1> {title} </h1>
      <div dangerouslySetInnerHTML={{__html: content}} />

    </Layout>
  )
}

export default Page