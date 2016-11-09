import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { ImageDetails } from 'components/ui';
type ImageDetailsType = {
  selected: Object
}

/**
 * <ImageDetailsContainer />

 * @method ImageDetailsContainer
 * @return {JSXElement}
 */
const ImageDetailsContainer = ({
  selected
}:ImageDetailsType):Object => {

  return (
    <div>
      <Link to={'/'}>Back</Link>
      <ImageDetails
        cover={selected.cover}
        title={selected.title}
        description={selected.description}
        upvote={selected.ups}
        downvote={selected.downs}
        score={selected.score}
      />
    </div>
  )
}

/**
 * Will subscribe to Redux store updates
 *
 * @method
 *
 * @param  {Object} state Store’s state
 * @return {Object} and returns an object to be passed as props
 */
const mapStateToProps = (state:Object):Object => {

  return {
    selected: state.gallery.selected
  }
};


export default connect(
  mapStateToProps,
  null
)(ImageDetailsContainer);
