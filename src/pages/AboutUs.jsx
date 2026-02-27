import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        About This Project
      </h1>

      <p className="text-gray-600 leading-relaxed mb-4">
        This platform is designed to manage course attainment, faculty
        performance, and academic analytics in a structured and scalable way.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        It enables administrators, coordinators, and faculty members to
        collaborate efficiently through role-based dashboards and real-time
        reporting.
      </p>

      <div className="mt-6 bg-white border rounded-xl p-4 shadow-sm">
        <h2 className="font-medium text-gray-800 mb-2">Key Features</h2>
        <ul className="list-disc pl-5 text-gray-600 space-y-1">
          <li>Role-based access control</li>
          <li>Course and faculty management</li>
          <li>Marks and attainment analytics</li>
          <li>Reporting and insights</li>
        </ul>
      </div>
    </div>
  );
};

export default About;