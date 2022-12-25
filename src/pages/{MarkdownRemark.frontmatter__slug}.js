import React from 'react'
import { graphql } from 'gatsby'
import Layer from '../components/layer'
import BlogContent from '../components/blog_content'
import Seo from '../components/seo'
import ShareLink from '../components/share_link'

const PostTemplate = ({ data }) => {
    const { markdownRemark } = data
    const siteUrl = data.site.siteMetadata.siteUrl

    const footer = <ShareLink title={markdownRemark.frontmatter.title} url={`${siteUrl}${markdownRemark.frontmatter.slug}`}/>

    return (
        <Layer PageTitle={markdownRemark.frontmatter.title}>
            <div>
                <BlogContent markdownRemark={markdownRemark} footer={footer}></BlogContent>
            </div>
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
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

export const Head = ({ data }) => (
  <Seo title={data.markdownRemark.frontmatter.title}
                description="Student / Programmer"
                image="/icons/icon-512x512.png"
                lang="ja"
            />
)