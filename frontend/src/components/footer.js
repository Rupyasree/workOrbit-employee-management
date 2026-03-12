import React from "react";

const Footer = () => {
  // Replace with actual images or SVG imports for certification logos and social icons
  const certifications = [
    "ISO 27001", "ISO 27701", "ISO 27017", "ISO 27018", "AICPA SOC", "GDPR", "HIPAA"
  ];

  const socialIcons = [
    { name: "Facebook", color: "#1877F2", short: "F" },
    { name: "X (Twitter)", color: "#1DA1F2", short: "X" },
    { name: "LinkedIn", color: "#0A66C2", short: "in" },
    { name: "YouTube", color: "#FF0000", short: "YT" },
    { name: "Pinterest", color: "#E60023", short: "P" },
    { name: "Instagram", color: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)", short: "IG" }
  ];

  return (
    <footer
  style={{
    backgroundColor: "#222",
    color: "#eee",
    padding: "40px 60px",
    fontSize: "14px",
    lineHeight: 1.9,
    fontFamily: "Arial, sans-serif",
    marginTop: "0px"  // Reduced from 150px to 40px
  }}
>
  {/* ...rest unchanged */}
      {/* Links Section */}
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "40px" }}>
        <div style={{ minWidth: "150px", marginBottom: "20px" }}>
          <h4 style={{ color: "#fff" }}>Performance management</h4>
          <p>Compensation management</p>
          <p>Learning management</p>
          <p>Employee engagement</p>
          <p>HR analytics</p>
          <p>Offboarding</p>
        </div>
        <div style={{ minWidth: "150px", marginBottom: "20px" }}>
          <h4 style={{ color: "#fff" }}>Quick links</h4>
          <p>Pricing</p>
          <p>Customer success stories</p>
          <p>HR chatbot</p>
          <p>GDPR compliance</p>
          <p>Data security and privacy</p>
          <p>Scalability</p>
        </div>
        <div style={{ minWidth: "150px", marginBottom: "20px" }}>
          <h4 style={{ color: "#fff" }}>Request a price quote</h4>
          <p>Events & workshops</p>
          <p>Forums</p>
        </div>
      </div>

      {/* Support Email and Social */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #444",
          borderBottom: "1px solid #444",
          padding: "20px 0",
          marginBottom: "30px"
        }}
      >
        <div>
          <span style={{ marginRight: "10px", fontSize: "18px" }}>✉️</span>
          <a
            href="mailto:support@zohopeople.com"
            style={{ color: "#eee", fontWeight: "bold", textDecoration: "underline" }}
          >
            support@WorkOrbitpeople.com
          </a>
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          {socialIcons.map((icon) => (
            <div
              key={icon.name}
              title={icon.name}
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                background: icon.color,
                color: "#fff",
                fontWeight: "bold",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                userSelect: "none"
              }}
            >
              {icon.short}
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div style={{ display: "flex", gap: "25px", justifyContent: "center", marginBottom: "30px", flexWrap: "wrap" }}>
        {certifications.map((cert) => (
          <div
            key={cert}
            style={{
              border: "1px solid #555",
              borderRadius: "8px",
              padding: "8px 12px",
              color: "#bbb",
              fontSize: "12px",
              whiteSpace: "nowrap",
              userSelect: "none"
            }}
            title={cert}
          >
            {cert}
          </div>
        ))}
      </div>

      {/* Search and Language */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          marginBottom: "30px"
        }}
      >
        <input
          type="search"
          placeholder="Search for product overviews, FAQs, and more..."
          style={{
            width: "350px",
            padding: "10px 15px",
            borderRadius: "4px 0 0 4px",
            border: "none",
            outline: "none",
            fontSize: "14px"
          }}
        />
        <button
          style={{
            backgroundColor: "#444",
            border: "none",
            padding: "10px 15px",
            borderRadius: "0 4px 4px 0",
            cursor: "pointer"
          }}
          aria-label="Search"
        >
          🔍
        </button>
        <select
          defaultValue="English"
          style={{
            backgroundColor: "#444",
            color: "#eee",
            border: "none",
            padding: "10px",
            borderRadius: "4px",
            fontSize: "14px",
            cursor: "pointer"
          }}
        >
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
          <option>German</option>
          <option>Chinese</option>
        </select>
      </div>

      {/* Legal Links */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
          fontSize: "12px",
          color: "#888",
          marginBottom: "15px"
        }}
      >
        {[
          "Contact Us",
          "Security",
          "Compliance",
          "IPR Complaints",
          "Anti-spam Policy",
          "Terms of Service",
          "Privacy Policy",
          "Trademark Policy",
          "Cookie Policy",
          "GDPR Compliance",
          "Abuse Policy"
        ].map((text) => (
          <a
            key={text}
            href="#"
            style={{ color: "#888", textDecoration: "none" }}
            onMouseEnter={e => (e.target.style.color = "#eee")}
            onMouseLeave={e => (e.target.style.color = "#888")}
          >
            {text}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div style={{ textAlign: "center", fontSize: "12px", color: "#555" }}>
        © 2026, PeopleFlow Corporation Pvt. Ltd. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;