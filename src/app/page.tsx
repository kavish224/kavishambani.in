import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <Head>
        <title>Kavish Ambani - Developer</title>
        <meta
          name="description"
          content="Welcome to Kavish Ambani's personal website showcasing projects, blogs, and more."
        />
      </Head>
      <main className="p-6 max-w-3xl mx-auto bg-black min-h-screen text-white">
        {/* Hero Section */}
        <section className="text-center my-10">
          <h1 className="text-4xl font-bold mb-4">Hi, I&apos;m Kavish Ambani.</h1>
          <p className="text-xl text-gray-300 mb-6">Web Developer | Tech Enthusiast</p>
          <div className="space-x-4">
            <Link
              href="/portfolio"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              View My Portfolio
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
            >
              Contact Me
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold mb-4">
            <Link href="/about" className="underline text-blue-400 hover:text-blue-300">
              About Me
            </Link>
          </h2>
          <p className="text-gray-300 leading-relaxed">
            I am a passionate developer from Gujarat, India, with expertise in web development and a
            knack for creating impactful projects. I thrive on solving problems and building
            innovative solutions.
          </p>
        </section>

        {/* Social Links */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold mb-4">Connect with Me</h2>
          <div className="space-x-4">
            <a
              href="https://github.com/kavish224"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kavish-ambani"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
