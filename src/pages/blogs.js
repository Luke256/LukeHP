import React from 'react'
import BlogList from '../components/blog_list'
import { graphql } from 'gatsby'
import Layer from '../components/layer'
import Content from '../components/content'

const Blogs = ({data}) => {
    return (
        <Layer PageTitle="Blogs">
            <Content Title="Lukeのブログ">
                <BlogList data={data.allMarkdownRemark}></BlogList>
            </Content>
        </Layer>
    )
}

export default Blogs

export const query = graphql`
query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "YYYY/MM/DD")
          title
          slug
        }
      }
    }
  }
`