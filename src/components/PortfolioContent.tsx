import "./PortfolioContent.css";
import WorkHistory from "./WorkHistory";

interface PortfolioContentProps {
  darkMode?: boolean;
  exposeSectionIds?: boolean;
}

const currentYear = new Date().getFullYear();

export default function PortfolioContent({
  darkMode = false,
  exposeSectionIds = true,
}: PortfolioContentProps) {
  return (
    <div className={`page-wrapper${darkMode ? " dark-mode" : ""}`}>
      <main className="page-content">
        <aside className="sidebar">
          <a className="wordmark" href="/">
            <span>Angus Lam</span>
            <span>Software Development</span>
          </a>
          <nav className="sidebar-nav" aria-label="Primary">
            <a href="#specialties">Areas of specialties</a>
            <a href="#experience">Work experience</a>
            <a href="#education">Education</a>
            <a href="#technical-skills">Technical skills</a>
            <a href="#projects">Side projects</a>
            <a href="#contact">Contact me</a>
          </nav>
          <div className="sidebar-footer">
            <div className="sidebar-links">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com/in/angushtlam"
              >
                LinkedIn ↗︎
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://angushtlam.substack.com"
              >
                Substack ↗︎
              </a>
            </div>
          </div>
        </aside>

        <div className="content-column">
          <div className="mobile-wordmark">
            <a href="/">Angus Lam Software Development</a>
          </div>
          <header className="intro">
            <p className="eyebrow">Senior software engineer from New York</p>
            <h1>
              I build secure and compliant users-first software products for
              globally ambitious companies.
            </h1>
            <div className="intro-footer">
              <p>
                Over a decade of building scalable, user-facing full-stack
                applications across cybersecurity, privacy, data protection, and
                product domains.
              </p>
              <p>
                Currently at{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://stripe.com"
                >
                  Stripe ↗︎
                </a>
                , working on security and privacy for merchants and consumers.
              </p>
            </div>
          </header>

          <nav className="mobile-index" aria-label="Page sections">
            <a href="#specialties">Areas of specialties</a>
            <a href="#experience">Work experience</a>
            <a href="#education">Education</a>
            <a href="#technical-skills">Technical skills</a>
            <a href="#projects">Side projects</a>
            <a href="#contact">Contact me</a>
          </nav>

          <section
            className="section specialties"
            id={exposeSectionIds ? "specialties" : undefined}
          >
            <div className="section-heading">
              <p className="eyebrow">Areas of specialty</p>
              <h2>Full stack engineering meets product judgment.</h2>
            </div>

            <article className="feature">
              <div>
                <h3>Cybersecurity</h3>
                <div className="feature-grid">
                  <div>
                    <h4>Software dependency supply chain risk monitoring</h4>
                    <p>
                      Built AI agents that monitor third party integrations
                      across Stripe's codebase through continuous integration.
                      Created data pipelines that give security leadership
                      queryable insight into risk exposure.
                    </p>
                  </div>
                  <div>
                    <h4>Authentication at global scale</h4>
                    <p>
                      Reduced cross-region dashboard latency by 500ms for
                      millions of daily requests. Wrote the first
                      service-oriented API key authentication implementation for
                      Stripe's multi-language stack.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article className="feature">
              <div>
                <h3>Privacy & data protection</h3>
                <div className="feature-grid">
                  <div>
                    <h4>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://docs.stripe.com/privacy/redaction"
                      >
                        Redaction API ↗︎
                      </a>
                    </h4>
                    <p>
                      A programmable tool for businesses managing retention
                      requirements across KYC, tax, and consumer privacy
                      regulations in multiple jurisdictions.
                    </p>
                  </div>
                  <div>
                    <h4>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://privacy.stripe.com/"
                      >
                        Privacy Portal ↗︎
                      </a>
                    </h4>
                    <p>
                      Automated self-serve tools for consumers to access or
                      delete their data across Stripe's decentralized,
                      multi-product user model.
                    </p>
                  </div>
                  <div>
                    <h4>Privacy-first growth</h4>
                    <p>
                      Implemented consent systems for web and asynchronous first
                      party data, enabling a multimillion-dollar paid media
                      funnel while respecting visitor choices.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article className="feature">
              <div>
                <h3>Cross-functional collaboration</h3>
                <div className="feature-grid">
                  <div>
                    <h4>Regulation into systems</h4>
                    <p>
                      Partner with business leads and lawyers to translate GDPR,
                      CCPA, ePrivacy, data locality, and localization
                      requirements into technical systems that unblock growth
                      and market access.
                    </p>
                  </div>
                  <div>
                    <h4>UI/UX direction</h4>
                    <p>
                      Shape visual products with designers and create Figma
                      dashboard and workflow prototypes when projects are
                      unstaffed, accelerating frontend delivery by months.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </section>

          <WorkHistory exposeSectionIds={exposeSectionIds} />

          <section
            className="section education"
            id={exposeSectionIds ? "education" : undefined}
          >
            <div className="section-heading">
              <p className="eyebrow">Education</p>
              <h2>
                Two degrees. Computer science and linguistics with a
                computational focus.
              </h2>
            </div>
            <div className="education-grid">
              <div className="school">
                <p>University at Buffalo, 2019</p>
                <a
                  className="profile-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.buffalo.edu/ubit/about.host.html/content/shared/www/ubit/public/modules/faces-and-voices/angus-lam.detail.html"
                >
                  Profile ↗︎
                </a>
              </div>
              <div className="degree-list">
                <p>
                  <strong>Computer Science B.S.</strong>
                  <br />
                  GPA 3.637 · magna cum laude
                </p>
                <p>
                  <strong>Linguistics B.A.</strong>
                  <br />
                  Language, Society & Communication · GPA 3.89
                </p>
              </div>
            </div>
          </section>

          <section
            className="section skills"
            id={exposeSectionIds ? "technical-skills" : undefined}
          >
            <div className="section-heading">
              <p className="eyebrow">Technical skills</p>
              <h2>Full-stack engineering from interface to infrastructure.</h2>
            </div>
            <div className="skills-grid">
              <article>
                <h3>Software</h3>
                <p>Python, Java, Ruby, JavaScript, HTML, CSS, React</p>
              </article>
              <article>
                <h3>Infrastructure</h3>
                <p>AWS, Lambda, S3, EC2, SQL, Spark, Kafka, RabbitMQ</p>
              </article>
              <article>
                <h3>Artificial intelligence</h3>
                <p>
                  Production LLM systems, auditable agents, MCP, skills, and
                  harness engineering
                </p>
              </article>
              <article>
                <h3>Product leadership</h3>
                <p>
                  Project direction, user research, staffing, measurement, and
                  data-driven prioritization
                </p>
              </article>
            </div>
          </section>

          <section
            className="section projects"
            id={exposeSectionIds ? "projects" : undefined}
          >
            <div className="section-heading">
              <p className="eyebrow">Side projects</p>
              <h2>Collection of select self-published software.</h2>
            </div>
            <div className="project-list">
              <article>
                <h3>
                  <a
                    href="https://moodboring.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Moodboring ↗︎
                  </a>
                </h3>
                <p>
                  An online photo editor for making eclectic social mood boards.
                </p>
              </article>
              <article>
                <h3>
                  <a
                    href="https://github.com/angushtlam/cookiedip"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cookiedip ↗︎
                  </a>
                </h3>
                <p>
                  Open source cookie identification inspired by tools used by
                  privacy regulators.
                </p>
              </article>
              <article>
                <h3>
                  Trainster <span className="tag-coming-soon">Coming soon</span>
                </h3>
                <p>Mobile Flighty-style tracker for train travel</p>
              </article>
            </div>
          </section>

          <section
            className="contact"
            id={exposeSectionIds ? "contact" : undefined}
          >
            <p className="eyebrow">Let's make something groundbreaking</p>
            <h2>
              Reach out to collaborate on ambitious software and creative
              technology projects.
            </h2>
            <div className="contact-links">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com/in/angushtlam"
              >
                LinkedIn ↗︎
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://angushtlam.substack.com"
              >
                Substack ↗︎
              </a>
            </div>
            <div className="footer">
              <p>© 2017 - {currentYear} Angus Lam</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
