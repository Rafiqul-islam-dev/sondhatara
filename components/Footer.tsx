
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../asset/logo-sondatara.jpg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              
              <img src={logo} alt="সন্ধ্যাতারা লোগো" className="w-[200px] h-20" />
            </div>
            <p className="text-sm leading-relaxed mb-6">
              আমরা একটি অলাভজনক সামাজিক সংস্থা, যারা মানবতার সেবায় এবং সমাজ সংস্কারে নিরলস কাজ করে যাচ্ছি।
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61569204872121" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.918 4.918 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">দ্রুত লিঙ্ক</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-teal-400 transition-colors">আমাদের কথা</Link></li>
              <li><Link to="/activities" className="hover:text-teal-400 transition-colors">কার্যক্রমসমূহ</Link></li>
              <li><Link to="/gallery" className="hover:text-teal-400 transition-colors">ফটো গ্যালারি</Link></li>
              <li><Link to="/contact" className="hover:text-teal-400 transition-colors">যোগাযোগ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">গুরুত্বপূর্ণ</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/contact" className="hover:text-teal-400 transition-colors">স্বেচ্ছাসেবক ফরম</Link></li>
              <li><Link to="/" className="hover:text-teal-400 transition-colors">নোটিশ বোর্ড</Link></li>
              <li><Link to="/" className="hover:text-teal-400 transition-colors">ইভেন্ট ক্যালেন্ডার</Link></li>
              <li><Link to="/contact" className="hover:text-teal-400 transition-colors">দান করুন</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">যোগাযোগ করুন</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-teal-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>সলিয়া বাকপুর,<br/>বানারীপাড়া, বরিশাল</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>+880 1711-192588</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© ২০২৬ সন্ধ্যাতারা জনকল্যাণ সংস্থা। সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-white">প্রাইভেসি পলিসি</a>
            <a href="#" className="hover:text-white">টার্মস অফ সার্ভিস</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
