import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    const props = {
      ...data,
      image: getAsset(data.image),
      contactimage: getAsset(data.contactimage),
      testimonials: data.testimonials || [],
      content: widgetFor('body'),
    }
    return <IndexPageTemplate {...props} />
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default IndexPagePreview
