import Head from 'next/head';
import Link from 'next/link';

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
      </main>
    </>
  );
};

export default Portfolio;
