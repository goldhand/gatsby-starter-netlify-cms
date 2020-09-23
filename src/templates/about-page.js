import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { ParallaxHero } from '../components/ParallaxHero'
import Team from '../components/Team'

export const AboutPageTemplate = ({
  title,
  subtitle,
  description,
  image,
  content,
  team,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <ParallaxHero
        heading={title}
        subheading={subtitle}
        image={image}
        description={description}
      />
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
      <section className="section section--gradient styled-hr">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section-head">
                <h3 className="title has-text-weight-semibold is-size-2">
                  Meet Your Team
                </h3>
                <hr />
              </div>
              <div className="section">
                <Team gridItems={team} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  team: PropTypes.arrayOf(PropTypes.object),
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
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

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        team {
          jobs {
            title
          }
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          name
        }
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
