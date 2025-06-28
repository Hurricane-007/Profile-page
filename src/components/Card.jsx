import React from 'react';

const Card = () => {
  return (
    <div className="max-w-md mx-auto bg-slate-900/80 rounded-2xl shadow-xl p-8 border border-slate-700 mt-8 text-white">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        About Me
      </h2>
      <p className="text-slate-300 leading-relaxed">
      <h1 className='text-xl mb-4'>👋 Hi, I’m Aryan Singh,</h1>
I'm a B.Tech student in Mathematics and Computing at IIT Jammu, with a passion for building full-stack web and mobile apps using Flutter, Node.js, and MongoDB. I’ve developed real-time chat, notes, and fitness apps, and implemented advanced graph algorithms in C++.

With a solid grasp of DSA, machine learning, and modern frameworks, I enjoy crafting clean, scalable solutions. I’ve held leadership roles in campus clubs and fests, and earned accolades in trading, case studies, and COO leadership challenges.

I'm always exploring new tools, solving problems on LeetCode, and contributing to impactful tech projects.
      </p>
    </div>
  );
};

export default Card;