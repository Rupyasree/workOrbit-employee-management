import Navbar from "../components/Navbar";
import React from "react";

function Landing() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1557683316-973673baf926')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Arial, sans-serif",
        color: "white",
      }}
    >
      <Navbar />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "80px 80px",
        }}
      >
        {/* LEFT CONTENT */}
        <div style={{ width: "50%" }}>
          <h1
            style={{
              fontSize: "48px",
              lineHeight: "1.3",
              fontWeight: "bold",
            }}
          >
            Monitor Workforce Productivity & Engagement
          </h1>

          <p
            style={{
              marginTop: "20px",
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#e0e0e0",
            }}
          >
            Empower your organization with a smart employee management
            platform. Track workforce performance, streamline HR operations,
            and maintain productivity across teams with real-time insights.
          </p>

          <div style={{ marginTop: "35px", display: "flex", gap: "20px" }}>
            <button
              style={{
                padding: "14px 32px",
                borderRadius: "30px",
                border: "none",
                background: "#4fc3f7",
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Get Started
            </button>

            <button
              style={{
                padding: "14px 32px",
                borderRadius: "30px",
                border: "2px solid white",
                background: "transparent",
                color: "white",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          style={{
            width: "40%",
            backdropFilter: "blur(10px)",
            background: "rgba(255,255,255,0.1)",
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
            alt="team work"
            style={{
              width: "100%",
              borderRadius: "15px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;