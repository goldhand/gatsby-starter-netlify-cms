import React from 'react'
import PropTypes from 'prop-types'

export const ParallaxHero = ({
  image,
  heading,
  subheading,
  description,
  height = '600px',
  backgroundPosition = 'top',
}) => (
  <div
    className="full-width-image margin-top-0 parallax"
    style={{
      backgroundImage: `url(${
        !!image.childImageSharp ? image.childImageSharp.fluid.src : image
      })`,
      backgroundPosition,
      height,
    }}
  >
    <div className="image-overlay">
      <div
        style={{
          display: 'flex',
          height: '150px',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <h1 className="title has-text-weight-bold has-text-white-ter is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
          {heading}
        </h1>
        <h3 className="title has-text-weight-bold has-text-white-ter is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
          {subheading}
        </h3>
        <p
          className="has-text-white-ter"
          style={{
            maxWidth: '800px',
            lineHeight: '1.5em',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  </div>
)

ParallaxHero.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
  height: PropTypes.string,
}
