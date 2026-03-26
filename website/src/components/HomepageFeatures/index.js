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

const literacyLinks = [
  {
    label: 'Decision Literacy',
    icon: '🧠',
    href: 'https://zcohen-nerd.github.io/decision_literacy_for_kids/',
    description:
      'How to think clearly, evaluate choices, and understand consequences.',
  },
  {
    label: 'Computer Literacy',
    icon: '💻',
    href: 'https://zcohen-nerd.github.io/computer_literacy_for_kids/',
    description:
      'How computers work and how to use them responsibly.',
  },
  {
    label: 'Media Literacy',
    icon: '📰',
    href: 'https://zcohen-nerd.github.io/media_literacy_for_kids/',
    description:
      'How to evaluate information and recognize bias.',
  },
  {
    label: 'Financial Literacy',
    icon: '💰',
    href: 'https://zcohen-nerd.github.io/financial_literacy_for_kids/',
    isCurrent: true,
    description:
      'How money works and how to make responsible financial decisions.',
  },
  {
    label: 'Civic Literacy',
    icon: '🏛',
    href: 'https://zcohen-nerd.github.io/civic_literacy_for_kids/',
    description:
      'How societies organize themselves and how citizens shape their communities.',
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

function LiteracyCard({label, icon, href, description, isCurrent}) {
  return (
    <article className={styles.card}>
      <Heading as="h3">
        <Link href={href} className={styles.literacyLink}>
          <span className={styles.literacyIcon} aria-hidden="true">
            {icon}
          </span>{' '}
          {label}
        </Link>
        {isCurrent && <span className={styles.currentBadge}>Current curriculum</span>}
      </Heading>
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
            Financial Literacy for Kids is an 18-week curriculum for ages 8–12, built for
            classroom teachers, homeschool families, caregivers, and after-school leaders.
            Each week includes three sessions of about 20 minutes each. Students move beyond
            basic money awareness into real understanding — learning how financial systems
            work, how to make thoughtful decisions, and how to create value for others.
          </p>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <Heading as="h2">Part of the Literacy for Kids Project</Heading>
          <p className={styles.sectionLead}>
            This curriculum is part of Literacy for Kids, a collection of open-source
            curricula designed to help children ages 8–12 understand the systems that
            shape the modern world.
          </p>
          <p className={styles.sectionLead}>
            Each curriculum focuses on a different foundational life skill. You can
            explore the full curriculum collection through the{' '}
            <Link href="https://zcohen-nerd.github.io/literacy_for_kids/">
              Literacy for Kids Hub
            </Link>
            .
          </p>
          <div className={styles.callout}>
            <Heading as="h3">Explore the other literacies</Heading>
            <div className={styles.cardGrid}>
              {literacyLinks.map((literacy) => (
                <LiteracyCard key={literacy.label} {...literacy} />
              ))}
            </div>
          </div>
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
            Begin with the Welcome page for an overview, then jump into Week 1.
            Each session is about 20 minutes — designed for ages 8–12.
          </p>
          <div className={styles.ctaButtons}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Get Started
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
