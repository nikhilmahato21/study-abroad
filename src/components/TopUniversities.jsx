import React from "react";
const universities = [
  {
    name: "Harvard University",
    image:
      "https://res.cloudinary.com/dynbpb9u0/image/upload/v1721904401/destiny-euro/italy-images/University_of_Bologna_u4dfs4.jpg",
  },
  {
    name: "Stanford University",
    image: "https://via.placeholder.com/300x200?text=Stanford+University",
  },
  {
    name: "MIT",
    image: "https://via.placeholder.com/300x200?text=MIT",
  },
  {
    name: "University of Cambridge",
    image: "https://via.placeholder.com/300x200?text=University+of+Cambridge",
  },
  {
    name: "University of Oxford",
    image: "https://via.placeholder.com/300x200?text=University+of+Oxford",
  },
  {
    name: "University of California, Berkeley",
    image: "https://via.placeholder.com/300x200?text=UC+Berkeley",
  },
];
const TopUniversities = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center p-6">
      <div className="max-w-6xl w-full   rounded-lg overflow-hidden">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((university, index) => (
              <div key={index} className="relative group">
                <img
                  src={university.image}
                  alt={university.name}
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 rounded-b-lg">
                  <h1 className="text-xl font-bold font-poppins">
                    {university.name}
                  </h1>
                  <p className="font-poppins hidden group-hover:block transition-opacity duration-900">
                    Offers unique programs in economics, languages, and
                    international relations.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopUniversities;
