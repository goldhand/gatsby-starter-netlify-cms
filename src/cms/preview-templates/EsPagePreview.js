import React from 'react'
import PropTypes from 'prop-types'
import { EsPageTemplate } from '../../templates/es-page'

const EsPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    const props = {
      ...data,
      image: getAsset(data.image),
      contactimage: getAsset(data.contactimage),
      content: widgetFor('body'),
      testimonials: data.testimonials || [],
    }
    return <EsPageTemplate {...props} />
  } else {
    return <div>Loading...</div>
  }
}

EsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default EsPagePreview
