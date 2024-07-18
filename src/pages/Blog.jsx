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
      imageUrl: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
    {
      id: 2,
      title: "Tips for a Successful Study Abroad Experience",
      author: "Jane Smith",
      date: "June 20, 2024",
      excerpt:
        "Get practical advice and tips to make the most of your study abroad journey and ensure a successful experience.",
      imageUrl: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
    {
      id: 3,
      title: "Top Scholarships for International Students",
      author: "Michael Brown",
      date: "June 10, 2024",
      excerpt:
        "Learn about the best scholarships available for international students and how to apply for them to fund your education.",
      imageUrl: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
  ];

  return (
    <section className="py-16 bg-gray-50 lg:px-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 font-poppins">Our Blog</h2>
          <p className="mt-4 text-gray-600 font-poppins">
            Welcome to the Destiny Euro Blog! Here, you'll find a wealth of
            information, insights, and tips about studying in Europe. From
            student experiences to application advice and travel tips, our blog
            is your go-to resource for all things related to studying abroad.
          </p>
        </div>
        <div className="grid grid-cols-1  gap-8">
          {blogPosts.map((post) => (
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
                <p className="text-gray-600 font-poppins">{post.excerpt}</p>
                <button className="mt-4 text-blue-600 hover:underline font-poppins">
                  Read more
                </button>
              </div>
              <div className="lg:w-1/3 lg:pl-4 mt-4 lg:mt-0">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="rounded-lg shadow-lg"
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
