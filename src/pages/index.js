import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'For Everyone',
    imageUrl: 'img/undraw_source.svg',
    description: (
      <>
        We have a whole new set of docs built for our
        new Unity Modding SDK, there is some amazing stuff
        anyone can do by following these guides, even if you
        can't program or design, You'll be good to go here!
      </>
    ),
  },
  {
    title: 'Who made This',
    imageUrl: 'img/Combined.png',
    description: (
      <>
        This combined Wiki of Modding Resources and tools were made by
        the efforts of the 3 guys above! Top Left is our Coding Expert
        Greg, Top Right is our Modeling Expert RedDolphin, and the Bottom 
        is Me, Alex, Who does a lot of the Implementation of Code and Models.
      </>
    ),
  },
  {
    title: 'For Designers',
    imageUrl: 'img/undraw_sculpting.svg',
    description: (
      <>
        RedDolphin has written some amazing guides for designing that will come soon
        but for our designers we have ways to retexture anything or change the models
        of even one part of a module or the drillship so you can design to your hearts
        content!
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The Wiki for Developing Volcanoids Mods">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
