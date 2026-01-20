
import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { ACTIVITIES } from '../constants';
import event from '../asset/event.jpg';

const Activities: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Booklet Header Style */}
      <section className="bg-white py-20 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-slate-50 rounded-3xl p-10 md:p-16 border border-slate-200 shadow-sm">
            <ScrollReveal animation="fade-in">
              <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                <div>
                  <h1 className="text-4xl font-bold text-teal-900 mb-2">কার্যক্রম সূচি</h1>
                  <p className="text-slate-500 uppercase tracking-widest text-xs">আমাদের সেবামূলক প্রকল্পের সংক্ষিপ্ত তালিকা</p>
                </div>
                <div className="mt-4 md:mt-0 px-4 py-2 bg-teal-700 text-white rounded text-xs font-bold">সংস্করণ ২০২৪-২৫</div>
              </div>
              
              <div className="space-y-4">
                {ACTIVITIES.map((act, i) => (
                  <div key={act.id} className="flex items-center group cursor-pointer border-b border-slate-200 pb-4 last:border-0 hover:bg-white p-2 rounded transition-colors">
                    <span className="w-8 text-teal-600 font-bold text-lg">{i + 1}.</span>
                    <span className="flex-grow text-slate-800 font-medium group-hover:text-teal-700 transition-colors">{act.title}</span>
                    <div className="hidden sm:flex items-center space-x-4">
                      <span className="text-xs text-slate-400 font-mono">-------------------------</span>
                      <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-[10px] font-bold">{act.year}</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold">{act.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-teal-900 mb-4">বিস্তারিত কার্যক্রম</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">আমরা সমাজের প্রতিটি স্তরে ইতিবাচক পরিবর্তন আনতে বিভিন্ন কর্মসূচি বাস্তবায়ন করছি। আমাদের কিছু নিয়মিত কর্মকাণ্ড নিচে দেওয়া হলো:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ACTIVITIES.map((act, i) => (
              <ScrollReveal key={act.id} delay={i * 100} animation="fade-up">
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden h-full flex flex-col">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -z-0 translate-x-12 -translate-y-12 transition-transform group-hover:scale-110"></div>
                  
                  <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-xl flex items-center justify-center mb-6 relative z-10 group-hover:bg-teal-700 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">{act.title}</h3>
                  <p className="text-slate-600 text-sm mb-8 flex-grow relative z-10">{act.description}</p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-slate-50 relative z-10">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 uppercase tracking-tighter">কার্যকাল</span>
                      <span className="text-xs font-bold text-teal-800">{act.year}</span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-[10px] text-slate-400 uppercase tracking-tighter">প্রভাব</span>
                      <span className="text-xs font-bold text-teal-800">{act.impact}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <img src={event} alt="Featured Activity" className="w-full h-full object-cover" />
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
              <ScrollReveal>
                <span className="inline-block px-4 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold mb-6">কার্যক্রমের কিছু ঝলক</span>
                <h2 className="text-3xl font-bold text-teal-900 mb-8">আমাদের সেবা পৌঁছে যাচ্ছে প্রান্তিক মানুষের কাছে</h2>
                <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                  প্রতিটি প্রকল্পের পেছনে রয়েছে আমাদের স্বেচ্ছাসেবকদের অক্লান্ত পরিশ্রম এবং আপনাদের দোয়া। আমরা চাই প্রতিটি মানুষ যেন মৌলিক অধিকার পায় এবং সম্মানের সাথে সমাজে বেঁচে থাকে।
                </p>
                <button className="self-start px-8 py-4 bg-teal-700 text-white rounded-full font-bold hover:bg-teal-800 transition-all shadow-lg hover:shadow-teal-700/20 btn-shine">
                  পুরো অ্যালবাম দেখুন
                </button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
