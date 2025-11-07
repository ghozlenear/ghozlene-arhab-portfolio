import heroBg from '@/assets/hero-bg.png';
import Asterisk from '@/assets/Asterisk.png';
import { FaGithub, FaLinkedin, FaBehance } from 'react-icons/fa';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Reveal from './Reveal';

function FormMailer() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    try {
      setSending(true);
      const fd = new FormData();
      fd.append('name', formData.name);
      fd.append('email', formData.email);
      fd.append('message', formData.message);
      fd.append('_subject', `Message from ${formData.name}`);
      fd.append('_template', 'table');
      fd.append('_captcha', 'false');

      const res = await fetch('https://formsubmit.co/ajax/ghozlenearhab@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: fd,
      });

      if (!res.ok) throw new Error('Failed to send');

      toast({
        title: 'Message sent!',
        description: "Thanks I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      toast({
        title: 'Could not send message',
        description: 'Please try again in a moment or email me directly.',
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-black mb-2">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded-xl md:rounded-2xl bg-white shadow-sm border border-black/10 focus:border-pink-400 focus:ring-2 focus:ring-pink-300 px-4 py-3 outline-none transition"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-black mb-2">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full rounded-xl md:rounded-2xl bg-white shadow-sm border border-black/10 focus:border-pink-400 focus:ring-2 focus:ring-pink-300 px-4 py-3 outline-none transition"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-black mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell me about your project..."
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full rounded-xl md:rounded-2xl bg-white shadow-sm border border-black/10 focus:border-pink-400 focus:ring-2 focus:ring-pink-300 px-4 py-3 outline-none transition resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="w-full inline-flex items-center justify-center rounded-xl md:rounded-2xl bg-gradient-to-r from-[#FF4FA3] to-[#FF1BAA] text-white font-medium py-3 shadow-[0_8px_18px_rgba(255,79,163,0.35)] hover:brightness-105 active:scale-[0.99] transition disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {sending ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}

const Contact = () => {
  return (
    <Reveal
      as="section"
      id="contact"
      className="relative h-[120vh] md:h-[130vh] bg-center bg-cover bg-no-repeat -mt-12 md:-mt-16 py-0"
      style={{ backgroundImage: `url(${heroBg})` }}
      variant="left"
    >
      <div className="container mx-auto max-w-6xl h-full px-6 pt-10 md:pt-12 pb-6 md:pb-8">
        <h2 className="text-center font-['Italiana',serif] tracking-wide text-black text-[32px] md:text-[56px]">
          LET’S WORK TOGETHER
        </h2>
 
        <div className="mt-6 md:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-1 lg:gap-2 items-start">
          <div className="relative w-full lg:col-span-7 rounded-[22px] bg-white/70 backdrop-blur-md border-2 border-pink-400 shadow-[0_16px_40px_rgba(236,72,153,0.28)] p-5 md:p-6 min-h-[52vh] lg:min-h-[62vh]">
            <img src={Asterisk} alt="" className="absolute -top-4 -left-4 w-10 h-10" />
            <FormMailer />
          </div>

          <div className="w-full lg:col-span-5 flex flex-col gap-2">
            <div className="relative w-full rounded-[22px] bg-white/70 backdrop-blur-md border-2 border-sky-500 shadow-[0_16px_40px_rgba(59,130,246,0.25)] p-5 md:p-6 min-h-[28vh]">
              <h3 className="text-2xl font-semibold font-['Italiana',serif] text-black mb-4">Get in Touch</h3>

              <div className="space-y-5">
                <div>
                  <p className="text-sm font-semibold text-black">Email</p>
                  <a href="mailto:ghozlenearhab@gmail.com" className="mt-1 inline-block text-black/80 hover:text-sky-600 transition">
                    ghozlenearhab@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-sm font-semibold text-black">Location</p>
                  <p className="mt-1 text-black/80">Annaba, Algeria</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-black">Social</p>
                  <div className="mt-2 flex flex-wrap gap-3">
                    <a
                      href="https://github.com/ghozlenear"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="w-10 h-10 rounded-xl border border-sky-300/60 bg-white/70 text-sky-600 hover:text-white hover:bg-sky-500 hover:border-sky-500 shadow-sm hover:shadow-md flex items-center justify-center transition"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ghozlene-arhab-164990281/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-10 h-10 rounded-xl border border-sky-300/60 bg-white/70 text-sky-600 hover:text-white hover:bg-sky-500 hover:border-sky-500 shadow-sm hover:shadow-md flex items-center justify-center transition"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.behance.net/ghozlenearhab"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Behance"
                      className="w-10 h-10 rounded-xl border border-sky-300/60 bg-white/70 text-sky-600 hover:text-white hover:bg-sky-500 hover:border-sky-500 shadow-sm hover:shadow-md flex items-center justify-center transition"
                    >
                      <FaBehance className="w-5 h-5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            <div className="relative w-full rounded-[22px] bg-white/70 backdrop-blur-md border-2 border-emerald-400 shadow-[0_16px_40px_rgba(16,185,129,0.25)] p-0 overflow-hidden h-36 md:h-44 lg:h-48">
              <iframe
                title="Map of Annaba, Algeria"
                src="https://www.google.com/maps?q=Annaba,+Algeria&output=embed&hl=en&gl=US&region=US"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
              <img src={Asterisk} alt="" className="hidden md:block absolute -right-4 -bottom-4 w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Contact;