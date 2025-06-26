import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About Me - Kavish Ambani</title>
        <meta
          name="description"
          content="Learn more about Kavish Ambani (kavishambani), a full-stack developer from Gujarat, India with experience in React, AWS, and cloud platforms."
        />
      </Head>
      <main className="p-6 max-w-3xl mx-auto text-white bg-black min-h-screen">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          I’m <strong>Kavish Ambani</strong>. I’m a final-year B.Tech Computer Science student at Parul University, Gujarat. I'm passionate about building robust and scalable full-stack applications that solve real-world problems.
        </p>
        <p className="text-gray-400 leading-relaxed mb-6">
          With hands-on experience in technologies like <strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, <strong>Firebase</strong>, <strong>Docker</strong>, and <strong>AWS</strong>, I specialize in developing high-performance apps with a focus on user experience, cloud deployment, and scalability.
        </p>
        <p className="text-gray-400 leading-relaxed mb-6">
          I’ve built end-to-end platforms such as <a href="https://tools.kavishambani.in/" className="text-blue-400 underline" target="_blank" rel="noreferrer">Financial Tools</a>, <a href="https://juro-ai.vercel.app/" className="text-blue-400 underline" target="_blank" rel="noreferrer">Juro AI</a>, and <a href="https://videotube.kavishambani.in/" className="text-blue-400 underline" target="_blank" rel="noreferrer">VideoTube</a>. These projects reflect my interest in both frontend and backend development, as well as cloud infrastructure and DevOps.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Skills & Technologies</h2>
          <ul className="grid grid-cols-2 gap-2 text-gray-300 list-disc list-inside">
            <li>React / Next.js</li>
            <li>TypeScript / JavaScript</li>
            <li>Node.js / Express.js</li>
            <li>PostgreSQL / MongoDB</li>
            <li>Firebase / Prisma</li>
            <li>AWS / Docker / DevOps</li>
            <li>C++ / Python</li>
            <li>Data Structures & Algorithms</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <p className="text-gray-400">
            <strong>Parul University</strong> — B.Tech in Computer Science (2022–2026)
          </p>
        </section>
      </main>
    </>
  );
};

export default About;
