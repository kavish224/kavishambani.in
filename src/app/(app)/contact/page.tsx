import Head from 'next/head';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact - Kavish Ambani</title>
        <meta name="description" content="Get in touch with Kavish Ambani." />
      </Head>
      <main>
        <h1>Contact Me</h1>
        <form>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </main>
    </>
  );
};

export default Contact;