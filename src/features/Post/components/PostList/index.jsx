import React from "react";
import PropTypes from "prop-types";
import Post from "../Post";

PostList.propTypes = {
  postList: PropTypes.array,
};

PostList.defaultProps = {
  postList: [],
};

function PostList(props) {
  const { postList } = props;

  return (
    <ul className="post-list">
      {postList.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
}

export default PostList;
