/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <Link to={`/blog/${post.slug}`} className="bg-gray-950 p-3 rounded">
      <h3 className="text-lg mb-2">{post.title}</h3>
      <p className="text-sm">{post.excert}</p>
    </Link>
  );
};

export default PostCard;
