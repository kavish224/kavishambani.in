import Head from 'next/head';

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Kavish Ambani</title>
        <meta name="description" content="Explore Kavish Ambani's portfolio of projects." />
      </Head>
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Portfolio</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Major Projects</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <p className="font-medium">Financial Tools</p>
              <a 
                href="https://k.kavishambani.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 underline hover:text-blue-800"
              >
                Visit
              </a>
            </li>
            <li>
              <p className="font-medium">Videotube</p>
              <a 
                href="https://videotube.kavishambani.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 underline hover:text-blue-800"
              >
                Visit
              </a>
            </li>
            <li>
              <p className="font-medium">Wallet</p>
              <a 
                href="https://kwallet.kavishambani.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 underline hover:text-blue-800"
              >
                Visit
              </a>
            </li>
            <li>
              <p className="font-medium">TrueFeedback</p>
              <a 
                href="https://truefeedback.kavishambani.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 underline hover:text-blue-800"
              >
                Visit
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Minor Projects</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <p className="font-medium">Giftcrafters</p>
              <a 
                href="https://giftcrafters.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 underline hover:text-blue-800"
              >
                Visit
              </a>
            </li>
            <li>
              <p className="font-medium">Password Generator</p>
              <a 
                href="https://passwordgenerator.kavishambani.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 underline hover:text-blue-800"
              >
                Visit
              </a>
            </li>
            <li>
              <p className="font-medium">ToDo</p>
              <a 
                href="https://todo.kavishambani.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 underline hover:text-blue-800"
              >
                Visit
              </a>
            </li>
          </ul>
        </section>
        <section className="my-10">
          <h2 className="text-2xl font-semibold mb-4"></h2>
          <div className="space-x-4">
            <a
              href="https://github.com/kavish224"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Portfolio;
