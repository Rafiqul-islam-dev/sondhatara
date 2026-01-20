
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ADVISORS, EXECUTIVE_COUNCIL, GENERAL_MEMBERS, WELL_WISHERS } from '../constants';
import ScrollReveal from '../components/ScrollReveal';
import { TeamMember } from '../types';

const Members: React.FC = () => {
  const { group } = useParams<{ group: string }>();

  let members: TeamMember[] = [];
  let title = '';
  let subtitle = '';

  switch (group) {
    case 'advisors':
      members = ADVISORS;
      title = 'উপদেষ্টা মন্ডলী';
      subtitle = 'যাদের দিকনির্দেশনায় আমাদের এই সংস্থা পরিচালিত হচ্ছে';
      break;
    case 'executive':
      members = EXECUTIVE_COUNCIL;
      title = 'কার্যকরী পরিষদ';
      subtitle = 'সংস্থার দৈনন্দিন কার্যক্রম ও সিদ্ধান্ত গ্রহণকারী পরিষদ';
      break;
    case 'general-members':
      members = GENERAL_MEMBERS;
      title = 'সাধারণ সদস্যবৃন্দ';
      subtitle = 'আমাদের অকুতোভয় সদস্য যারা মাঠ পর্যায়ে কাজ করছেন';
      break;
    case 'well-wishers':
      members = WELL_WISHERS;
      title = 'শুভাকাঙ্ক্ষীবৃন্দ';
      subtitle = 'যাদের ঐকান্তিক সহযোগিতায় আমরা এগিয়ে চলেছি';
      break;
    default:
      break;
  }

  if (!title) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h2 className="text-2xl font-bold text-slate-800">তথ্য পাওয়া যায়নি।</h2>
        <Link to="/" className="mt-6 inline-block text-teal-600 font-bold hover:underline">হোম পেজে ফিরে যান</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="bg-teal-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&h=400&auto=format&fit=crop" alt="Bg" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal animation="fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
            <nav className="text-teal-200 text-sm">
              <Link to="/" className="hover:text-white transition-colors">হোম</Link> / <span className="text-white">{title}</span>
            </nav>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-teal-900 mb-4 uppercase tracking-wider">{title}</h2>
              <p className="text-slate-500">{subtitle}</p>
              <div className="w-20 h-1 bg-teal-500 mx-auto mt-6"></div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {members.map((member, i) => (
              <ScrollReveal key={member.id} delay={i * 100} animation="fade-up">
                <div className="group text-center">
                  <div className="relative mb-6 mx-auto w-48 h-48">
                    <div className="absolute inset-0 bg-teal-100 rounded-3xl rotate-6 group-hover:rotate-3 transition-transform"></div>
                    <div className="absolute inset-0 bg-white rounded-3xl overflow-hidden shadow-xl">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-teal-600 font-bold text-sm">{member.role}</p>
                  {member.designation && (
                    <p className="text-slate-400 text-xs mt-2 italic">{member.designation}</p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action for joining */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-teal-900 mb-6">আপনিও কি আমাদের পরিবারের অংশ হতে চান?</h2>
            <p className="text-slate-600 mb-10 max-w-2xl mx-auto">আমরা সবসময় নতুন মুখ এবং ইতিবাচক মানসিকতার মানুষকে স্বাগত জানাই। আমাদের সাথে যুক্ত হয়ে আপনিও সমাজের উন্নয়নে অবদান রাখতে পারেন।</p>
            <Link to="/contact" className="inline-block px-10 py-4 bg-teal-700 text-white rounded-full font-bold shadow-xl hover:bg-teal-800 transition-all btn-shine">
              সদস্য পদের জন্য আবেদন করুন
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Members;
