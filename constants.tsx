
import { Activity, TeamMember, GalleryFolder, UpcomingEvent, Notice, ProgramDetail, FAQItem } from './types';

import edi from './asset/eid.png';
import teacher from './asset/teacher.jpg';
import event2 from './asset/event2.jpg';
import event1 from './asset/event1.jpg';




export const ACTIVITIES: Activity[] = [
  { id: 1, title: 'শিক্ষা সহায়তা', description: 'অসহায় শিক্ষার্থীদের বই, খাতা এবং শিক্ষা উপকরণ বিতরণ কার্যক্রম।', year: '২০২৪', impact: '৫০০+ শিক্ষার্থী', icon: 'AcademicCapIcon' },
  { id: 2, title: 'শীতবস্ত্র বিতরণ', description: 'প্রতি বছর শীতে দরিদ্র মানুষের মাঝে কম্বল ও গরম কাপড় বিতরণ।', year: '২০২৩', impact: '২০‍০০+ পরিবার', icon: 'CloudIcon' },
  { id: 3, title: 'ত্রাণ বিতরণ', description: 'বন্যা ও অন্যান্য প্রাকৃতিক দুর্যোগে জরুরি খাদ্য ও সহায়তা প্রদান।', year: '২০২৪', impact: '১৫০০+ প্যাকেট', icon: 'TruckIcon' },
  { id: 4, title: 'স্বাস্থ্য সচেতনতা', description: 'বিনামূল্যে স্বাস্থ্য পরীক্ষা ও সচেতনতামূলক সেমিনার আয়োজন।', year: '২০২৩', impact: '৮০০+ মানুষ', icon: 'HeartIcon' },
  { id: 5, title: 'স্বেচ্ছাসেবী ক্যাম্পেইন', description: 'তরুণদের সামাজিক কাজে উৎসাহিত করতে বিভিন্ন ক্যাম্পেইন।', year: '২০২৪', impact: '১০০+ ভলান্টিয়ার', icon: 'UserGroupIcon' },
  { id: 6, title: 'জরুরি সহায়তা', description: 'অসুস্থ মানুষের চিকিৎসা ও জরুরি প্রয়োজনে আর্থিক সহায়তা।', year: '২০২৩', impact: '৫০+ রোগী', icon: 'ExclamationTriangleIcon' },
  { id: 7, title: 'রক্তদান/স্বাস্থ্য ক্যাম্প', description: 'রক্তদান কর্মসূচি ও বিশেষজ্ঞ চিকিৎসকদের মাধ্যমে সেবা প্রদান।', year: '২০২৪', impact: '২০০+ ব্যাগ রক্ত', icon: 'BeakerIcon' },
  { id: 8, title: 'সামাজিক সচেতনতা কার্যক্রম', description: 'বাল্যবিবাহ রোধ ও নারী অধিকার নিয়ে সচেতনতা বৃদ্ধি।', year: '২০২৩', impact: '১০+ গ্রাম', icon: 'SpeakerWaveIcon' },
];

export const PROGRAM_DETAILS: Record<string, ProgramDetail> = {
  'gpa5-award': {
    id: 'gpa5-award',
    name: 'জিপিএ-৫ সম্মাননা',
    bannerImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&h=400&auto=format&fit=crop',
    intro: 'মেধাবী শিক্ষার্থীদের মেধার স্বীকৃতি দিতে ২০১৭ সাল থেকে আমরা নিয়মিত জিপিএ-৫ সম্মাননা প্রদান করে আসছি। এটি আমাদের অন্যতম সফল ও দীর্ঘমেয়াদী প্রজেক্ট।',
    history: [
      { year: '২০২৫', date: '১০ মে, ২০২৫', title: 'জিপিএ-৫ সম্মাননা ২০২৫', image: event1, description: 'এ বছর চাঁদপুর জেলার ২০০ জন মেধাবী শিক্ষার্থীকে সম্মাননা ও ক্রেস্ট প্রদান করা হয়।' },
      { year: '২০২৪', date: '১৫ মে, ২০২৪', title: 'জিপিএ-৫ সম্মাননা ২০২৪', image: event1, description: 'গত বছরের ধারাবাহিকতায় এ বছরও দেড়শতাধিক শিক্ষার্থীকে সংবর্ধিত করা হয়।' },
      { year: '২০১৭', date: '১৫ মে, ২০১৭', title: 'জিপিএ-৫ সম্মাননা ২০১৭', image: event1, description: 'সংস্থার প্রথম জিপিএ-৫ সম্মাননা কার্যক্রমের শুভ সূচনা যা আজও চলমান।' },
    ]
  },
  'form-fillup': {
    id: 'form-fillup',
    name: 'পরীক্ষার ফরম পূরণ সহায়তা',
    bannerImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&h=400&auto=format&fit=crop',
    intro: 'অসচ্ছল পরিবারের মেধাবী সন্তানদের শিক্ষা যেন অর্থের অভাবে বন্ধ না হয়, সেজন্য আমরা ফরম পূরণে আর্থিক সহায়তা দিয়ে আসছি।',
    history: [
      { year: '২০২৫', date: '০২ ফেব্রুয়ারি, ২০২৫', title: 'এসএসসি ফরম পূরণ সহায়তা ২০২৫', image: 'https://picsum.photos/seed/form2025/800/450', description: 'এ বছর ৫০ জন শিক্ষার্থীর পরীক্ষার ফি প্রদান করা হয়েছে।' },
      { year: '২০১৭-২০২৪', date: 'বার্ষিক কার্যক্রম', title: 'বিগত বছরগুলোর সহায়তা', image: 'https://picsum.photos/seed/form_past/800/450', description: '২০১৭ সাল থেকে গড়ে ৪০-৫০ জন শিক্ষার্থীকে প্রতি বছর সহায়তা করা হয়েছে।' },
    ]
  },
  'teacher-award': {
    id: 'teacher-award',
    name: 'অবসরপ্রাপ্ত শিক্ষক সম্মাননা',
    bannerImage: teacher,
    intro: 'যাদের হাত ধরে সমাজ আলোকিত হয়েছে, সেই সব শ্রদ্ধেয় অবসরপ্রাপ্ত শিক্ষকদের প্রতি কৃতজ্ঞতা জ্ঞাপন আমাদের এই ক্ষুদ্র প্রয়াস।',
    history: [
      { year: '২০২৫', date: '০৫ অক্টোবর, ২০২৫', title: 'শিক্ষক সম্মাননা ২০২৫', image: 'https://picsum.photos/seed/tea2025/800/450', description: 'বিশ্ব শিক্ষক দিবসে ১০ জন প্রবীণ শিক্ষককে লাইফটাইম অ্যাচিভমেন্ট অ্যাওয়ার্ড প্রদান।' },
      { year: '২০১৭-২০২৪', date: 'ঐতিহ্যবাহী সম্মাননা', title: 'বিগত বছরগুলোর সংকলন', image: 'https://picsum.photos/seed/tea_past/800/450', description: '২০১৭ সাল থেকে নিরবচ্ছিন্নভাবে আমরা শিক্ষকদের সম্মান জানিয়ে আসছি।' },
    ]
  }
};

export const ADVISORS: TeamMember[] = [
  { id: 1, name: 'ড. মোঃ মহিউদ্দিন', role: 'অধ্যাপক, আইবিএ, ঢাকা বিশ্ববিদ্যালয়', image: 'https://i.pravatar.cc/300?u=adv1' },
  { id: 2, name: 'জনাব মোঃ মোশারফ হোসেন', role: 'হিসাব রক্ষণ কর্মকর্তা, প্রাথমিক শিক্ষা অধিদপ্তর', image: 'https://i.pravatar.cc/300?u=adv2' },
  { id: 3, name: 'জনাব আসাদুজ্জামান তালুকদার', role: 'ব্যবস্থাপনা পরিচালক, মাস শেল্টার এন্ড টেকনোলজি', image: 'https://i.pravatar.cc/300?u=adv3' },
];

export const EXECUTIVE_COUNCIL: TeamMember[] = [
  { id: 1, name: 'মোঃ আব্দুল করিম', role: 'সভাপতি', image: 'https://i.pravatar.cc/300?u=e1' },
  { id: 2, name: 'রহিমা খাতুন', role: 'সাধারণ সম্পাদক', image: 'https://i.pravatar.cc/300?u=e2' },
  { id: 3, name: 'সৈয়দ আহমেদ', role: 'কোষাধ্যক্ষ', image: 'https://i.pravatar.cc/300?u=e3' },
  { id: 4, name: 'মোরশেদ আলম', role: 'সাংগঠনিক সম্পাদক', image: 'https://i.pravatar.cc/300?u=e4' },
  { id: 5, name: 'নাজমুন নাহার', role: 'দপ্তর সম্পাদক', image: 'https://i.pravatar.cc/300?u=e5' },
  { id: 6, name: 'তরিকুল ইসলাম', role: 'সদস্য', image: 'https://i.pravatar.cc/300?u=e6' },
];

export const GENERAL_MEMBERS: TeamMember[] = [
  { id: 1, name: 'শাকিল আহমেদ', role: 'সদস্য', image: 'https://i.pravatar.cc/300?u=g1' },
  { id: 2, name: 'ফরিদা ইয়াসমিন', role: 'সদস্য', image: 'https://i.pravatar.cc/300?u=g2' },
  { id: 3, name: 'মেহেদী হাসান', role: 'সদস্য', image: 'https://i.pravatar.cc/300?u=g3' },
  { id: 4, name: 'আরিফুল ইসলাম', role: 'সদস্য', image: 'https://i.pravatar.cc/300?u=g4' },
  { id: 5, name: 'নাসরিন আক্তার', role: 'সদস্য', image: 'https://i.pravatar.cc/300?u=g5' },
  { id: 6, name: 'জহিরুল হক', role: 'সদস্য', image: 'https://i.pravatar.cc/300?u=g6' },
];

export const WELL_WISHERS: TeamMember[] = [
  { id: 1, name: 'আলমগীর হোসেন', role: 'শুভাকাঙ্ক্ষী', image: 'https://i.pravatar.cc/300?u=w1' },
  { id: 2, name: 'সালমা আক্তার', role: 'শুভাকাঙ্ক্ষী', image: 'https://i.pravatar.cc/300?u=w2' },
  { id: 3, name: 'আব্দুস সাত্তার', role: 'শুভাকাঙ্ক্ষী', image: 'https://i.pravatar.cc/300?u=w3' },
  { id: 4, name: 'জাকারিয়া মাসুম', role: 'শুভাকাঙ্ক্ষী', image: 'https://i.pravatar.cc/300?u=w4' },
];

export const GALLERY_FOLDERS: GalleryFolder[] = [
  {
    id: 1,
    name: 'শিক্ষা কার্যক্রম',
    coverImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&h=400&auto=format&fit=crop',
    images: [
      { id: 101, title: 'বই বিতরণ ১', image: 'https://picsum.photos/seed/edu1/800/600' },
      { id: 102, title: 'স্কুল ব্যাগ প্রদান', image: 'https://picsum.photos/seed/edu2/800/600' },
      { id: 103, title: 'সম্মাননা প্রদান', image: 'https://picsum.photos/seed/edu3/800/600' },
    ]
  },
  {
    id: 2,
    name: 'ত্রাণ ও সহায়তা',
    coverImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&h=400&auto=format&fit=crop',
    images: [
      { id: 201, title: 'বন্যা ত্রাণ বিতরণ', image: 'https://picsum.photos/seed/rel1/800/600' },
      { id: 202, title: 'খাদ্য সামগ্রী বিতরণ', image: 'https://picsum.photos/seed/rel2/800/600' },
    ]
  },
  {
    id: 3,
    name: 'স্বাস্থ্য ও রক্তদান',
    coverImage: 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=600&h=400&auto=format&fit=crop',
    images: [
      { id: 301, title: 'স্বাস্থ্য ক্যাম্প ২০২৪', image: 'https://picsum.photos/seed/hea1/800/600' },
      { id: 302, title: 'রক্তদান কর্মসূচি', image: 'https://picsum.photos/seed/hea2/800/600' },
    ]
  },
];

export const UPCOMING_EVENTS: UpcomingEvent[] = [

  {
    id: 2,
    title: 'সন্ধ্যাতারা ঈদ পুনর্মিলনী ২০২৬ এবং সন্ধ্যাতারা বার্ষিক প্রোগ্রাম ২০২৬',
    date: '২২ মার্চ ২০২৬',
    time: 'সকাল ৯:০০ - বিকাল ৪:০০',
    location: 'সলিয়া বাকপুর ফজলুল হক মাধ্যমিক বিদ্যালয় প্রাঙ্গণ, বানারীপাড়া, বরিশাল',
    description: 'সলিয়া বাকপুর ফজলুল হক মাধ্যমিক বিদ্যালয়ের প্রাক্তন শিক্ষার্থীবৃন্দ এবং তাদের ফ্যামিলি মেম্বার, যারা সম্ভাবতার ব্যানারে এই প্রোগ্রামে অংশগ্রহণের জন্য নিবন্ধন করবেন',
    image: edi
  }
];

export const NOTICES: Notice[] = [
  { id: 1, title: 'নতুন সদস্য পদের জন্য আবেদনপত্র গ্রহণ শুরু হয়েছে।', date: '১০ মার্চ, ২০২৪', description: 'আগ্রহী ব্যক্তিরা অনলাইন বা অফলাইনে আবেদন করতে পারবেন।' },
  { id: 2, title: '২০২৩ সালের বার্ষিক অডিট রিপোর্ট প্রকাশ।', date: '০৫ মার্চ, ২০২৪', description: 'স্বচ্ছতা নিশ্চিতে আমাদের ওয়েবসাইট থেকে রিপোর্টটি ডাউনলোড করুন।' },
  { id: 3, title: 'রক্তদাতা তালিকার তথ্য হালনাগাদ বিষয়ক বিজ্ঞপ্তি।', date: '০১ মার্চ, ২০২৪', description: 'সবাইকে অনুরোধ করা যাচ্ছে আপনাদের রক্তের গ্রুপ পুনরায় নিশ্চিত করতে।' }
];

export const FAQS: FAQItem[] = [
  { question: 'আমি কিভাবে স্বেচ্ছাসেবক হিসেবে যোগ দিতে পারি?', answer: 'আপনি আমাদের ওয়েবসাইট থেকে স্বেচ্ছাসেবক ফরম পূরণ করে আবেদন করতে পারেন অথবা আমাদের অফিসে সরাসরি যোগাযোগ করতে পারেন।' },
  { question: 'আপনাদের কার্যক্রমের স্বচ্ছতা কিভাবে নিশ্চিত করেন?', answer: 'আমরা প্রতিটি প্রকল্পের জন্য পৃথক ব্যাংক অ্যাকাউন্ট ব্যবহার করি এবং বছর শেষে রেজিস্টার্ড অডিটর দ্বারা অডিট রিপোর্ট প্রকাশ করি।' },
  { question: 'আমি কি নির্দিষ্ট কোনো প্রকল্পে দান করতে পারি?', answer: 'হ্যাঁ, আপনি আমাদের যেকোনো চলমান প্রকল্পে নির্দিষ্টভাবে দান করতে পারেন। সেক্ষেত্রে দানে নির্দিষ্ট প্রকল্পের নাম উল্লেখ করতে হবে।' }
];
