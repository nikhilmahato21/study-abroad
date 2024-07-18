import React from "react";

const Blog = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Exploring the Future of Education Abroad",
      author: "John Doe",
      date: "July 1, 2024",
      excerpt:
        "Discover the latest trends and opportunities in international education, and how you can benefit from studying abroad.",
    },
    {
      id: 2,
      title: "Tips for a Successful Study Abroad Experience",
      author: "Jane Smith",
      date: "June 20, 2024",
      excerpt:
        "Get practical advice and tips to make the most of your study abroad journey and ensure a successful experience.",
    },
    {
      id: 3,
      title: "Top Scholarships for International Students",
      author: "Michael Brown",
      date: "June 10, 2024",
      excerpt:
        "Learn about the best scholarships available for international students and how to apply for them to fund your education.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">Our Blog</h2>
          <p className="mt-4 text-gray-600">
            Welcome to the Destiny Euro Blog! Here, you'll find a wealth of
            information, insights, and tips about studying in Europe. From
            student experiences to application advice and travel tips, our blog
            is your go-to resource for all things related to studying abroad.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">
                By {post.author} on {post.date}
              </p>
              <p className="text-gray-600">{post.excerpt}</p>
              <button className="mt-4 text-blue-600 hover:underline">
                Read more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
