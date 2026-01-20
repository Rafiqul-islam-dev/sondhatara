
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { UPCOMING_EVENTS } from '../constants';
import ScrollReveal from '../components/ScrollReveal';

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const event = UPCOMING_EVENTS.find(e => e.id === parseInt(id || '0'));

  if (!event) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h2 className="text-2xl font-bold text-slate-800">ইভেন্টটি পাওয়া যায়নি।</h2>
        <Link to="/" className="mt-6 inline-block text-teal-600 font-bold hover:underline">হোম পেজে ফিরে যান</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal animation="fade-in">
            <div className="max-w-4xl mx-auto">
              <nav className="text-teal-600 text-sm mb-8 font-bold flex items-center">
                <Link to="/" className="hover:underline">হোম</Link>
                <svg className="w-4 h-4 mx-2 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                <span className="text-slate-500">ইভেন্ট ডিটেইলস</span>
              </nav>

              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                <img src={event.image} alt={event.title} className="w-full aspect-video object-cover" />
                
                <div className="p-8 md:p-12">
                  <span className="inline-block px-4 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold mb-6">আসন্ন ইভেন্ট</span>
                  <h1 className="text-3xl md:text-4xl font-bold text-teal-900 mb-8 leading-tight">{event.title}</h1>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-slate-50 p-6 rounded-2xl flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-teal-600 flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">তারিখ ও সময়</p>
                        <p className="text-slate-800 font-bold mt-1">{event.date}</p>
                        <p className="text-slate-500 text-sm">{event.time}</p>
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 p-6 rounded-2xl flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-teal-600 flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">স্থান</p>
                        <p className="text-slate-800 font-bold mt-1">{event.location}</p>
                      </div>
                    </div>
                  </div>

                  <div className="prose max-w-none text-slate-600 leading-relaxed mb-12">
                    <h3 className="text-xl font-bold text-teal-900 mb-4">বিবরণ</h3>
                    <p>{event.description}</p>
                    <p className="mt-4">আমরা আশা করছি আপনারা সপরিবারে এই মহতী অনুষ্ঠানে উপস্থিত থাকবেন। আমাদের সামাজিক কার্যক্রমকে আরও বেগবান করতে আপনাদের সহযোগিতা ও দোয়া একান্ত কাম্য।</p>
                  </div>

                  <div className="border-t border-slate-100 pt-8 flex flex-wrap gap-4">
                    <button className="px-8 py-3 bg-teal-700 text-white rounded-full font-bold shadow-lg hover:bg-teal-800 transition-all btn-shine">অংশগ্রহণ নিশ্চিত করুন</button>
                    <Link to="/contact" className="px-8 py-3 bg-white text-teal-700 border border-teal-700 rounded-full font-bold hover:bg-teal-50 transition-all">আরও জানতে যোগাযোগ করুন</Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default EventDetails;
