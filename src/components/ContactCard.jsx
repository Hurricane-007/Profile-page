import React from 'react';

const ContactCard = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-slate-900/80 rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-slate-700 mt-4 sm:mt-8 text-white">
      <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Contact Me
      </h2>
      <div className="space-y-2 text-xl sm:text-2xl md:text-lg">
        <div>
          <span className="font-semibold text-slate-300">Email: </span>
          <a href="mailto:aryan31122004@gmail.com" className="text-purple-400 hover:underline break-all">
            aryan31122004@gmail.com
          </a>
        </div>
        <div>
          <span className="font-semibold text-slate-300">LinkedIn: </span>
          <a href="https://linkedin.com/in/aryan-singh-6507a3268" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline break-all">
            linkedin.com/in/aryan-singh
          </a>
        </div>
        <div>
          <span className="font-semibold text-slate-300">GitHub: </span>
          <a href="https://github.com/Hurricane-007" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline break-all">
            Hurricane-007
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;