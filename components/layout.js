import Head from "next/head";
import Image from "next/image";
import s from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Enzo Smith";
export const siteTitle = "Sample site NExtJS";

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

export default function Layout({ children, home }) {
  return (
    <>
      <ConditionalWrapper>
        <div className="container">
          <Head>
            <title>{siteTitle}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta
              name="description"
              content="Learn how to build a personal website using Next.js"
            />
            <meta
              property="og:image"
              content={`../public/images/profile.jpg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
          </Head>
          {/* header ended*/}
          {/* body start */}
          <header className={s.header}>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </header>
          <main>{children}</main>
          {home && (
            <footer>
              <div>
                <Link className="bottomlink" href="#">
                  You are on home, go to top.
                </Link>
              </div>
            </footer>
          )}
          {!home && (
            <div className="backToHome">
              <Link className="bottomlink" href="/">
                ← Back to home
              </Link>
            </div>
          )}
        </div>
      </ConditionalWrapper>
    </>
  );
}
