
import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showToast, setShowToast] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'আপনার নাম লিখুন';
    if (!formData.mobile) newErrors.mobile = 'মোবাইল নম্বর লিখুন';
    else if (!/^\d{11}$/.test(formData.mobile)) newErrors.mobile = '১১ ডিজিটের সঠিক নম্বর দিন';
    if (!formData.message) newErrors.message = 'আপনার বার্তা লিখুন';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      setErrors({});
      setShowToast(true);
      setFormData({ name: '', mobile: '', email: '', message: '' });
      setTimeout(() => setShowToast(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-teal-900 mb-4">যোগাযোগ করুন</h1>
            <p className="text-slate-500 max-w-2xl mx-auto">যেকোনো প্রশ্ন বা সহযোগিতার জন্য আমাদের সাথে যোগাযোগ করতে দ্বিধা করবেন না। আমরা আপনার বার্তার অপেক্ষায় আছি।</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-8">
              {[
                { title: 'আমাদের ঠিকানা', info: 'সলিয়া বাকপুর, বানারীপাড়া, বরিশাল', color: 'teal', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' },
                { title: 'ফোন করুন', info: '+8880 1711-192588', color: 'blue', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21' },
                { title: 'ইমেইল', info: 'info@sondhatara.org\nsupport@sondhatara.org', color: 'emerald', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8' }
              ].map((item, idx) => (
                <ScrollReveal key={idx} animation="slide-left" delay={idx * 100}>
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-6 group hover:shadow-md transition-all">
                    <div className={`w-12 h-12 bg-${item.color}-100 text-${item.color}-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-${item.color}-600 group-hover:text-white transition-colors`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}/></svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-teal-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm whitespace-pre-line leading-relaxed">{item.info}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ScrollReveal animation="fade-up">
                <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl shadow-xl border border-slate-100 relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-slate-700 text-sm font-bold mb-2">আপনার নাম *</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 bg-red-50' : 'border-slate-200'} focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all`} 
                        placeholder="আপনার নাম" 
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-slate-700 text-sm font-bold mb-2">মোবাইল নম্বর *</label>
                      <input 
                        type="text" 
                        value={formData.mobile}
                        onChange={e => setFormData({...formData, mobile: e.target.value})}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.mobile ? 'border-red-500 bg-red-50' : 'border-slate-200'} focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all`} 
                        placeholder="১১ ডিজিট মোবাইল নম্বর" 
                      />
                      {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-slate-700 text-sm font-bold mb-2">ইমেইল (ঐচ্ছিক)</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all" 
                      placeholder="আপনার ইমেইল" 
                    />
                  </div>
                  <div className="mb-8">
                    <label className="block text-slate-700 text-sm font-bold mb-2">বার্তা *</label>
                    <textarea 
                      rows={5} 
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500 bg-red-50' : 'border-slate-200'} focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all`} 
                      placeholder="আপনার কথা লিখুন..."
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button 
                    type="submit" 
                    className="w-full py-4 bg-teal-700 text-white rounded-xl font-bold hover:bg-teal-800 transition-all shadow-lg hover:shadow-teal-700/20 btn-shine"
                  >
                    বার্তা পাঠান
                  </button>

                  {showToast && (
                    <div className="fixed bottom-10 right-10 z-[100] bg-teal-600 text-white px-8 py-4 rounded-xl shadow-2xl flex items-center space-x-3 animate-slide-left">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      <span className="font-bold">বার্তা সফলভাবে পাঠানো হয়েছে!</span>
                    </div>
                  )}
                </form>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Contact;
