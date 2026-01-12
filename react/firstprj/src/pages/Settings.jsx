import React from "react";
import "./Settings.css";

function Settings() {
  return (
    <section className="settings-container">
      <div className="settings-card">
        <h1>Settings</h1>
        <p className="settings-subtitle">
          Manage your preferences and application settings
        </p>

        <div className="setting-item">
          <span>🔔 Notifications</span>
          <input type="checkbox" />
        </div>

        <div className="setting-item">
          <span>🌙 Dark Mode</span>
          <input type="checkbox" />
        </div>

        <div className="setting-item">
          <span>🔐 Private Account</span>
          <input type="checkbox" />
        </div>

        <button className="save-btn">Save Settings</button>
      </div>
    </section>
  );
}

export default Settings;
