import React from 'react'
import { graphql } from 'gatsby'
import Layer from '../components/layer'
import BlogContent from '../components/blog_content'
import Seo from '../components/seo'

const PostTemplate = ({ data }) => {
    const { markdownRemark } = data

    return (
        <Layer PageTitle={markdownRemark.frontmatter.title}>
            <Seo title={markdownRemark.frontmatter.title+" | Luke"}
                description="Student / Programmer" 
                image="/icons/icon-512x512.png" 
                lang="ja"
            />
            <BlogContent markdownRemark={markdownRemark}>

            </BlogContent>
        </Layer>
    )
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`