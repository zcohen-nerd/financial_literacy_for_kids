import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const heroImageUrl = useBaseUrl('/img/hero-image.png');
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContent)}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Free and open educational curriculum</p>
          <h1 className="hero__title">Financial Literacy for Kids</h1>
          <p className="hero__subtitle">
            A free, open curriculum that teaches kids how money actually works.
          </p>
          <p className={styles.heroLead}>
            Many children grow up without understanding how money, saving, spending,
            and financial systems actually work. This curriculum teaches those ideas
            through hands-on activities that help students explore, question, and
            make smart financial decisions.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/week1">
              Start the Curriculum
            </Link>
            <Link
              className="button button--outline button--lg"
              to="https://github.com/zcohen-nerd/financial_literacy_for_kids">
              View on GitHub
            </Link>
          </div>
        </div>
        <div className={styles.heroMedia}>
          <img
            className={styles.heroImage}
            src={heroImageUrl}
            alt="Illustrated hero image for the financial literacy curriculum"
          />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Welcome"
      description="A professional curriculum website for teaching kids how money and financial systems actually work.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}