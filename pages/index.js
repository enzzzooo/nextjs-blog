import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import s from "../styles/index.module.css";
import ferrari from "../public/images/ferrari.jpg";
import bugatti from "../public/images/bugatti.jpg";
import Picture from "../components/picture";
import Link from "next/link";
import Date from "../components/date";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p className={`description ${s.header}`}>Welcome to my website</p>
        <Link href="/about">About/testing</Link>
        {/* goal: chaning image and caption for specfic instance of picture template: nice*/}
        <Picture
          caption="Do you like this ferrari?"
          src={ferrari}
          alt="ferrari"
        />
        <Picture caption="Or this, ferrari" src={bugatti} alt="bugatti" />
      </section>
      {/* posts data */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
