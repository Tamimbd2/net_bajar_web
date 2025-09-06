import React from 'react';
import Footer from '../components/Footer';

interface AboutPageProps {
  onBack: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
  return (
    <>
      <main className="bg-white min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
          <button
            onClick={onBack}
            className="mb-8 inline-flex items-center text-gray-600 hover:text-[#FF0061] transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            হোমপেজে ফিরে যান
          </button>

          <div className="max-w-4xl mx-auto bg-gray-50 p-8 sm:p-12 rounded-lg shadow-md">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-black text-center mb-6">আমাদের সম্পর্কে</h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Net-Bazar হলো আপনার ফ্যাশন অনলাইন মার্কেটপ্লেস, যেখানে আপনি সহজেই নতুন ট্রেন্ডিং পোশাক কিনতে পারবেন। আমাদের লক্ষ্য হলো সর্বোত্তম মানের পণ্য, দ্রুত ডেলিভারি, এবং সরাসরি WhatsApp যোগাযোগের মাধ্যমে সহজ অর্ডারিং সুবিধা প্রদান করা।
            </p>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">আমরা আপনাকে অফার করি:</h2>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>আধুনিক এবং স্টাইলিশ T-shirt, Polo Shirt, Shirt, Panjabi, এবং Custom Printed T-shirt।</li>
                <li>ঢাকার ভিতরে ১ দিনের ডেলিভারি, ঢাকার বাইরে ৩ দিনের ডেলিভারি।</li>
                <li>ব্যবহার বান্ধব ওয়েবসাইট এবং WhatsApp অর্ডারিং সিস্টেম, যাতে আপনার অর্ডার দেওয়া হয়ে যায় সহজ ও দ্রুত।</li>
              </ul>
            </div>
            
            <div className="mt-10 pt-6 border-t border-gray-200">
               <p className="text-xl font-semibold text-gray-800">Founder: <span className="font-bold text-[#FF0061]">Monarul Islam</span></p>
            </div>

            <p className="text-center text-gray-700 mt-8 text-lg">
                Net-Bazar এ আমাদের লক্ষ্য, আপনাকে ফ্যাশনেবল পণ্যগুলো সহজে ও নিরাপদে পৌঁছে দেওয়া।
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
