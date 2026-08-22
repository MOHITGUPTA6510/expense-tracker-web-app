import { useNavigate } from "react-router-dom";
import "./ProfilePage.css";

export function ProfilePage() {
    const Navigate = useNavigate();
  return (
    <>
    <div className="profile-page">

      {/* Header */}

      <div className="profile-page-header">
        <h1>Profile</h1>

        <button className="back-btn" onClick={() => Navigate("/dashboard")}>
          ← Back
        </button>
      </div>


      {/* Profile Card */}

      <div className="profile-card">

        <div className="profile-avatar">
          👤
        </div>

        <h2>Mohit Gupta</h2>

        <p className="profile-email">
          mohit@gmail.com
        </p>

        <p className="profile-location">
          Lucknow, India
        </p>

        <button className="edit-profile-btn">
          Edit Profile
        </button>

      </div>


      {/* Financial Summary */}

      <div className="profile-stats">

        <div className="profile-stat-card">
          <span>Total Balance</span>
          <h2>₹24,500</h2>
        </div>

        <div className="profile-stat-card">
          <span>Total Expenses</span>
          <h2>₹57,500</h2>
        </div>

        <div className="profile-stat-card">
          <span>Total Income</span>
          <h2>₹82,000</h2>
        </div>

        <div className="profile-stat-card">
          <span>Transactions</span>
          <h2>124</h2>
        </div>

      </div>


      {/* Personal Information */}

      <div className="profile-section">

        <div className="section-header">
          <h2>Personal Information</h2>

          <button className="section-edit-btn">
            Edit
          </button>
        </div>

        <div className="personal-info-card">

          <div className="info-row">
            <span>Full Name</span>
            <strong>Mohit Gupta</strong>
          </div>

          <div className="info-row">
            <span>Email</span>
            <strong>mohit@gmail.com</strong>
          </div>

          <div className="info-row">
            <span>Location</span>
            <strong>Lucknow, India</strong>
          </div>

        </div>

      </div>


      {/* Account Settings */}

      <div className="profile-section">

        <h2 className="settings-title">
          Account Settings
        </h2>

        <div className="settings-card">

          <button className="setting-item">
            <span>
              🔒 &nbsp; Change Password
            </span>

            <span>→</span>
          </button>


          <button className="setting-item">
            <span>
              🔔 &nbsp; Notifications
            </span>

            <span>→</span>
          </button>


          <button className="setting-item">
            <span>
              📥 &nbsp; Export Data
            </span>

            <span>→</span>
          </button>


          <button className="setting-item">
            <span>
              ⚙️ &nbsp; Settings
            </span>

            <span>→</span>
          </button>

        </div>

      </div>


      {/* Logout */}

      <div className="logout-container">

        <button className="logout-btn">
          Logout
        </button>

      </div>

    </div>
    </>
  );
}

export default ProfilePage;