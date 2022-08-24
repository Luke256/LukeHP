import * as React from 'React'
import { Link } from 'gatsby'
import Table from '../table'
import { bloglink } from './blog_list.module.css'

const BlogList = ({ data }) => {

    let posts = []
    data.nodes.forEach(item=>{
        posts.push([item.frontmatter.date, <Link className={bloglink} to={item.frontmatter.slug}>{item.frontmatter.title}</Link>])
    })
    console.log(posts)

    return (
        <Table items={posts}></Table>
    )
}

export default BlogList