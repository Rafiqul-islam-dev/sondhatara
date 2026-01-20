
import React from 'react';
// Added Link import to resolve "Cannot find name 'Link'" errors
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { EXECUTIVE_COUNCIL } from '../constants';
import event from '../asset/event.jpg';


const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Banner */}
      <section className="bg-teal-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&h=400&auto=format&fit=crop" alt="Bg" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal animation="fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">আমাদের কথা</h1>
            <nav className="text-teal-200 text-sm">
              <Link to="/" className="hover:text-white transition-colors">হোম</Link> / <span className="text-white">আমাদের কথা</span>
            </nav>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="slide-left">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-teal-100 rounded-2xl"></div>
                <img src={event} alt="History" className="rounded-2xl relative z-10 shadow-2xl" />
              </div>
            </ScrollReveal>
            <ScrollReveal animation="slide-right">
              <h2 className="text-3xl font-bold text-teal-900 mb-6">আমাদের গড়ে ওঠার গল্প</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
               সন্ধ্যাতারা জনকল্যাণ সংঘ” আধুনিক প্রযুক্তিনির্ভর নতুন প্রজন্মের সাধারণ শিক্ষিত মানুষের মধ্যে একটি মানবিক ও সামাজিক সংগঠন। নিজেদের মধ্যে পারস্পরিক যোগাযোগ বৃদ্ধি ও অবহেলিত পিছিয়ে পড়া ও উন্নয়ন বঞ্চিত জনগোষ্ঠীকে উদ্বুদ্ধ করাই এই সংগঠনের উদ্দেশ্য। প্রিয়জনদের সাথে হাত ধরাধরি করে চলা “সন্ধ্যাতারা
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                সময়ের সাথে সাথে আমাদের কাজের পরিধি বেড়েছে। আজ আমরা স্বাস্থ্য ক্যাম্প, রক্তদান কর্মসূচি, জিপিএ-৫ সম্মাননা এবং শীতবস্ত্র বিতরণের মতো বড় প্রজেক্টগুলো সফলভাবে পরিচালনা করছি। আমাদের এই দীর্ঘ যাত্রায় শত শত স্বেচ্ছাসেবক এবং শুভাকাঙ্ক্ষী আমাদের শক্তি যুগিয়েছেন।
              </p>
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="p-4 border-l-4 border-teal-500 bg-teal-50 rounded-r-lg">
                  <h4 className="font-bold text-teal-900">স্বচ্ছতা</h4>
                  <p className="text-xs text-slate-500">প্রতিটি হিসাব ও কাজের যথাযথ জবাবদিহিতা নিশ্চিত করা হয়।</p>
                </div>
                <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
                  <h4 className="font-bold text-blue-900">সহমর্মিতা</h4>
                  <p className="text-xs text-slate-500">মানুষের বিপদে নিঃস্বার্থভাবে পাশে দাঁড়ানোই আমাদের লক্ষ্য।</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-teal-900 mb-4">আমাদের মূল্যবোধ</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'একতা', desc: 'সকলে মিলে এক হয়ে কাজ করার মাধ্যমেই বড় পরিবর্তন সম্ভব।' },
              { title: 'দায়বদ্ধতা', desc: 'সমাজের প্রতি আমাদের নৈতিক ও সামাজিক কর্তব্য পালন।' },
              { title: 'উদ্ভাবন', desc: 'সেবা প্রদানে নতুন এবং কার্যকর উপায় খুঁজে বের করা।' },
              { title: 'মানবিকতা', desc: 'সবার উপরে মানুষ সত্য, এই মন্ত্রেই আমরা দিক্ষিত।' }
            ].map((v, i) => (
              <ScrollReveal key={i} delay={i * 100} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-teal-700 mb-4">{v.title}</h3>
                <p className="text-slate-600 text-sm">{v.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section Preview */}
     
    </div>
  );
};

export default About;
