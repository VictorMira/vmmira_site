import React from 'react';

import Layout from '../components/layout'

export default function Template({data}){
    const { markdownRemark: post} = data;
    const style = {
        width: '60%',
        margin: '0 auto'
    }
        return (
       <Layout>
          <div style={style}>
                <h1>{ post.frontmatter.title }</h1>
                <div dangerouslySetInnerHTML = {{__html: post.html }}/>
          </div>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!){
        markdownRemark(frontmatter: { path: { eq: $path }}){
            html
            frontmatter {
                path
                title
            }
        }
    }
`