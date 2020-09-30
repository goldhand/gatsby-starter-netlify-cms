import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const Team = ({ gridItems }) => (
  <div className="grid col-3">
    {gridItems.map((item) => (
      <div key={item.name}>
        <article className="tile is-vertical team-tile">
          <p className="title">{item.name}</p>
          <p className="subtitle">
            {item.jobs.map((job) => (
              <span key={job.title}>
                {job.title}
                <br />
              </span>
            ))}
            <span>
              {item.email && <a href={`mailto:${item.email}`}>Contact me</a>}
            </span>
          </p>
          <figure className="image circle-img team-img">
            <PreviewCompatibleImage imageInfo={item} />
          </figure>
        </article>
      </div>
    ))}
  </div>
)

Team.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default Team
