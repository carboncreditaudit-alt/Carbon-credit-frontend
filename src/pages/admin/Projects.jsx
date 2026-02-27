import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const BASE_URL = "https://carbon-credit-backend-j16p.onrender.com/api/admin/activity";

const Projects = () => {
  const [activities, setActivities] = useState([]);
  const [selected, setSelected] = useState(null);
  const [rejectReason, setRejectReason] = useState("");
  const [loading, setLoading] = useState(false);

  const token = JSON.parse(localStorage.getItem("user"))?.token;

  // ─── Fetch Pending Activities ───────────────
  const fetchPending = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/activities/pending`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setActivities(res.data.activities);
    } catch (err) {
      console.error("Error fetching activities");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPending();
  }, []);

  // ─── Approve Activity ───────────────────────
  const approveActivity = async (id) => {
    if (!window.confirm("Approve this activity?")) return;

    try {
      await axios.patch(
        `${BASE_URL}/activities/${id}/approve`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      fetchPending();
      setSelected(null);
    } catch {
      alert("Approval failed");
    }
  };

  // ─── Reject Activity ────────────────────────
  const rejectActivity = async (id) => {
    if (!rejectReason) return alert("Enter rejection reason");

    try {
      await axios.patch(
        `${BASE_URL}/activities/${id}/reject`,
        { reason: rejectReason },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      fetchPending();
      setSelected(null);
      setRejectReason("");
    } catch {
      alert("Rejection failed");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Pending Carbon Activities</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>Activity</th>
              <th>Farmer</th>
              <th>Area</th>
              <th>Location</th>
              <th>Created</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {activities.map((act) => (
              <tr key={act.id}>
                <td>{act.id}</td>
                <td>{act.activity_type}</td>
                <td>{act.farmer_email}</td>
                <td>{act.area_covered}</td>
                <td>{act.location}</td>
                <td>{new Date(act.created_at).toLocaleDateString()}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => setSelected(act)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* ───────── Modal ───────── */}
      {selected && (
        <div className="modal show d-block">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">Activity Details</h5>
                <button
                  className="btn-close"
                  onClick={() => setSelected(null)}
                />
              </div>

              <div className="modal-body">
                <p><strong>ID:</strong> {selected.id}</p>
                <p><strong>Activity:</strong> {selected.activity_type}</p>
                <p><strong>Farmer:</strong> {selected.farmer_email}</p>
                <p><strong>Area Covered:</strong> {selected.area_covered}</p>
                <p><strong>Location:</strong> {selected.location}</p>
                <p><strong>Status:</strong> {selected.status}</p>

                {selected.proof_image_url && (
                  <img
                    src={`http://localhost:5001/${selected.proof_image_url}`}
                    alt="Proof"
                    className="img-fluid rounded mt-2"
                  />
                )}

                <textarea
                  className="form-control mt-3"
                  placeholder="Reason for rejection"
                  value={rejectReason}
                  onChange={(e) => setRejectReason(e.target.value)}
                />
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-success"
                  onClick={() => approveActivity(selected.id)}
                >
                  Approve
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => rejectActivity(selected.id)}
                >
                  Reject
                </button>

                <button
                  className="btn btn-secondary"
                  onClick={() => setSelected(null)}
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;