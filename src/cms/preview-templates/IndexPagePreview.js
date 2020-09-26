import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    const props = {
        ...data,
        image: getAsset(data.image),
        contactimage: getAsset(data.contactimage),
        intro: data.intro || { blurbs: [] },
        mainpitch: data.mainpitch || {},
        testimonials: data.testimonials || [],
    };
    return (
      <IndexPageTemplate {...props} />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
