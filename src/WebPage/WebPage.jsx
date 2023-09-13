import "./WebPage.css";
import ProjectModal from "../Components/ProjectModal";
import { useEffect, useState } from "react";

export default function WebPage(props) {
  const [modalActive, setModalActive] = useState(false);
  const [project, setProject] = useState(1);
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");

  const descArr = [
    "This project was made during an internship at ACFC in Las Vegas, Nevada. It is a 3 page website made with HTML, CSS, and JavaScript. The page animations were made using the GSAP JavaScript animation library. It is hosted on Netlify and uses their built-in form handling in order to handle the Contact page form.",
    "This project was made during an internship at ACFC in Las Vegas, Nevada. Several key pages of this pre-existing website were visually updated using a combination of the WordPress page builder, Divi, and HTML with CSS. Recurring posts, such as sermons, were updated on a weekly basis.",
    "This project was made during an internship at ACFC in Las Vegas, Nevada. The home page design was worked closely with a supervisor, ensuring the design and content met the campaign vision.",
    "A 3 page portfolio for a digital and traditional artist. This page features their products, art, and social media links. ",
    "A 4 page website that features scripts made for the building design software, Revit. This project design was made following an example template given by the client. ",
    "This project was made following a course on responsiveness for desktop, tablet, and mobile devices. ",
  ];

  const overlay = document.getElementById(`overlay-${props.screen}`);
  const modal = document.getElementById(`${props.screen}-modal`);

  useEffect(() => {
    if (modalActive && overlay) {
      overlay.classList.remove("hide");
      modal.classList.remove("hide");
    } else if (overlay) {
      overlay.classList.add("hide");
      modal.classList.add("hide");
    }
  }, [modalActive]);

  return (
    <div className="webpage">
      <ProjectModal
        screen={props.screen}
        project={project}
        projectName={projectName}
        projectDesc={projectDesc}
        modalActive={modalActive}
        setModalActive={setModalActive}
      />
      <div
        id={`overlay-${props.screen}`}
        className="hide"
        onClick={() => {
          if (modalActive) {
            setModalActive(false);
          }
        }}
      ></div>
      <div className="">
        <h4 className="heading">Recent Works/Projects</h4>
        <div className="recent-works">
          {/* <a href="https://www.aguilascfc.org/en/"> */}
          <div>
            <div className="work-card">
              <img src="/Projects/Project1-1.png" />
              <div className="work-title">Venue Reservation</div>
              <div className="work-tags">
                <div className="work-tag html">HTML</div>
                <div className="work-tag css">CSS</div>
                <div className="work-tag javascript">JavaScript</div>
              </div>
            </div>
            <div
              className="view-project"
              onClick={() => {
                setModalActive(true);
                setProject(1);
                setProjectName("Venue Reservation");
                setProjectDesc(descArr[0]);
              }}
            >
              View Project
            </div>
          </div>
          <div>
            <div className="work-card">
              <img src="/Projects/Project2-1.png" />
              <div className="work-title">Church Website</div>
              <div className="work-tags">
                <div className="work-tag html">HTML</div>
                <div className="work-tag css">CSS</div>
                <div className="work-tag javascript">JavaScript</div>
                <div className="work-tag wordpress">Wordpress</div>
              </div>
            </div>
            <div
              className="view-project"
              onClick={() => {
                setModalActive(true);
                setProject(2);
                setProjectName("Church Website");
                setProjectDesc(descArr[1]);
              }}
            >
              View Project
            </div>
          </div>
          <div>
            <div className="work-card">
              <img src="/Projects/Project3-1.png" />
              <div className="work-title">Group Campaign</div>
              <div className="work-tags">
                <div className="work-tag html">HTML</div>
                <div className="work-tag css">CSS</div>
                <div className="work-tag javascript">JavaScript</div>
                <div className="work-tag wordpress">Wordpress</div>
              </div>
            </div>
            <div
              className="view-project"
              onClick={() => {
                setModalActive(true);
                setProject(3);
                setProjectName("Group Campaign");
                setProjectDesc(descArr[2]);
              }}
            >
              View Project
            </div>
          </div>
          <div>
            <div className="work-card">
              <img src="/Projects/Project4-1.png" />
              <div className="work-title">Artist Portfolio</div>
              <div className="work-tags">
                <div className="work-tag html">HTML</div>
                <div className="work-tag css">CSS</div>
                <div className="work-tag javascript">JavaScript</div>
              </div>
            </div>
            <div
              className="view-project"
              onClick={() => {
                setModalActive(true);
                setProject(4);
                setProjectName("Artist Portfolio");
                setProjectDesc(descArr[3]);
              }}
            >
              View Project
            </div>
          </div>
          <div>
            <div className="work-card">
              <img src="/Projects/Project5-1.png" />
              <div className="work-title">Online Scripts</div>
              <div className="work-tags">
                <div className="work-tag html">HTML</div>
                <div className="work-tag css">CSS</div>
                <div className="work-tag javascript">JavaScript</div>
              </div>
            </div>
            <div
              className="view-project"
              onClick={() => {
                setModalActive(true);
                setProject(5);
                setProjectName("Online Scripts");
                setProjectDesc(descArr[4]);
              }}
            >
              View Project
            </div>
          </div>
          <div>
            <div className="work-card">
              <img src="/Projects/Project6-1.png" />
              <div className="work-title">Course Project</div>
              <div className="work-tags">
                <div className="work-tag html">HTML</div>
                <div className="work-tag css">CSS</div>
                <div className="work-tag javascript">JavaScript</div>
              </div>
            </div>
            <div
              className="view-project"
              onClick={() => {
                setModalActive(true);
                setProject(6);
                setProjectName("Course Project");
                setProjectDesc(descArr[5]);
              }}
            >
              View Project
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
