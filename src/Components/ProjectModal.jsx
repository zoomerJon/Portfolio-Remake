import { useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

export default function ProjectModal(props) {
  let slideIndex = 1;
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  useEffect(() => {
    if (document.getElementsByClassName("mySlides").length > 3) {
      showSlides(slideIndex);
    }
  }, [props.modalActive]);

  // Next/previous controls
  const plusSlides = (n) => {
    showSlides((slideIndex += n));
  };

  // Thumbnail image controls
  const currentSlide = (n) => {
    showSlides((slideIndex = n));
  };

  const showSlides = (n) => {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length - 2; i++) {
      slides[i + 2].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex + 2].style.display = "block";
    dots[slideIndex + 2].className += " active";
  };
  return (
    <div id={`${props.screen}-modal`} className="modal hide">
      <div className="close">
        <AiFillCloseCircle
          onClick={() => {
            props.setModalActive(false);
          }}
        />
      </div>
      <div>
        <div className="project-title">{props.projectName}</div>
        <div>
          <div className="slideshow-container">
            <div className="mySlides fade">
              <div className="numbertext">1 / 3</div>
              <img src={`/Projects/Project${props.project}-1.png`} />
              <div className="text">Caption Text</div>
            </div>

            <div className="mySlides fade">
              <div className="numbertext">2 / 3</div>
              <img src={`/Projects/Project${props.project}-2.png`} />
              <div className="text">Caption Two</div>
            </div>

            <div className="mySlides fade">
              <div className="numbertext">3 / 3</div>
              <img src={`/Projects/Project${props.project}-3.png`} />
              <div className="text">Caption Three</div>
            </div>

            <a
              className="prev"
              onClick={() => {
                if (slideIndex == 1) {
                  plusSlides(2);
                } else {
                  plusSlides(-1);
                }
              }}
            >
              &#10094;
            </a>
            <a
              className="next"
              onClick={() => {
                if (slideIndex == 3) {
                  plusSlides(-2);
                } else {
                  plusSlides(1);
                }
              }}
            >
              &#10095;
            </a>
          </div>
          <br />

          <div className="dots-container">
            <span
              className="dot"
              onClick={() => {
                console.log(dots);
                currentSlide(1);
              }}
              //   onclick="currentSlide(1)"
            ></span>
            <span
              className="dot"
              onClick={() => {
                currentSlide(2);
              }}
              //   onclick="currentSlide(2)"
            ></span>
            <span
              className="dot"
              onClick={() => {
                currentSlide(3);
              }}
              //   onclick="currentSlide(3)"
            ></span>
          </div>
        </div>
      </div>
      <div>
        <div className="project-title">About</div>
        <div className="project-description">{props.projectDesc}</div>
        <div style={{ textAlign: "center", padding: ".5rem 0" }}>Languages</div>
        <div className="work-tags">
          <div className="work-tag html">HTML</div>
          <div className="work-tag css">CSS</div>
          <div className="work-tag javascript">JavaScript</div>
        </div>
      </div>
    </div>
  );
}
