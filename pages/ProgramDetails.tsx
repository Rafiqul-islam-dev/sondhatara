
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROGRAM_DETAILS } from '../constants';
import ScrollReveal from '../components/ScrollReveal';

const ProgramDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const program = slug ? PROGRAM_DETAILS[slug] : null;

  if (!program) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h2 className="text-2xl font-bold text-slate-800">কার্যক্রমটি পাওয়া যায়নি।</h2>
        <Link to="/" className="mt-6 inline-block text-teal-600 font-bold hover:underline">হোম পেজে ফিরে যান</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Banner */}
      <section className="bg-teal-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={program.bannerImage} alt={program.name} className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal animation="fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{program.name}</h1>
            <nav className="text-teal-200 text-sm">
              <Link to="/" className="hover:text-white">হোম</Link> / <span>কার্যক্রম</span> / <span className="text-white">{program.name}</span>
            </nav>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-teal-900 mb-6">আমাদের পথচলা</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{program.intro}</p>
            </ScrollReveal>
          </div>

          {/* Timeline / Historical List */}
          <div className="space-y-24 max-w-4xl mx-auto">
            {program.history.map((item, idx) => (
              <ScrollReveal key={idx} animation={idx % 2 === 0 ? "slide-left" : "slide-right"}>
                <div className="flex flex-col md:flex-row gap-10 items-center">
                  <div className={`w-full md:w-1/2 ${idx % 2 !== 0 ? 'md:order-2' : ''}`}>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-teal-600 rounded-2xl transform rotate-2 group-hover:rotate-0 transition-transform -z-10"></div>
                      <img src={item.image} alt={item.title} className="w-full h-auto rounded-2xl shadow-xl transition-transform group-hover:scale-[1.02]" />
                      <div className="absolute top-4 left-4 px-4 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold text-teal-900 shadow-sm">
                        {item.year}
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <span className="text-sm font-bold text-teal-600 mb-2 block">{item.date}</span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">{item.description}</p>
                    <div className="h-1 w-20 bg-teal-100"></div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-teal-900 mb-8">আপনিও কি যুক্ত হতে চান?</h2>
            <p className="text-slate-600 mb-10 max-w-2xl mx-auto">আমাদের এই চলমান কার্যক্রমগুলোতে স্বেচ্ছাসেবক বা শুভাকাঙ্ক্ষী হিসেবে যুক্ত হয়ে মানবতার সেবায় অবদান রাখুন।</p>
            <Link to="/contact" className="inline-block px-10 py-4 bg-teal-700 text-white rounded-full font-bold shadow-xl hover:bg-teal-800 transition-all btn-shine">
              আমাদের সাথে যোগাযোগ করুন
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetails;
