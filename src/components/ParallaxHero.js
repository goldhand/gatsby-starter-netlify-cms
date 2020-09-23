import React from 'react'
import PropTypes from 'prop-types'

export const ParallaxHero = ({
  image,
  heading,
  subheading,
  description,
}) => (
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
          {heading}
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
        <p style={{maxWidth: '800px', color: 'white', lineHeight: '1.5em', padding: '1rem'}}>{description}</p>
      </div>
    </div>
    </div>
)

ParallaxHero.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
}
