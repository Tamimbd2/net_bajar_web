import React, { useState } from 'react';
import Footer from '../components/Footer';

interface AdminLoginPageProps {
  onLoginAttempt: (code: string) => void;
  onBack: () => void;
  error: string | null;
}

const AdminLoginPage: React.FC<AdminLoginPageProps> = ({ onLoginAttempt, onBack, error }) => {
  const [code, setCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginAttempt(code);
  };

  return (
    <div className="flex flex-col min-h-screen">
        <main className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">অ্যাডমিন লগইন</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm">
                        <div>
                            <label htmlFor="code" className="sr-only">অ্যাডমিন কোড</label>
                            <input
                                id="code"
                                name="code"
                                type="password"
                                required
                                className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#FF0061] focus:border-[#FF0061] focus:z-10 sm:text-sm"
                                placeholder="অ্যাডমিন কোড"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                            />
                        </div>
                    </div>

                    {error && <p className="text-red-500 text-sm text-center font-medium">{error}</p>}

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#FF0061] hover:bg-[#D60051] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF0061]"
                        >
                            লগইন করুন
                        </button>
                    </div>
                     <div>
                        <button
                            type="button"
                            onClick={onBack}
                            className="group relative w-full flex justify-center py-3 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                        >
                            হোমপেজে ফিরে যান
                        </button>
                    </div>
                </form>
            </div>
        </main>
        <Footer />
    </div>
  );
};

export default AdminLoginPage;
