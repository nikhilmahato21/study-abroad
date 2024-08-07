import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../Lists";
const blogLists = blogPosts;

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogLists.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto py-16 px-6 lg:px-24">
      <h1 className="text-3xl font-semibold text-gray-800 font-poppins">
        {post.title}
      </h1>
      <p className="text-gray-600 mt-2 mb-8 font-poppins">
        By {post.author} on {post.date}
      </p>
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-96 rounded-lg shadow-lg mb-8  object-cover object-center"
      />
      <div className="text-gray-600 font-semibold font-poppins text-center">
        <p>{post.introduction}</p>
        {/* Add more sections and content as needed */}
      </div>
    </div>
  );
};

export default BlogDetails;
