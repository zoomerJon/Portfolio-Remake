import "./WebPage.css";

export default function WebPage() {
  return (
    <div className="webpage">
      <div className="">
        <h4 className="heading">Recent Works/Projects</h4>
        <div className="recent-works">
          <a href="https://www.aguilascfc.org/">
            <div className="work-card">
              <img src="/acfc-demo.png" />
              <div className="work-title">Megachurch Website</div>
              <div className="work-tags">
                <div className="work-tag html">HTML</div>
                <div className="work-tag css">CSS</div>
                <div className="work-tag javascript">JavaScript</div>
                <div className="work-tag wordpress">Wordpress</div>
              </div>
            </div>
          </a>
          <div className="work-card">
            <img src="/old-portfolio-demo.png" />
            <div className="work-title">Previous Portfolio</div>
            <div className="work-tags">
              <div className="work-tag react">React</div>
              <div className="work-tag threejs">ThreeJS</div>
              <div className="work-tag javascript">JavaScript</div>
              <div className="work-tag html">HTML</div>
            </div>
          </div>
          <div className="work-card">
            <img src="/groupsearch-webapp-demo.png" />
            <div className="work-title">Group Search Web App</div>
            <div className="work-tags">
              <div className="work-tag react">React</div>
              <div className="work-tag javascript">JavaScript</div>
              <div className="work-tag express">Express</div>
              <div className="work-tag html">HTML</div>
            </div>
          </div>
          <div className="work-card">
            <img src="/airbnb-clone-demo.png" />
            <div className="work-title">Airbnb Clone</div>
            <div className="work-tags">
              <div className="work-tag react">React</div>
              <div className="work-tag javascript">JavaScript</div>
              <div className="work-tag redux">Redux</div>
            </div>
          </div>
          <div className="work-card">
            <img src="/movie-router-demo.png" />
            <div className="work-title">React Movie Router</div>
            <div className="work-tags">
              <div className="work-tag react">React</div>
              <div className="work-tag javascript">JavaScript</div>
              <div className="work-tag css">CSS</div>
            </div>
          </div>
          <a href="https://cheerful-empanada-e83c29.netlify.app/">
            <div className="work-card donuts">
              <img className="donut" src="/donut-shop.png" />
              <div className="donuts-background">
                <div className="work-title">Donut Store</div>
                <div className="work-tags">
                  <div className="work-tag react">React</div>
                  <div className="work-tag javascript">JavaScript</div>
                  <div className="work-tag css">CSS</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
