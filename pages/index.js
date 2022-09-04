import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Comunicadora social devenida software crafter. Spanglish speaker.</p>
          <p>
            Podés encontrarme en
            <a href="https://twitter.com/menosbel"> Twitter</a>.
          </p>
        </section>
      </Layout>
  );
}
