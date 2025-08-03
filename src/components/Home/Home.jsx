import React from "react";

export default function Home() {
  return (
    <div
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        lineHeight: "1.6",
        color: "#333",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #1c3323 0%, #2d5a3d 100%)",
          color: "white",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated background elements */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "10%",
            width: "200px",
            height: "200px",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "50%",
            animation: "float 6s ease-in-out infinite",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            left: "5%",
            width: "150px",
            height: "150px",
            background: "rgba(255,255,255,0.03)",
            borderRadius: "50%",
            animation: "float 8s ease-in-out infinite reverse",
          }}
        ></div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            width: "100%",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                fontSize: "4rem",
                fontWeight: "800",
                marginBottom: "1.5rem",
                background: "linear-gradient(135deg, #ffffff 0%, #e0f2e7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              Smart Attendance System
            </h1>
            <p
              style={{
                fontSize: "1.5rem",
                marginBottom: "2rem",
                opacity: "0.9",
                maxWidth: "800px",
                margin: "0 auto 2rem auto",
              }}
            >
              Revolutionary facial recognition technology that automates student
              attendance with 95%+ accuracy
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <button
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f0f9f2 100%)",
                  color: "#1c3323",
                  border: "none",
                  padding: "1rem 2rem",
                  borderRadius: "50px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                  transition: "all 0.3s ease",
                  transform: "translateY(0)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.boxShadow = "0 12px 35px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 8px 25px rgba(0,0,0,0.2)";
                }}
              >
                Get Started
              </button>
              <button
                style={{
                  background: "transparent",
                  color: "white",
                  border: "2px solid rgba(255,255,255,0.3)",
                  padding: "1rem 2rem",
                  borderRadius: "50px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(255,255,255,0.1)";
                  e.target.style.borderColor = "rgba(255,255,255,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "transparent";
                  e.target.style.borderColor = "rgba(255,255,255,0.3)";
                }}
              >
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            animation: "bounce 2s infinite",
          }}
        >
          <div
            style={{
              width: "30px",
              height: "50px",
              border: "2px solid rgba(255,255,255,0.5)",
              borderRadius: "25px",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "10px",
                background: "white",
                borderRadius: "3px",
                position: "absolute",
                top: "8px",
                left: "50%",
                transform: "translateX(-50%)",
                animation: "scroll 2s infinite",
              }}
            ></div>
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
            40% { transform: translateX(-50%) translateY(-10px); }
            60% { transform: translateX(-50%) translateY(-5px); }
          }
          @keyframes scroll {
            0% { opacity: 0; transform: translateX(-50%) translateY(0); }
            50% { opacity: 1; transform: translateX(-50%) translateY(10px); }
            100% { opacity: 0; transform: translateX(-50%) translateY(20px); }
          }
        `}</style>
      </section>

      {/* Key Features Section */}
      <section style={{ padding: "6rem 2rem", background: "#f8fdf9" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "3rem",
              textAlign: "center",
              marginBottom: "3rem",
              color: "#1c3323",
              fontWeight: "700",
            }}
          >
            Key Features
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                title: "Automated Attendance Marking",
                description:
                  "Image-based facial recognition automatically marks attendance after each class, with no manual intervention required.",
                icon: "🤖",
              },
              {
                title: "Strategic Camera Placement",
                description:
                  "Cameras strategically installed to capture clear group images, covering maximum number of faces in each class.",
                icon: "📹",
              },
              {
                title: "Batch Processing",
                description:
                  "Images stored and processed after class sessions end, ensuring accuracy without real-time constraints.",
                icon: "⚡",
              },
              {
                title: "Eliminate Proxy Attendance",
                description:
                  "Facial recognition ensures that only present students are marked as attended, preventing fraud.",
                icon: "🔒",
              },
              {
                title: "User-Friendly Interface",
                description:
                  "Easy-to-use platform for administrators and teachers to manage and view attendance records.",
                icon: "👥",
              },
              {
                title: "Advanced Analytics",
                description:
                  "Filter by date, subject, and class for improved operational efficiency and detailed reporting.",
                icon: "📊",
              },
            ].map((feature, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "2.5rem",
                  borderRadius: "20px",
                  boxShadow: "0 10px 40px rgba(28, 51, 35, 0.1)",
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(28, 51, 35, 0.05)",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 60px rgba(28, 51, 35, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 40px rgba(28, 51, 35, 0.1)";
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    height: "4px",
                    background: "linear-gradient(90deg, #1c3323, #2d5a3d)",
                  }}
                ></div>
                <div
                  style={{
                    fontSize: "3rem",
                    marginBottom: "1rem",
                    textAlign: "center",
                  }}
                >
                  {feature.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "1rem",
                    color: "#1c3323",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    color: "#666",
                    fontSize: "1.1rem",
                    textAlign: "center",
                    lineHeight: "1.6",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section
        style={{
          padding: "6rem 2rem",
          background: "linear-gradient(135deg, #1c3323 0%, #2d5a3d 100%)",
          color: "white",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}
        >
          <h2
            style={{
              fontSize: "3rem",
              marginBottom: "3rem",
              fontWeight: "700",
            }}
          >
            Proven Results
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "3rem",
            }}
          >
            {[
              { number: "95%+", label: "Face Detection Accuracy" },
              { number: "60", label: "Students Per Batch" },
              { number: "10+", label: "Teacher Dashboards" },
              { number: "100%", label: "Automation Rate" },
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  padding: "2rem",
                  borderRadius: "15px",
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <div
                  style={{
                    fontSize: "3.5rem",
                    fontWeight: "800",
                    marginBottom: "0.5rem",
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #e0f2e7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: "1.2rem",
                    opacity: "0.9",
                    fontWeight: "500",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ padding: "6rem 2rem", background: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "3rem",
                  marginBottom: "2rem",
                  color: "#1c3323",
                  fontWeight: "700",
                }}
              >
                Transform Your Institution
              </h2>
              <div style={{ marginBottom: "2rem" }}>
                {[
                  "Enhanced institutional record-keeping accuracy",
                  "Real-time data access for better decision making",
                  "Minimized manual errors and administrative overhead",
                  "Improved operational efficiency across all departments",
                  "Advanced filtering by date, subject, and class",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "1rem",
                      padding: "1rem",
                      background: "#f8fdf9",
                      borderRadius: "10px",
                      border: "1px solid rgba(28, 51, 35, 0.1)",
                    }}
                  >
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        background: "#1c3323",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "1rem",
                        flexShrink: "0",
                      }}
                    >
                      <span style={{ color: "white", fontSize: "14px" }}>
                        ✓
                      </span>
                    </div>
                    <span style={{ color: "#333", fontSize: "1.1rem" }}>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
                background: "linear-gradient(135deg, #f8fdf9 0%, #e8f5ea 100%)",
                borderRadius: "20px",
                padding: "3rem",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-50px",
                  right: "-50px",
                  width: "100px",
                  height: "100px",
                  background: "rgba(28, 51, 35, 0.1)",
                  borderRadius: "50%",
                }}
              ></div>
              <div
                style={{
                  fontSize: "8rem",
                  marginBottom: "1rem",
                }}
              >
                🎯
              </div>
              <h3
                style={{
                  fontSize: "2rem",
                  color: "#1c3323",
                  marginBottom: "1rem",
                  fontWeight: "600",
                }}
              >
                Ready to Get Started?
              </h3>
              <p
                style={{
                  color: "#666",
                  fontSize: "1.2rem",
                  marginBottom: "2rem",
                }}
              >
                Join institutions worldwide that have revolutionized their
                attendance management
              </p>
              <button
                style={{
                  background:
                    "linear-gradient(135deg, #1c3323 0%, #2d5a3d 100%)",
                  color: "white",
                  border: "none",
                  padding: "1rem 2rem",
                  borderRadius: "50px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  boxShadow: "0 8px 25px rgba(28, 51, 35, 0.3)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.boxShadow =
                    "0 12px 35px rgba(28, 51, 35, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 8px 25px rgba(28, 51, 35, 0.3)";
                }}
              >
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#1c3323",
          color: "white",
          padding: "3rem 2rem 2rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h3
            style={{
              fontSize: "2rem",
              marginBottom: "1rem",
              fontWeight: "600",
            }}
          >
            Smart Attendance System
          </h3>
          <p
            style={{ opacity: "0.8", marginBottom: "2rem", fontSize: "1.1rem" }}
          >
            Revolutionizing education through intelligent automation
          </p>
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.2)",
              paddingTop: "2rem",
              opacity: "0.6",
            }}
          >
            <p>&copy; 2025 Smart Attendance System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
