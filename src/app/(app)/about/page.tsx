import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About Me - Kavish Ambani</title>
        <meta name="description" content="Learn more about Kavish Ambani, a passionate developer from Gujarat, India." />
      </Head>
      <main>
        <h1>About Me</h1>
        <p>I am Kavish Ambani, a web developer with expertise in React, Next.js, TypeScript. I enjoy building tools and platforms that make a difference.</p>
        <section>
          <h2>Skills</h2>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>TypeScript</li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default About;
