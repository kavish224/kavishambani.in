import Head from 'next/head';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact - Kavish Ambani</title>
        <meta name="description" content="Get in touch with Kavish Ambani." />
      </Head>
      <main className="p-6 max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
        <form method="post" className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your Name"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your Email"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Your Message"
              rows={4}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send
          </button>
        </form>
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

export default Contact;
