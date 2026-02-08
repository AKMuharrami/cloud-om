import React from 'react';

export const LoadingCloud: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-96 w-full bg-white/50 backdrop-blur-sm rounded-xl border-2 border-dashed border-primary-200">
      <div className="relative w-24 h-24 mb-6">
         <svg className="w-full h-full text-primary-500 animate-bounce" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.5,19c4.142,0,7.5-3.358,7.5-7.5c0-4.142-3.358-7.5-7.5-7.5c-0.414,0-0.821,0.034-1.221,0.098 C15.706,1.862,13.562,0,11,0C6.985,0,3.693,3.095,3.123,7.031C1.353,7.561,0,9.167,0,11.5C0,14.538,2.462,17,5.5,17H17.5z"/>
         </svg>
         <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-2 bg-black/10 rounded-full blur-sm animate-pulse"></div>
      </div>
      <h3 className="text-xl font-bold text-gray-700 animate-pulse">جاري بناء مشروعك...</h3>
      <p className="text-gray-500 mt-2 text-sm">يقوم الذكاء الاصطناعي بكتابة الكود الآن</p>
    </div>
  );
};