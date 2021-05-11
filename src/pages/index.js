import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'For Coders',
    imageUrl: 'img/CodingCogSmart.svg',
    description: (
      <>
        We have docs of information relating to GUIDs and fields that
        Volcanoids uses for you to base your code off of. There are also
        a full set of coding guides coming soon!
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
    imageUrl: 'img/CogArtistSmart.svg',
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
