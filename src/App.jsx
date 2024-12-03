import React from "react";
import "./App.css";
import img1 from './assets/download.jpeg'
import img2 from './assets/download (1).jpeg'
import img3 from './assets/download (2).jpeg'
import img4 from './assets/download (3).jpeg'


const App = () => {
  return (
    <section className="section">
      <div className="div1"></div>
      <div className="div1 fade"></div>
      <div className="container sticky">
        <div className="top">
          <div className="head main">
            <h2
              className="heading"
              style={{
                transform:
                  "translate3d(0px,0px,0px) scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                opacity: 1,
              }}
            >
              Dive into the{" "}
              <span className="span">work.</span>
            </h2>
            <p
              className="para"
              style={{
                transform:
                  "translate3d(0px,20px,0px) scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                opacity: 1,
              }}
            >
              As creatives ourselves, we know that what you really want to see
              is the work we've actually put live. Here's a showcase of some of
              our recent projects, across a range of sectors.
            </p>
          </div>
        </div>

        <div className="bottom" >
          {[
            {
              image: img3,
              title: "Hacien",
              description:
                "HACIEN is a premium tequila brand supplying high-end hospitality and retail locations worldwide. They approached Phunk to undertake a comprehensive design project comprising web, packaging, and marketing assets as well as 3D renders of their signature bottles.",
              tags: [
                "Webflow Development",
                "UI/UX Design",
                "Webflow Training",
                "Graphic Design",
              ],
            },
            {
              image: img1,
              title: "Mobilleo",
              description:
                "Mobilleo is a SaaS solution making it easy for organisations to manage global business travel for their employees. The team at Mobilleo approached Phunk to provide a range of design and illustration services, building on their existing brand, for use across their website and app.",
              tags: [
                "Splash Screens",
                "Illustrations",
                "Graphic Design",
                "Lottie Animations",
                "Webflow Training",
              ],
            },
            {
              image:img2,
              title: "Mannson Freight",
              description:
                "Mannson Freight operates import and export consolidation services involving sea freight. They engaged Phunk to rebrand their corporate identity and develop a new higher-performance website, as well as a custom-built portal — MFS Pro— including ongoing support.",
              tags: [
                "Webflow Development",
                "UI/UX Design",
                "Webflow Training",
                "Graphic Design",
              ],
            },
            {
              image: img4,
              title: "BOX iQ",
              description:
                "BOXiQ Performance Center in Dubai is a globally recognized boxing gym — hosting icons like Tyson Fury and Oleksandr Usyk. Working with Phunk, they now have a high-quality digital presence to match the prestige of their brand.",
              tags: [
                "Webflow Development",
                "UI/UX Design",
                "Webflow Training",
                "Graphic Design",
              ],
            },
            {
              image: img1,
              title: "The Honest Watch Dealer",
              description:
                "The Honest Watch Dealer is a luxury watch expert renowned for his popular YouTube channel, as well as founding The Luxury Watch Company. Charlie (his real name) engaged Phunk to develop a brand identity for his channel, with applications across a range of merchandise.",
              tags: [
                "Webflow Development",
                "Visual Identity",
                "Packaging",
                "Apparel &; Merchandise",
              ],
            },
          ].map((project, index) => (
            <React.Fragment key={index}>
              <div
                className="bottom-image"
                style={{
                  willChange: "transform",
                  transform:
                    "translate3d(-55.06%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  src={project.image}
                  loading="lazy"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 43vw, 41vw"
                  alt={project.title}
                  className="sticky one"
                />
              </div>
              <div
                className="bottom-content"
                style={{
                  willChange: "transform",
                  transform:
                    "translate3d(-55.06%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="outer-list">
                  {project.tags.map((tag, tagIndex) => (
                    <div className="item" key={tagIndex}>
                      <div className="item-in">{tag}</div>
                    </div>
                  ))}
                </div>
                <h2 className="heading-style-h2 text-color-white">
                  {project.title}
                </h2>
                <p>{project.description}</p>
                <a href="#" className="link w-inline-block">
                  <div className="wrap">
                  <div className="see">See full case study</div>
                  <div className="icon w-embed">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0.5H8" stroke="white"></path>
                      <path d="M7.5 0V8" stroke="white"></path>
                      <path d="M7 1L0.5 7.5" stroke="white"></path>
                    </svg></div>
                  </div>
                </a>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
