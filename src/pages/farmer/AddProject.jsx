import React, { useState } from "react";
import axios from "axios";

const BASE_URL =
  "https://carbon-credit-backend-j16p.onrender.com/api/farmer/activity";

const AddProject = () => {
  const [activity, setActivity] = useState({
    activity_type: "",
    description: "",
    area_covered: "",
    location: "",
  });

  const [activityId, setActivityId] = useState(null);
  const [proofImage, setProofImage] = useState(null);
  const [gps, setGps] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const token = JSON.parse(localStorage.getItem("user"))?.token;

  // ─── Handle input change ─────────────────────
  const handleChange = (e) => {
    setActivity({ ...activity, [e.target.name]: e.target.value });
  };

  // ─── Submit Activity ─────────────────────────
  const handleSubmitActivity = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post(BASE_URL, activity, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setActivityId(res.data.activityId);
      setSuccess(true);
      setMessage("Activity submitted successfully. Now upload proof.");
    } catch (err) {
      setSuccess(false);
      setMessage(err.response?.data?.message || "Failed to submit activity");
    } finally {
      setLoading(false);
    }
  };

  // ─── Upload Proof ────────────────────────────
  const handleUploadProof = async (e) => {
    e.preventDefault();
    if (!proofImage || !activityId) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("proof_image", proofImage);
    formData.append("gps", gps);

    try {
      await axios.post(`${BASE_URL}/${activityId}/proof`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSuccess(true);
      setMessage("Proof uploaded successfully");

      // reset proof state
      setProofImage(null);
      setGps("");
    } catch (err) {
      setSuccess(false);
      setMessage(err.response?.data?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex justify-content-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#DAD7CD,#A3B18A)",
        padding: 40,
      }}
    >
      <div
        className="card"
        style={{
          width: "850px",
          borderRadius: 18,
          padding: 35,
          background: "#ffffff",
          boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
        }}
      >
        {/* HEADER */}
        <div className="mb-4 text-center">
          <h3 style={{ color: "#344E41", fontWeight: 700 }}>
            Add Carbon Project
          </h3>
          <p style={{ color: "#588157" }}>
            Submit activity details and upload verification proof
          </p>
        </div>

        {/* ACTIVITY FORM */}
        <form onSubmit={handleSubmitActivity}>
          <h5 className="mb-3" style={{ color: "#3A5A40", fontWeight: 600 }}>
            Activity Details
          </h5>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Activity Type</label>
              <input
                type="text"
                name="activity_type"
                className="form-control"
                placeholder="Tree Plantation"
                value={activity.activity_type}
                onChange={handleChange}
                required
                style={{ borderRadius: 10 }}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Area Covered</label>
              <input
                type="number"
                step="0.1"
                name="area_covered"
                className="form-control"
                placeholder="Acres"
                value={activity.area_covered}
                onChange={handleChange}
                required
                style={{ borderRadius: 10 }}
              />
            </div>

            <div className="col-12 mb-3">
              <label className="form-label fw-semibold">Description</label>
              <textarea
                name="description"
                className="form-control"
                placeholder="Describe the activity"
                value={activity.description}
                onChange={handleChange}
                rows={3}
                style={{ borderRadius: 10 }}
              />
            </div>

            <div className="col-12 mb-3">
              <label className="form-label fw-semibold">Location</label>
              <input
                type="text"
                name="location"
                className="form-control"
                placeholder="City, State"
                value={activity.location}
                onChange={handleChange}
                required
                style={{ borderRadius: 10 }}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn w-100"
            style={{
              background: "linear-gradient(135deg,#588157,#3A5A40)",
              color: "white",
              borderRadius: 12,
              padding: "10px",
              fontWeight: 600,
            }}
          >
            {loading ? "Submitting..." : "Submit Activity"}
          </button>
        </form>

        {/* PROOF SECTION */}
        {activityId && (
          <form onSubmit={handleUploadProof} className="mt-5">
            <hr />

            <h5 className="mb-3" style={{ color: "#3A5A40", fontWeight: 600 }}>
              Upload Verification Proof
            </h5>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">Upload Image</label>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={(e) => setProofImage(e.target.files[0])}
                  required
                  style={{ borderRadius: 10 }}
                />

                {/* preview */}
                {proofImage && (
                  <img
                    src={URL.createObjectURL(proofImage)}
                    alt="preview"
                    className="mt-2 rounded"
                    style={{ width: "100%", height: 150, objectFit: "cover" }}
                  />
                )}
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">GPS Coordinates</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="18.5204,73.8567"
                  value={gps}
                  onChange={(e) => setGps(e.target.value)}
                  style={{ borderRadius: 10 }}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn w-100"
              style={{
                background: "linear-gradient(135deg,#3A5A40,#344E41)",
                color: "white",
                borderRadius: 12,
                padding: "10px",
                fontWeight: 600,
              }}
            >
              {loading ? "Uploading..." : "Upload Proof"}
            </button>
          </form>
        )}

        {/* MESSAGE */}
        {message && (
          <div
            className={`alert mt-4 text-center ${
              success ? "alert-success" : "alert-danger"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddProject;