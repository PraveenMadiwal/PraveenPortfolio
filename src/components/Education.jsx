import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-10 px-5 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Education</h2>

        <div className="space-y-6">
          {/* College 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">Jain Institute of Technology</h3>
            <p className="text-gray-600">Davanagere | Mechanical Engineering</p>
            <p className="text-gray-500">Passed out: 2022</p>
          </div>

          {/* College 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">St. Mary's Polytechnic College</h3>
            <p className="text-gray-600">Chitradurga | Mechanical Engineering</p>
            <p className="text-gray-500">Passed out: 2019</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
