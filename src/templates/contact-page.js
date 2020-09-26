import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Form from '../components/Form'
import Content, { HTMLContent } from '../components/Content'
import { ParallaxHero } from '../components/ParallaxHero'
import Team from '../components/Team'
import { GenericPageTemplate } from './generic-page'

export const ContactPageTemplate = (props = {}) => {
  return (
    <GenericPageTemplate {...props}>
      <div className="section">
        <div>
          <div className="column is-10 is-offset-1">
            <div className="content">
            {props.heading && (
              <div className="section-head">
                <h1 className="title">{props.heading}</h1>
                <hr />
              </div>
              )}
              <Form />
            </div>
          </div>
        </div>
      </div>
    </GenericPageTemplate>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ContactPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        description={post.frontmatter.description}
        heading={post.frontmatter.heading}
        image={post.frontmatter.image}
        team={post.frontmatter.team}
        content={post.html}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        description
        heading
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
