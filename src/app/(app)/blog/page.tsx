import Head from 'next/head';
import Link from 'next/link';

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog - Kavish Ambani</title>
        <meta name="description" content="Read blogs by Kavish Ambani on web development and technology." />
      </Head>
      <main>
        <h1>Blog</h1>
        <article>
          <h2>How I Built My Stock Analytics Platform</h2>
          <p>A detailed guide on building a stock analytics tool using Next.js and Flask.</p>
          <Link href="/blog/stock-analytics">Read More</Link>
        </article>
      </main>
    </>
  );
};

export default Blog;
