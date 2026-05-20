import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdDownload } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';

const Home = () => {
  return (
    <>
      <style>{`
        @keyframes floatAnim {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }
        .float-img {
          animation: floatAnim 5s ease-in-out infinite;
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .pulse-dot {
          animation: pulseDot 2s infinite;
        }
        .type-line {
          display: block;
          font-size: clamp(1.4rem, 3.5vw, 2.25rem);
          font-weight: 700;
          color: white;
          margin-top: 4px;
          margin-bottom: 4px;
          line-height: 1.4;
        }
        .type-line span.typed {
          color: #22d3ee;
          display: inline;
          white-space: normal;
          word-break: keep-all;
        }
        .hero-title {
          font-size: clamp(1.6rem, 4vw, 2.5rem);
          font-weight: 700;
          color: white;
          line-height: 1.3;
        }
      `}</style>

      {/* BG Blobs */}
      <div
        className="fixed rounded-full pointer-events-none z-0 top-0 -left-24 opacity-10"
        style={{ width: "500px", height: "500px", background: "#22d3ee", filter: "blur(100px)" }}
      />
      <div
        className="fixed rounded-full pointer-events-none z-0 opacity-10"
        style={{ width: "420px", height: "420px", top: "40%", right: "-5rem", background: "#3b82f6", filter: "blur(100px)" }}
      />
      <div
        className="fixed rounded-full pointer-events-none z-0 opacity-10"
        style={{ width: "360px", height: "360px", bottom: "10%", left: "28%", background: "#7c3aed", filter: "blur(100px)" }}
      />

      <div
        name="home"
        className="w-full  pt-16 md:pt-44 pb-16 md:pb-24 relative overflow-hidden"
      >
        <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 w-full">

            {/* Left - Text */}
            <Fade left duration={2000} className="">
              <div className="flex flex-col justify-center w-full mt-10 lg:mt-0 lg:order-first order-last ">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-5">
                  <span
                    className="pulse-dot w-2 h-2 rounded-full bg-cyan-400"
                    style={{ boxShadow: "0 0 8px #22d3ee" }}
                  />
                  <span className="text-cyan-400 text-xs tracking-widest">Available for work</span>
                </div>

                {/* Title */}
                <h2 className="hero-title">
                  This is <span className="text-blue-300">Rita</span>,
                </h2>

                {/* Typing */}
                <div className="type-line">
                  I'm a{" "}
                  
                  <TypeAnimation
                    sequence={[
                      'Mern Stack Developer', 2000,
                      'Front-End Developer', 2000,
                    ]}
                    speed={20}
                    className="typed"
                    wrapper="span"
                    repeat={Infinity}
                    cursor={true}
                  />
                </div>

                <p className="text-gray-400 py-4 max-w-md leading-relaxed text-sm md:text-base">
                  MERN-Stack Web Developer with knowledge of HTML, CSS, Tailwind,
                  ReactJs, ExpressJs, Node, MongoDB...
                </p>

                <Tada duration={2000}>
                  
                   <a href="/resume.pdf"
                    download="resume"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 w-fit px-2 py-2 lg:px-6 lg:py-3 md:px-6 md:py-3 my-2 rounded-md font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-[0_8px_28px_rgba(34,211,238,0.4)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Download CV
                    <MdDownload size={20} className="ml-1 group-hover:rotate-90 duration-300" />
                  </a>
                </Tada>

                {/* Stats */}
                <div className="flex gap-6 md:gap-8 mt-8 flex-wrap">
                  {[["3+", "Years Exp."], ["25+", "Projects Done"], ["15+", "Happy Clients"]].map(([n, l]) => (
                    <div key={l}>
                      <div className="text-xl md:text-2xl font-extrabold text-cyan-400">{n}</div>
                      <div className="text-[0.65rem] md:text-[0.7rem] text-gray-500 uppercase tracking-widest">{l}</div>
                    </div>
                  ))}
                </div>

              </div>
            </Fade>

            {/* Right - Floating Image */}
            <Fade right duration={2000} className="">
              <div className="w-full flex justify-center lg:justify-end mt-20 lg:mt-0 md:mt-0  mb-6 order-first lg:order-last">
                <div
                  className="float-img"
                  style={{ position: "relative", width: "260px", height: "260px" }}
                >

                  {/* Glow */}
                  <div style={{
                    position: "absolute",
                    inset: "-20px",
                    borderRadius: "40% 60% 55% 45% / 50% 45% 55% 50%",
                    background: "linear-gradient(135deg, #22d3ee44, #7c3aed44)",
                    filter: "blur(25px)",
                    zIndex: 0,
                  }} />

                  {/* Border Ring */}
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "40% 60% 55% 45% / 50% 45% 55% 50%",
                    padding: "3px",
                    background: "linear-gradient(135deg, #22d3ee, #7c3aed)",
                    zIndex: 1,
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }} />

                  {/* Image */}
                  <div style={{
                    position: "absolute",
                    inset: "3px",
                    borderRadius: "40% 60% 55% 45% / 50% 45% 55% 50%",
                    overflow: "hidden",
                    zIndex: 1,
                  }}>
                    <img
                      src={HeroImage}
                      alt="Rita"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>

                </div>
              </div>
            </Fade>

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;