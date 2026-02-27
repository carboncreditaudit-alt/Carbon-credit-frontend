import React from "react";

const HomePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">
        Dashboard Home
      </h1>

      <p className="text-gray-700 mb-4">
        This is the main entry page of the system. From here you can
        navigate to different modules based on your role.
      </p>

      <div className="space-y-2">
        <div className="border rounded-lg p-3">
          <strong>Farmers:</strong> Manage activities and view benefits.
        </div>

        <div className="border rounded-lg p-3">
          <strong>NGOs:</strong> Track programs and monitor progress.
        </div>

        <div className="border rounded-lg p-3">
          <strong>Companies:</strong> Review reports and analytics.
        </div>

        <div className="border rounded-lg p-3">
          <strong>Admin:</strong> Oversee the entire system.
        </div>
      </div>
    </div>
  );
};

export default HomePage;