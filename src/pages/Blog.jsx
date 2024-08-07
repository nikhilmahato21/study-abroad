import React from "react";
import { limitTextTo200Words } from "../utils";
import { Link } from "react-router-dom";
import { blogPosts } from "../Lists";
const AllBlogLists = blogPosts;
const Blog = () => {
  // Sample blog posts data

  return (
    <section className="py-16 bg-gray-50 lg:px-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 font-poppins">
            Our Blog
          </h2>
          <p className="mt-4 text-gray-600 font-semibold font-poppins">
            Welcome to the Destiny Euro Blog! Here, you'll find a wealth of
            information, insights, and tips about studying in Europe. From
            student experiences to application advice and travel tips, our blog
            is your go-to resource for all things related to studying abroad.
          </p>
        </div>
        <div className="grid grid-cols-1  gap-8">
          {AllBlogLists.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row"
            >
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 font-poppins">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  By {post.author} on {post.date}
                </p>
                <p className="text-gray-600 font-semibold font-poppins">
                  {limitTextTo200Words(post.introduction)}
                </p>
                <button className="mt-4 text-blue-600 hover:underline font-poppins">
                  <Link to={`/blog/${post.id}`}>Read more</Link>
                </button>
              </div>
              <div className="lg:w-1/3 lg:pl-4 mt-4 lg:mt-0  flex items-center justify-center ">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="rounded-lg shadow-lg w-full  h-48 lg:w-56 lg:h-56 object-center object-cover "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
