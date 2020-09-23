import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Form from '../components/Form'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0 parallax"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundSize: 'cover',
        height: '600px',
      }}
    >
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        background: 'rgba(0,0,0,0.3)',
    }}>
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            color: 'white',
            lineHeight: '1.25em',
            padding: '0.25em 1rem',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            color: 'white',
            lineHeight: '1.25em',
            padding: '0.25em 1rem',
          }}
        >
          {subheading}
        </h3>
        <p style={{maxWidth: '800px', color: 'white', lineHeight: '1.5em', padding: '1rem'}}>{mainpitch.description}</p>
      </div>
    </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
                <div className="content">
                  <div className="section-head">
                    <h1 className="title">{mainpitch.title}</h1>
                    <hr />
                  </div>
                </div>
          </div>
      </div>
    </section>
    <div
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundSize: 'cover',
      }}
      className="contact-form is-inverse"
    >

              <div className="columns">
                <div className="column is-12">
                  <div className="section-head">
                    <h3 className="title has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <hr />
                  </div>
                  <p>{description}</p>
                </div>
              </div>
        <div className="column is-10 is-offset-1">
          <div className="content">
            <Form />
          </div>
        </div>
    </div>
    <section className="section has-background-black has-text-white-ter has-text-centered">
      <div className="container">
        <div className="section">
                <div className="content">
                  <div className="section-head">
                    <h1 className="title has-text-white-ter">{mainpitch.title}</h1>
                    <hr />
                  </div>
                  <div className="columns">
                    <div className="column">
                  <a className="contact-info has-text-primary" href="tel:5202227997">
                    <span className="icon"><i className="fas fa-mobile"></i></span>
                    (520) 222-7997
                  </a>
                  </div>
                    <div className="column">
                  <a className="contact-info has-text-primary" href="https://web.archive.org/web/20200220012047/mailto:info@azmedicarehelpers.com">
                    <span className="icon"><i className="fas fa-envelope-o"></i></span>
                    info@azmedicarehelpers.com
                  </a>
                  </div>
                  </div>
                </div>
          </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
      frontmatter {
        title
        image {
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
