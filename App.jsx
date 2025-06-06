import React, { useEffect } from "react";

function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-10">
      <div className="container mx-auto flex justify-between py-4 px-6">
        <div className="text-xl font-bold">Waves</div>
        <div className="space-x-6">
          {["Home", "About", "Contact"].map((section) => (
            <a key={section} href={`#${section.toLowerCase()}`} className="hover:text-sky-500">
              {section}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gradient-to-br from-sky-600 to-sky-200 text-white"
    >
      <div className="text-center space-y-4 animate-fadeIn">
        <h1 className="text-5xl font-bold">Waves Communications</h1>
        <p className="text-xl max-w-xl">
          Expert phone & laptop repair with care—fast, reliable, trusted.
        </p>
        <a
          href="#about"
          className="inline-block mt-4 bg-white text-sky-600 font-medium px-6 py-2 rounded-md hover:bg-sky-50"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 bg-white container mx-auto px-6">
      <h2 className="text-4xl font-semibold text-center mb-8">About Us</h2>
      <p className="text-lg max-w-3xl mx-auto leading-relaxed">
        Waves Communications offers premium phone and laptop repair services using top-quality
        tools, diagnostics, and replacement parts. Our goal is to make your device feel brand new
        again—quickly and affordably.
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-sky-100 container mx-auto px-6">
      <h2 className="text-4xl font-semibold text-center mb-8">Get In Touch</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 rounded border border-gray-300"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded border border-gray-300"
          required
        />
        <textarea
          rows="4"
          placeholder="Message"
          className="w-full px-4 py-2 rounded border border-gray-300"
          required
        />
        <button
          type="submit"
          className="bg-sky-600 text-white px-6 py-2 rounded hover:bg-sky-700"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8 text-center text-gray-700 space-y-2">
        <div>📞 0800‑WAVES</div>
        <div>📧 support@wavescomm.com.ng</div>
        <div>📍 123 Tech Street, Lagos</div>
      </div>
    </section>
  );
}

function App() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity:1; transform: translateY(0); }
      }
      .animate-fadeIn {
        animation: fadeIn 1.4s ease-out;
      }
    `;
    document.head.append(style);
  }, []);

  return (
    <>
      <Nav />
      <main className="pt-20">
        <Hero />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;