import React from "react"
import PropTypes from "prop-types"

const FilesPreview = ({ entry }) => (
  <>
    <h1>Lien à copier/coller :</h1>
    <a href={entry.getIn(["data", "file"])}>{entry.getIn(["data", "title"])}</a>
  </>
)

FilesPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default FilesPreview
