
import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Link } from 'react-router-dom';
import { UPCOMING_EVENTS, NOTICES, FAQS } from '../constants';
import banner from '../asset/banner.jpg';
import teacher from '../asset/teacher.jpg';
import event2 from '../asset/event2.jpg';
import event1 from '../asset/event1.jpg';
import magazin from '../asset/magazin.jpeg';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-50/50 -skew-x-12 translate-x-1/4 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal animation="slide-left">
            <h4 className="text-teal-600 font-semibold mb-4 tracking-wider">একটি স্বেচ্ছাসেবী অলাভজনক সংস্থা</h4>
            <h1 className="text-5xl md:text-7xl font-bold text-teal-900 leading-tight mb-6">
              সন্ধ্যাতারা <br/><span className="text-teal-600">জনকল্যাণ সংস্থা</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              মানবতার সেবায় এবং সামাজিক কল্যাণে আমরা কাজ করে যাচ্ছি। আমাদের লক্ষ্য একটি সুখী, স্বাবলম্বী এবং সচেতন সমাজ গঠন করা।
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-4 bg-teal-700 text-white rounded-full font-bold shadow-lg shadow-teal-700/20 hover:bg-teal-800 transition-all hover:-translate-y-1 btn-shine">
                স্বেচ্ছাসেবক হোন
              </Link>
              <Link to="/activities" className="px-8 py-4 bg-white text-teal-700 border-2 border-teal-700 rounded-full font-bold hover:bg-teal-50 transition-all hover:-translate-y-1">
                কার্যক্রম দেখুন
              </Link>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="zoom-in" className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl border border-teal-50">
                <img src={banner} alt="Activity" className="rounded-2xl w-full h-auto object-cover" />
                <div className="absolute bottom-10 -left-8 bg-white p-4 rounded-xl shadow-xl border border-slate-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">৫০০০+</p>
                      <p className="text-xs text-slate-500">মানুষ উপকৃত</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-teal-700 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'উপকারভোগী', value: '৫০০০+' },
              { label: 'ভলান্টিয়ার', value: '১৫০+' },
              { label: 'কার্যক্রম', value: '২৫+' },
              { label: 'পুরস্কার', value: '১০+' }
            ].map((stat, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <h3 className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</h3>
                <p className="text-teal-100 uppercase tracking-widest text-xs">{stat.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Help Cards Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h4 className="text-teal-600 font-bold mb-2">আপনি কিভাবে সাহায্য করবেন</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-teal-900">মানবতার সেবায় এগিয়ে আসুন</h2>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'স্বেচ্ছাসেবী হোন', desc: 'আপনার সময় ও দক্ষতা দিয়ে আমাদের বিভিন্ন কার্যক্রমে সরাসরি অংশগ্রহণ করুন।', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857C17.092 15.346 17 14.693 17 14c0-2.761-2.239-5-5-5s-5 2.239-5 5c0 .693.092 1.346.264 2.143A3.001 3.001 0 002 18v2h5', link: '/contact' },
              { title: 'অনুদান দিন', desc: 'আপনার ক্ষুদ্র সাহায্য অনেক দুস্থ মানুষের মুখে হাসি ফোটাতে সাহায্য করবে।', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', link: '/contact' },
              { title: 'সচেতনতা বাড়ান', desc: 'আমাদের কার্যক্রম সম্পর্কে মানুষকে জানান এবং সামাজিক দায়বদ্ধতা বৃদ্ধিতে সহায়তা করুন।', icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z', link: '/gallery' }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 150} animation="fade-up">
                <div className="p-10 rounded-3xl bg-slate-50 border border-slate-100 text-center hover:bg-teal-50 transition-all hover:shadow-xl group">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-teal-600 mb-8 mx-auto group-hover:bg-teal-700 group-hover:text-white transition-colors">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}/></svg>
                  </div>
                  <h3 className="text-xl font-bold text-teal-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 mb-8">{item.desc}</p>
                  <Link to={item.link} className="text-teal-700 font-bold text-sm hover:underline">আরও জানুন →</Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events & Notice Board */}
      <section className="py-24 bg-teal-50/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-teal-900">আসন্ন ইভেন্ট</h2>
                  <Link to="/gallery" className="text-teal-600 text-sm font-bold hover:underline">সবগুলো দেখুন</Link>
                </div>
              </ScrollReveal>
              <div className="space-y-6">
                {UPCOMING_EVENTS.map((event, idx) => (
                  <ScrollReveal key={event.id} delay={idx * 150} animation="fade-up">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-100 flex flex-col md:flex-row h-full">
                      <div className="md:w-1/3">
                        <img src={event.image} alt={event.title} className="w-full h-full object-cover min-h-[200px]" />
                      </div>
                      <div className="p-6 md:w-2/3 flex flex-col justify-between">
                        <div>
                          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">{event.date}</span>
                          <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3">{event.title}</h3>
                          <p className="text-slate-600 text-sm line-clamp-2">{event.description}</p>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                          <div className="flex items-center text-xs text-slate-400">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                            {event.location}
                          </div>
                          <Link to={`/event/${event.id}`} className="px-5 py-2 bg-teal-50 text-teal-700 rounded-full text-xs font-bold hover:bg-teal-700 hover:text-white transition-colors">
                            বিস্তারিত
                          </Link>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div>
              <ScrollReveal>
                <h2 className="text-3xl font-bold text-teal-900 mb-8">নোটিশ বোর্ড</h2>
              </ScrollReveal>
              <div className="bg-white rounded-2xl shadow-sm border border-teal-100 overflow-hidden">
                <div className="bg-teal-700 px-6 py-4 flex items-center justify-between">
                  <span className="text-white font-bold flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
                    সাম্প্রতিক নোটিশ
                  </span>
                </div>
                <div className="divide-y divide-slate-100">
                  {NOTICES.map((notice, idx) => (
                    <div key={notice.id} className="p-6 hover:bg-slate-50 transition-colors cursor-pointer group">
                      <span className="text-[10px] text-teal-600 font-bold">{notice.date}</span>
                      <h4 className="text-slate-800 font-bold text-sm mt-1 group-hover:text-teal-700">{notice.title}</h4>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-slate-50 text-center">
                  <Link to="/" className="text-teal-700 text-xs font-bold hover:underline">সব নোটিশ দেখুন</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Activities Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-teal-900 mb-4">সাম্প্রতিক কার্যক্রম</h2>
              <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'জিপিএ-৫ সম্মাননা', slug: 'gpa5-award', desc: 'মেধাবী শিক্ষার্থীদের উৎসাহ দিতে আমাদের বিশেষ সম্মাননা অনুষ্ঠান। ২০১৭ থেকে নিয়মিত কার্যক্রম।', img: event2 },
              { title: 'পরীক্ষার ফরম পূরণ সহায়তা', slug: 'form-fillup', desc: 'অসচ্ছল শিক্ষার্থীদের পরীক্ষার ফি এবং ফরম পূরণে আর্থিক সহায়তা। ২০১৭ থেকে চলমান।', img: event1 },
              { title: 'অবসরপ্রাপ্ত শিক্ষক সম্মাননা', slug: 'teacher-award', desc: 'যাদের হাত ধরে সমাজ আলোকিত হয়েছে, সেই শ্রদ্ধেয় শিক্ষকদের শ্রদ্ধা নিবেদন।', img: teacher }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 200} animation="fade-up">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-slate-100 h-full flex flex-col">
                  <div className="h-52 overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-teal-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">{item.desc}</p>
                    <Link to={`/program/${item.slug}`} className="text-teal-700 font-bold text-sm hover:underline flex items-center mt-auto">
                      বিস্তারিত ইতিহাস দেখুন
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Family Sections Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-teal-900 mb-12">আমাদের পরিবার</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'উপদেষ্টা মন্ডলী', slug: 'advisors', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m4 0h1m-5 4h1m4 0h1m-5 4h1m4 0h1' },
              { title: 'কার্যকরী পরিষদ', slug: 'executive', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857C17.092 15.346 17 14.693 17 14c0-2.761-2.239-5-5-5s-5 2.239-5 5c0 .693.092 1.346.264 2.143A3.001 3.001 0 002 18v2h5m10 0h-10m10 0v-2a3 3 0 00-5.356-1.857M7 20v-2a3 3 0 005.356-1.857' },
              { title: 'সাধারণ সদস্যবৃন্দ', slug: 'general-members', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
              { title: 'শুভাকাঙ্ক্ষীবৃন্দ', slug: 'well-wishers', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 150} animation="zoom-in">
                <Link to={`/members/${item.slug}`} className="block h-full">
                  <div className="bg-white border border-slate-100 p-8 rounded-3xl hover:bg-teal-50 hover:shadow-xl transition-all group h-full">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-teal-600 mb-6 mx-auto group-hover:scale-110 transition-transform">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-teal-900">{item.title}</h3>
                    <div className="mt-4 w-10 h-0.5 bg-teal-200 mx-auto"></div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

 <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-teal-900 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-800 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="lg:w-2/3 relative z-10">
              <ScrollReveal>
                <h2 className="text-4xl font-bold mb-6">সংস্থার নিয়মিত মুখপত্র "সন্ধ্যাতারা" ম্যাগাজিন</h2>
                <p className="text-teal-100 text-lg mb-10 leading-relaxed">
                  ম্যাগাজিনটি কেবল একটি প্রকাশনা নয়, এটি আমাদের পথচলার দর্পণ। এতে রয়েছে আমাদের কার্যক্রমের বিস্তারিত চিত্র, সৃজনশীল লেখা এবং এলাকার গুণীজনদের কথা।
                </p>
                <button className="px-10 py-4 bg-white text-teal-900 rounded-full font-bold shadow-xl hover:bg-teal-50 transition-all hover:scale-105">
                  ই-ম্যাগাজিন পড়ুন
                </button>
              </ScrollReveal>
            </div>
            <div className="lg:w-1/3 relative z-10">
              <div className="relative transform rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl"></div>
                <img src={magazin} alt="Magazine Cover" className="rounded-2xl shadow-2xl border-4 border-white/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-teal-900">সচরাচর জিজ্ঞাসিত প্রশ্ন</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-teal-900 mb-2 flex items-start">
                    <span className="text-teal-500 mr-2">প্র:</span>
                    {faq.question}
                  </h4>
                  <p className="text-slate-600 text-sm flex items-start">
                    <span className="text-slate-400 mr-2">উ:</span>
                    {faq.answer}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-teal-800 to-teal-600 rounded-3xl p-12 text-white text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">আমাদের টিমের সাথে যুক্ত হন</h2>
              <p className="text-teal-50 mb-10 max-w-2xl mx-auto text-lg">
                আপনার একটু সময় বা সহযোগিতা কারো জীবনের মোড় ঘুরিয়ে দিতে পারে। আজই আমাদের স্বেচ্ছাসেবক হিসেবে নাম লিখিয়ে মানবতার সেবায় এগিয়ে আসুন।
              </p>
              <Link to="/contact" className="inline-block px-10 py-4 bg-white text-teal-700 rounded-full font-bold shadow-xl hover:bg-teal-50 transition-all hover:scale-105 btn-shine">
                এখনই আবেদন করুন
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
