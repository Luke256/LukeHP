import React from 'react'
import { config } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons"
import { Content, Title, Date, Detail } from './blog_content.module.css'
import './blog_content.module.css'

config.autoAddCss = false;
const BlogContent = ({ markdownRemark }) => {
    const { frontmatter, html } = markdownRemark

    return (
        <div className={ Content }>
            <h1 className={ Title }> {frontmatter.title} </h1>
            <span className={ Date }> <FontAwesomeIcon icon={ faCalendarDays }></FontAwesomeIcon> {frontmatter.date} </span>

            <section dangerouslySetInnerHTML={{ __html: html }} itemProp='articleBody' className={ Detail }></section >
        </div>

    )
}

export default BlogContent