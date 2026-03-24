import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const features = [
  {
    title: 'Value Is Assigned, Not Inherent',
    description:
      'Students discover that value comes from agreement and context — a dollar is worth something because we all agree it is.',
  },
  {
    title: 'Money Flows Like Data',
    description:
      'Students trace how money moves through systems — from cash to digital wallets — and how friction shapes spending behavior.',
  },
  {
    title: 'Every Choice Has a Trade-Off',
    description:
      'Students learn opportunity costs: spending here means you cannot spend there. Budgeting is error handling for life.',
  },
  {
    title: 'Systems Shape Outcomes',
    description:
      'Students explore how banks, interest, and inflation create the macro machinery that affects every dollar in circulation.',
  },
  {
    title: 'Creation Beats Consumption',
    description:
      'Students move from understanding money to creating value — identifying problems and designing solutions through entrepreneurship.',
  },
];

const roadmapSections = [
  {
    title: 'Value Foundations',
    weeks: 'Weeks 1\u20134',
    description:
      'Understanding value, trade and barter, why money exists, and the household economy',
  },
  {
    title: 'The Flow of Resources',
    weeks: 'Weeks 5\u20138',
    description:
      'How money moves, ways we pay, digital money, and friction and spending',
  },
  {
    title: 'Strategy & Planning',
    weeks: 'Weeks 9\u201311',
    description:
      'Resource allocation and risk: budgeting, opportunity costs, and emergency funds',
  },
  {
    title: 'Economic Systems',
    weeks: 'Weeks 12\u201314',
    description:
      'Banking, interest, and macro mechanics: how the financial hardware works',
  },
  {
    title: 'The Value Creation Project',
    weeks: 'Weeks 15\u201318',
    description:
      'Entrepreneurship capstone: identify a problem, design a solution, manage a budget, and present',
  },
];

function FeatureCard({title, description}) {
  return (
    <article className={styles.card}>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </article>
  );
}

function RoadmapCard({title, weeks, description}) {
  return (
    <article className={styles.roadmapCard}>
      <p className={styles.eyebrow}>{weeks}</p>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </article>
  );
}

export default function HomepageFeatures() {
  const roadmapImageUrl = useBaseUrl('/img/roadmap.png');

  return (
    <div className={styles.pageSections}>
      <section className={styles.section}>
        <div className="container">
          <Heading as="h2">Introduction</Heading>
          <p className={styles.sectionLead}>
            Financial Literacy for Kids is designed to help educators and families move beyond
            basic money awareness and into deeper understanding. Students learn how money works,
            how financial decisions affect their lives, and how to think critically about
            earning, saving, spending, and sharing. The lessons push students
            to analyze, evaluate, and create as they move through the course.
          </p>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <Heading as="h2">Core Concepts</Heading>
          <p className={styles.sectionLead}>
            The curriculum is organized around a set of core concepts that help students understand
            money and financial systems in practical, durable ways.
          </p>
          <div className={styles.cardGrid}>
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <Heading as="h2">Curriculum Roadmap</Heading>
          <p className={styles.sectionLead}>
            The learning progression moves from foundational value mechanics through
            digital money systems, strategic budgeting, economic systems, and into a
            capstone entrepreneurship project.
          </p>
          <div className={styles.roadmapVisual}>
            <img
              className={styles.roadmapImage}
              src={roadmapImageUrl}
              alt="Visual roadmap showing the Financial Literacy for Kids curriculum sequence"
            />
          </div>
          <div className={styles.roadmapGrid}>
            {roadmapSections.map((section) => (
              <RoadmapCard key={section.title} {...section} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className="container">
          <Heading as="h2">Start Teaching Financial Literacy</Heading>
          <p className={styles.sectionLead}>
            Begin with Week 1 and give students a clearer understanding of how money,
            saving, spending, and financial systems actually work.
          </p>
          <div className={styles.ctaButtons}>
            <Link className="button button--primary button--lg" to="/docs/week1">
              Begin Week 1
            </Link>
          </div>
          <p className={styles.feedbackPrompt}>
            Found a mistake or have a suggestion?{' '}
            <Link to="https://github.com/zcohen-nerd/financial_literacy_for_kids/issues">
              Open an issue on GitHub.
            </Link>
          </p>
          <div className={styles.versionNote}>
            <p className={styles.versionLabel}>Version 1.0</p>
            <p>
              This curriculum is an open project and will continue to improve as
              teachers and families use it.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}