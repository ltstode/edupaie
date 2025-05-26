
import React from 'react';

interface LoadingAnimationProps {
  title?: string;
  words?: string[];
}

export function LoadingAnimation({ 
  title = "loading", 
  words = ["données", "rapports", "paiements", "employés", "analyses"] 
}: LoadingAnimationProps) {
  return (
    <div className="bg-gray-800 p-4 px-8 rounded-2xl">
      <div className="flex items-center text-gray-400 font-medium text-2xl font-inter h-10 p-2.5 rounded-lg">
        <span className="mr-2">{title}</span>
        <div className="words overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-transparent to-gray-800 z-20 pointer-events-none"></div>
          {words.map((word, index) => (
            <span 
              key={index}
              className="word block h-full pl-1.5 text-purple-400 animate-[spin_words_4s_infinite]"
              style={{ animationDelay: `${index * 0.8}s` }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes spin_words {
          10% { transform: translateY(-102%); }
          25% { transform: translateY(-100%); }
          35% { transform: translateY(-202%); }
          50% { transform: translateY(-200%); }
          60% { transform: translateY(-302%); }
          75% { transform: translateY(-300%); }
          85% { transform: translateY(-402%); }
          100% { transform: translateY(-400%); }
        }
      `}</style>
    </div>
  );
}
