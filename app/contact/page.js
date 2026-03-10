'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      setError('Sorry, something went wrong. Please try again later or contact us by phone or email.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-40 pb-16 bg-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-gold mb-4" style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' }}>
              Reach Us
            </p>
            <h1 className="font-display text-charcoal" style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 300 }}>
              Get in Touch
            </h1>
            <p className="text-stone mt-4 max-w-lg" style={{ fontSize: '15px', lineHeight: 1.8 }}>
              Whether you're a tailor, designer, or just starting your fashion journey — we'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

              {/* Contact Info */}
              <div>
                <h2 className="font-display text-charcoal text-3xl mb-10" style={{ fontWeight: 300 }}>
                  Visit Our Showroom
                </h2>

                <div className="flex flex-col gap-10">
                  {[
                    {
                      label: 'Address',
                      icon: '◎',
                      content: 'M993+J7, Kathmandu 44600, Nepal',
                    },
                    {
                      label: 'Phone',
                      icon: '◌',
                      content: '+977 9825313413',
                    },
                    {
                      label: 'Email',
                      icon: '◈',
                      content: 'shahsubek@gmail.com',
                    },
                    {
                      label: 'Hours',
                      icon: '◷',
                      content: 'Monday – Saturday: 9:00 AM – 6:00 PM\nSunday: 10:00 AM – 4:00 PM',
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-5">
                      <div className="text-gold mt-1 flex-shrink-0" style={{ fontSize: '18px', width: '24px' }}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs tracking-widest uppercase text-stone mb-2" style={{ letterSpacing: '0.2em', fontSize: '10px' }}>
                          {item.label}
                        </p>
                        <p className="text-charcoal" style={{ fontSize: '14px', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                          {item.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Embed */}
                <div className="mt-12 overflow-hidden" style={{ borderRadius: 0 }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.6532960238687!2d85.35933639999999!3d27.666196499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1900717f07d9%3A0x5b9a74b698ca3da0!2sProfabrics%20Nepal%20(Garment)!5e0!3m2!1sen!2sdk!4v1772897832700!5m2!1sen!2sdk"
                    width="100%"
                    height="280"
                    style={{ border: 0, filter: 'grayscale(30%)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Profabrics location"
                  ></iframe>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="font-display text-charcoal text-3xl mb-10" style={{ fontWeight: 300 }}>
                  Send a Message
                </h2>

                {submitted && (
                  <div className="bg-cream border border-gold p-4 mb-8">
                    <p className="text-charcoal" style={{ fontSize: '13px', letterSpacing: '0.05em' }}>
                      ✓ &nbsp;Thank you! We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {error && (
                  <div className="bg-white border border-red-300 p-4 mb-8">
                    <p className="text-charcoal" style={{ fontSize: '13px', letterSpacing: '0.05em' }}>
                      {error}
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-stone mb-2" style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Priya Shrestha"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-stone mb-2" style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-stone mb-2" style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="+977 98XXXXXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-stone mb-2" style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-input"
                        style={{ cursor: 'pointer' }}
                      >
                        <option value="">Select a topic</option>
                        <option value="general">General Enquiry</option>
                        <option value="wholesale">Wholesale / Bulk Order</option>
                        <option value="custom">Custom Sourcing</option>
                        <option value="visit">Showroom Visit</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-stone mb-2" style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-input resize-none"
                      rows={5}
                      placeholder="Tell us about your fabric needs..."
                      required
                    />
                  </div>

                  <div>
                    <button type="submit" className="btn-primary" disabled={submitting}>
                      {submitting ? 'Sending…' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
