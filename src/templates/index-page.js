import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Form from '../components/Form'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import BlogRoll from '../components/BlogRoll'
import { ParallaxHero } from '../components/ParallaxHero'

export const IndexPageTemplate = ({
  image,
  title,
  subtitle,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  testimonials,
  content,
  contentComponent,
  contactimage,
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
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="content">
              <div className="section-head">
                <h1 className="title">{heading}</h1>
                <hr />
              </div>
              {content && <PageContent className="content" content={content} />}
              <div className="content">
                <Testimonials testimonials={testimonials} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        style={{
          backgroundImage: `url(${
            !!contactimage.childImageSharp
              ? contactimage.childImageSharp.fluid.src
              : contactimage
          })`,
          backgroundSize: 'cover',
        }}
        className=""
      >
        <div className="image-overlay contact-form is-inverse">
          <div>
            <div className="columns">
              <div className="column is-12">
                <div className="section-head">
                  <h3 className="title has-text-weight-semibold is-size-2">
                    {subheading}
                  </h3>
                  <hr />
                </div>
              </div>
            </div>
            <div className="column is-10 is-offset-1">
              <div className="content">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  contactimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,
  content: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        contactimage={frontmatter.contactimage}
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        testimonials={frontmatter.testimonials}
        content={data.markdownRemark.html}
        contentComponent={HTMLContent}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        testimonials {
          author
          quote
        }
        title
        subtitle
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        contactimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
