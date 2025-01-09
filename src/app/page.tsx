import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <Head>
        <title>Kavish Ambani - Developer</title>
        <meta name="description" content="Welcome to Kavish Ambani's personal website showcasing projects, blogs, and more." />
      </Head>
      <main>
        <section>
          <h1>Hi, I&apos;m Kavish Ambani.</h1>
          <p>Web Developer | Tech Enthusiast</p>
          <div>
            <Link className='underline' href="/portfolio">View My Portfolio</Link>{"  "}
            <Link className='underline' href="/contact">Contact Me</Link>
          </div>
        </section>
        <section>
          <h2 className='underline'><Link href={"/about"}>About Me</Link></h2>
          <p>I am a passionate developer from Gujarat, India, with expertise in web development and a knack for creating impactful projects.</p>
        </section>
      </main>
    </>
  );
};

export default Home;