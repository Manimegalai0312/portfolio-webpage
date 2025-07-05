import React from 'react';

const Register = () => (
  <div
    className="d-flex justify-content-center align-items-center bg-light"
    style={{ minHeight: '100vh' }}
  >
    <div className="card shadow p-4 w-100" style={{ maxWidth: '450px' }}>
      <h2 className="text-center mb-4">📝 Register</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Name"
        style={{ fontSize: '1rem', padding: '12px' }}
      />

      <input
        type="email"
        className="form-control mb-3"
        placeholder="Email"
        style={{ fontSize: '1rem', padding: '12px' }}
      />

      <input
        type="password"
        className="form-control mb-4"
        placeholder="Password"
        style={{ fontSize: '1rem', padding: '12px' }}
      />

      <button className="btn btn-primary w-100 py-2 fs-5">Register</button>
    </div>
  </div>
);

export default Register;
