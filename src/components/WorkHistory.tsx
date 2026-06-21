import "./WorkHistory.css";

interface WorkHistoryProps {
  exposeSectionIds?: boolean;
}

export default function WorkHistory({
  exposeSectionIds = true,
}: WorkHistoryProps) {
  return (
    <section
      className="section history"
      id={exposeSectionIds ? "experience" : undefined}
    >
      <div className="section-heading">
        <p className="eyebrow">Work history</p>
        <h2>Enterprises, startups, and one man shows.</h2>
      </div>

      <div className="timeline">
        <article>
          <p className="date">2019—2026</p>
          <h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://stripe.com"
            >
              Stripe ↗︎
            </a>
          </h3>
          <p>Software Engineer</p>
          <p className="meta">San Francisco · New York · Remote</p>
        </article>
        <article>
          <p className="date">2019</p>
          <h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://lugg.com"
            >
              Lugg ↗︎
            </a>
          </h3>
          <p>Software Engineer</p>
          <p className="meta">New York · Remote</p>
        </article>
        <article>
          <p className="date">2018</p>
          <div className="experience">
            <h3>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://stripe.com"
              >
                Stripe ↗︎
              </a>
            </h3>
            <p>Software Engineer Intern</p>
            <p className="meta">San Francisco</p>
            <a
              className="blog-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://angushtlam.substack.com/p/my-stripe-internship-2018"
            >
              Internship project ↗︎
            </a>
          </div>
        </article>
        <article>
          <p className="date">2017</p>
          <div className="experience">
            <h3>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://optimizely.com"
              >
                Optimizely ↗︎
              </a>
            </h3>
            <p>Software Engineer Intern</p>
            <p className="meta">San Francisco</p>
            <a
              className="blog-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://angushtlam.substack.com/p/my-internship-project-at-optimizely"
            >
              Internship project ↗︎
            </a>
          </div>
        </article>
        <article>
          <p className="date">2017—2018</p>
          <h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://pitchpivot.com"
            >
              Pitch + Pivot ↗︎
            </a>
          </h3>
          <p>Software Engineer</p>
          <p className="meta">Buffalo · Remote</p>
        </article>
        <article>
          <p className="date">2012—2016</p>
          <h3>Independent</h3>
          <p>Game Developer</p>
          <p className="meta">New York · Remote</p>
        </article>
      </div>
    </section>
  );
}
