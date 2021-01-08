import React from "react";
import PropTypes from "prop-types";

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

function Post(props) {
  const { post } = props;

  return <div className="post">{post.title}</div>;
}

export default Post;
