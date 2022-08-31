import React from 'react'
import BlogList from '../components/blog_list'
import { graphql } from 'gatsby'
import Layer from '../components/layer'
import Content from '../components/content'
import Seo from '../components/seo'

const Blogs = ({data}) => {
    return (
        <Layer PageTitle="Blogs">
            <Seo title="LukeHome"
                description="Student / Programmer" 
                image="/icons/icon-512x512.png" 
                lang="ja"
            />
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