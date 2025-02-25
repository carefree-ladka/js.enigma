import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import { annotate } from 'rough-notation';

import styles from './index.module.css';
import React from 'react';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  console.log(siteConfig);


  React.useEffect(() => {
    const e = document.querySelector<HTMLElement>('.hero__title');
    const annotation = annotate(e, { type: 'highlight',color:'yellow' });
    annotation.show();
  }, [])


  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title" >
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            JSEnigma Tutorial
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="JSEnigma, js, html5, css3, react">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
