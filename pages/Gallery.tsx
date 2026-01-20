
import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { GALLERY_FOLDERS } from '../constants';
import { GalleryFolder } from '../types';
import { Link } from 'react-router-dom';

const Gallery: React.FC = () => {
  const [selectedFolder, setSelectedFolder] = useState<GalleryFolder | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="text-4xl font-bold text-teal-900 mb-6">ফটো গ্যালারি</h1>
            <p className="text-slate-500 max-w-2xl mx-auto mb-10">আমাদের বিভিন্ন কার্যক্রমের স্থিরচিত্র যা আমাদের দীর্ঘ পথচলার সাক্ষী। প্রতিটি ছবি এক একটি সফলতার গল্প বলে।</p>
            
            {selectedFolder && (
              <button
                onClick={() => setSelectedFolder(null)}
                className="flex items-center mx-auto mb-12 px-6 py-2 bg-teal-50 text-teal-700 rounded-full font-bold hover:bg-teal-700 hover:text-white transition-all group"
              >
                <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
                ফোল্ডার লিস্টে ফিরে যান
              </button>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Grid Content */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6">
          {!selectedFolder ? (
            /* Folder View */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {GALLERY_FOLDERS.map((folder, i) => (
                <ScrollReveal key={folder.id} animation="zoom-in" delay={i * 100}>
                  <div 
                    className="group cursor-pointer"
                    onClick={() => setSelectedFolder(folder)}
                  >
                    <div className="relative overflow-hidden rounded-3xl mb-4 aspect-[4/3] bg-slate-100 shadow-sm">
                      <img 
                        src={folder.coverImage} 
                        alt={folder.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-teal-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9l-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-teal-900">
                        {folder.images.length} টি ছবি
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 text-center group-hover:text-teal-700 transition-colors">{folder.name}</h3>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            /* Inside Folder Image View */
            <div>
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-teal-800 mb-2">{selectedFolder.name}</h2>
                <div className="w-16 h-1 bg-teal-500 mx-auto"></div>
              </div>
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {selectedFolder.images.map((item, i) => (
                  <ScrollReveal key={item.id} animation="zoom-in" delay={i * 50}>
                    <div 
                      className="relative group cursor-pointer overflow-hidden rounded-2xl break-inside-avoid shadow-sm hover:shadow-xl transition-all"
                      onClick={() => setSelectedImage(item.image)}
                    >
                      <img src={item.image} alt={item.title} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                        <p className="text-white font-bold">{item.title}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:text-teal-400 transition-colors">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          <img 
            src={selectedImage} 
            alt="Preview" 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
