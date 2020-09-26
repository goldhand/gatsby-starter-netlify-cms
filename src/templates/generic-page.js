import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { ParallaxHero } from '../components/ParallaxHero'
import Team from '../components/Team'

export const GenericPageTemplate = ({
  title,
  subtitle,
  description,
  image,
  content,
  team,
  contentComponent,
  children,
}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <ParallaxHero
        heading={title}
        subheading={subtitle}
        image={image}
        description={description}
        height="400px"
        backgroundPosition="center"
      />
      {content && (
        <section className="section section--gradient styled-hr">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="section">
                  <PageContent className="content" content={content} />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {children}
    </div>
  )
}

GenericPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const GenericPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <GenericPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
        team={post.frontmatter.team}
        content={post.html}
      />
    </Layout>
  )
}

GenericPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default GenericPage

export const genericPageQuery = graphql`
  query GenericPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        description
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
