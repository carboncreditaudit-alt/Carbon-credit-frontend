import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "https://carbon-credit-backend-j16p.onrender.com/api/admin/users";

const Approval = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(null);

  // get token
  const stored = JSON.parse(localStorage.getItem("user"));
  const token = stored?.token;

  const authHeader = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // fetch pending users
  const fetchPending = async () => {
    try {
      setLoading(true);

      const res = await axios.get(`${API}/users/pending`, authHeader);

      setUsers(res.data.users || []);
    } catch (err) {
      console.log(err);
      alert("Failed to fetch pending users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPending();
  }, []);

  // approve user
  const approveUser = async (id) => {
    try {
      setActionLoading(id);

      await axios.patch(`${API}/users/${id}/approve`, {}, authHeader);

      fetchPending();
    } catch (err) {
      alert("Approve failed");
    } finally {
      setActionLoading(null);
    }
  };

  // reject user
  const rejectUser = async (id) => {
    const reason = prompt("Enter rejection reason");

    if (!reason) return;

    try {
      setActionLoading(id);

      await axios.patch(
        `${API}/users/${id}/reject`,
        { reason },
        authHeader
      );

      fetchPending();
    } catch (err) {
      alert("Reject failed");
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-header bg-dark text-white">
          <h5 className="mb-0">Pending User Approvals</h5>
        </div>

        <div className="card-body">
          {loading ? (
            <div className="text-center py-4">
              <div className="spinner-border text-success"></div>
            </div>
          ) : users.length === 0 ? (
            <p className="text-center text-muted">No pending users</p>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Role</th>
                    <th>Created</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((u) => (
                    <tr key={u.id}>
                      <td>{u.id}</td>
                      <td>{u.email}</td>
                      <td>{u.phone}</td>
                      <td>
                        <span className="badge bg-secondary">{u.role}</span>
                      </td>
                      <td>
                        {new Date(u.created_at).toLocaleDateString()}
                      </td>

                      <td className="text-center">
                        <button
                          className="btn btn-success btn-sm me-2"
                          disabled={actionLoading === u.id}
                          onClick={() => approveUser(u.id)}
                        >
                          {actionLoading === u.id
                            ? "..."
                            : "Approve"}
                        </button>

                        <button
                          className="btn btn-danger btn-sm"
                          disabled={actionLoading === u.id}
                          onClick={() => rejectUser(u.id)}
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Approval;