import React from 'react'
import { Content, Title, Date, Detail } from './blog_content.module.css'
import { FaCalendarAlt } from "react-icons/fa";
import './blog_content.module.css'

const BlogContent = ({ markdownRemark, footer }) => {
    const { frontmatter, html } = markdownRemark

    return (
        <div className={ Content }>
            <h1 className={ Title }> {frontmatter.title} </h1>
            <span className={ Date }> <FaCalendarAlt /> {frontmatter.date} </span>

            <section dangerouslySetInnerHTML={{ __html: html }} itemProp='articleBody' className={ Detail }></section >

            <hr/>

            {footer}
        </div>

    )
}

export default BlogContent