import React from "react"
import { Link } from "gatsby"

const Middle = () => {
  return (
    <main>
      {/*Hero section*/}
      <section className="py-72">
        <div className="hero grid-40-60">
          <div className="description">
            <h1 className="title">
              Getting started with the <span>MojoAuth</span>
            </h1>
            <div className="subtitle">
              {/* //eslint-disable-next-line @jsx-a11y/label-has-associated-control */}
              <span>Objective</span>
              <p>
                Create a passwordless authentication system for any
                organization, where they can use our APIs to provide seamless
                auth experiences and reduce security risks for their customer.
              </p>
              <div className="d-flex">
                <a
                  style={{ marginRight: "20px" }}
                  href="https://codesandbox.io/s/friendly-elion-56smy?file=/index.html"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Try Out Now
                </a>
                <a
                  href="https://mojoauth.com/docs/api/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  API References
                  <svg
                    id="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                  >
                    <polygon points="10 6 10 8 22.59 8 6 24.59 7.41 26 24 9.41 24 22 26 22 26 6 10 6"></polygon>
                    <rect
                      id="_Transparent_Rectangle_"
                      data-name="<Transparent Rectangle>"
                      fill="none"
                      width="32"
                      height="32"
                    ></rect>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="vector">
            <img alt="" src="images/hero-vector.svg" />
          </div>
        </div>
      </section>
      {/*Hero section*/}
      <section id="integrations" className="application-guide py-72">
        <div className="section-header">
          <h2>Application Guides</h2>
        </div>
        <div className="grid-25">
          <div className="card">
            <div className="icon yellow">
              <img alt="" src="images/sso.svg" />
            </div>
            <h3 className="title">Single Page App</h3>
            <ul>
              <li>
                <Link to="/guides/html-and-js/">
                  <img alt="" src="images/html5.svg" width={20} />
                  <span>HTML and JS</span>
                </Link>
              </li>
              <li>
                <Link to="/guides/react/">
                  <img alt="" src="images/react.png" width={20} />
                  <span>React App</span>
                </Link>
              </li>
              <li>
                <Link to="/guides/nextjs/">
                  <img alt="" src="images/next-js.svg" width={20} />
                  <span>Next JS App</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="icon pink">
              <img alt="" src="images/web-apps.svg" />
            </div>
            <h3 className="title">Web Apps</h3>
            <ul>
              <li>
                <Link to="/guides/nodejs/">
                  <img alt="" src="images/node-dot-js.svg" width={20} />
                  <span>NodeJS</span>
                </Link>
              </li>
              <li>
                <Link to="/guides/golang/">
                  <img alt="" src="images/go.svg" width={20} />
                  <span>Golang</span>
                </Link>
              </li>
              <li>
                <Link to="/guides/java/">
                  <img alt="" src="images/java.png" width={20} />
                  <span>JAVA</span>
                </Link>
              </li>
              <li>
                <Link to="/guides/php/">
                  <img alt="" src="images/php.svg" width={20} />
                  <span>PHP</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="icon blue">
              <img alt="" src="images/mobile-app.svg" />
            </div>
            <h3 className="title">Mobile Apps</h3>
            <ul>
              <li>
                <Link to="/sdks/android/">
                  <img alt="" src="images/android.svg" width={20} />
                  <span>Android</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="icon pink">
              <img alt="" src="images/cms-app.svg" />
            </div>
            <h3 className="title">Integrations</h3>
            <ul>
              <li>
                <Link to="/integrations/bubble/">
                  <img alt="" src="images/bubble.png" width={20} />
                  <span>Bubble.io</span>
                </Link>
              </li>
              <li>
                <Link to="/integrations/webflow/">
                  <img alt="" src="images/webflow.png" width={20} />
                  <span>Webflow</span>
                </Link>
              </li>
              <li>
                <Link to="/integrations/wordpress/">
                  <img alt="" src="images/wordpress.png" width={20} />
                  <span>Wordpress</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Application Guides Section */}
      {/* Resources Section */}
      <section className="resources py-72">
        <div className="section-header">
          <h2>Comprehensive Resources</h2>
        </div>
        <div className="grid-50">
          <div className="card">
            <div className="icon pink-big">
              <img alt="" src="images/other-resources.svg" />
            </div>
            <h3 className="title">How To</h3>
            <ul>
              <li>
                <Link to="/howto/handle-jwt-token/">
                  <img alt="" src="images/access-token.png" width={20} />
                  <span>Handle MojoAuth Token</span>
                </Link>
              </li>
              <li>
                <Link to="/howto/integrate-mailazy/">
                  <img alt="" src="images/mailazy.svg" width={20} />
                  <span>Integrate Mailazy</span>
                </Link>
              </li>
              <li>
                <Link to="/howto/social-login/">
                  <img alt="" src="images/social-login.svg" width={20} />
                  <span>Configure Social Login</span>
                </Link>
              </li>
              <li>
                <Link to="/howto/add-sms-authentication/">
                  <img alt="" src="images/phone-otp.svg" width={20} />
                  <span>Configure SMS Authentication</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="icon blue-big">
              <img alt="" src="images/configuration.svg" />
            </div>
            <h3 className="title">Configuration & Branding Personalization</h3>
            {/* <p>
              Lorem Ipsum is simply dummy text of the printing and type
              setting industry.
              </p> */}
            {/* <div className="tag">Coming Soon</div> */}
            <ul>
              <li>
                <Link to="/configurations/localization/">
                  <img alt="" src="images/localization.png" width={20} />
                  <span>Localization</span>
                </Link>
              </li>
              <li>
                <Link to="/configurations/redirection/">
                  <img alt="" src="images/redirection.png" width={20} />
                  <span>Custom Redirection</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* SDK References Section */}
      <section id="libraries" className="sdk py-72">
        <div className="section-header">
          <h2>SDK References</h2>
        </div>
        <div className="grid-25">
          <div className="card">
            <Link to="/sdks/nodejs/">
              <div className="icon">
                <img alt="" src="images/node-dot-js.svg" />
              </div>
              <h3 className="title">NodeJS</h3>
            </Link>
          </div>
          <div className="card">
            <Link to="/sdks/golang/">
              <div className="icon">
                <img alt="" src="images/go.svg" />
              </div>
              <h3 className="title">
                <span>Golang</span>
              </h3>
            </Link>
          </div>
          <div className="card">
            <Link to="/sdks/java/">
              <div className="icon">
                <img alt="" src="images/java.svg" />
              </div>
              <h3 className="title">Java</h3>
            </Link>
          </div>
          <div className="card">
            <Link to="/sdks/android/">
              <div className="icon">
                <img alt="" src="images/android.svg" />
              </div>
              <h3 className="title">
                <span>Android</span>
              </h3>
            </Link>
          </div>
          <div className="card">
            <Link to="/sdks/php/">
              <div className="icon">
                <img alt="" src="images/php.svg" />
              </div>
              <h3 className="title">
                <span>PHP</span>
              </h3>
            </Link>
          </div>

          <div className="card">
            <Link to="/sdks/asp-dot-net/">
              <div className="icon">
                <img alt="" src="images/visualstudio.svg" />
              </div>
              {/* <div className="tag">Coming Soon</div> */}
              <h3 className="title">
                <span>Asp.net</span>
              </h3>
            </Link>
          </div>

          <div className="card">
            <div className="icon">
              <img alt="" src="images/python.svg" />
            </div>
            <div className="tag">Coming Soon</div>
            <h3 className="title">Python</h3>
          </div>

          <div className="card">
            <div className="icon">
              <img alt="" src="images/ruby.svg" />
            </div>
            <div className="tag">Coming Soon</div>
            <h3 className="title">Ruby</h3>
          </div>
          <div className="card">
            <div className="icon">
              <img alt="" src="images/ios.svg" />
            </div>
            <div className="tag">Coming Soon</div>
            <h3 className="title">IOS</h3>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Middle
