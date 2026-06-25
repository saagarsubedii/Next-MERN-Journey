import Link from 'next/link';
import "./globals.css"

export default function NotFound() {
  return (
    <div className="h-screen w-full bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
      {/* Centered Content Wrapper */}
      <div className="flex flex-col items-center max-w-md">
        
        {/* 1. 404 Error Status */}
        <h1 className="text-8xl font-black text-red-600 tracking-tight animate-bounce">
          404
        </h1>

        {/* 2. Gap followed by the Black Main Note */}
        <h2 className="text-3xl font-bold text-black mt-8 mb-3">
          Oops! Page Not Found
        </h2>
        
        {/* Supporting Note */}
        <p className="text-slate-600 mb-10">
          We couldn't find the page you're looking for. It might have been moved or deleted entirely.
        </p>

        {/* 3. Go Back to Home Button */}
        <Link 
          href="/" 
          className="px-6 py-3 bg-orange-500 text-teal-950 font-bold rounded-lg shadow-md hover:bg-orange-400 transition-all transform hover:scale-105 active:scale-95 duration-200"
        >
          Go Back to Home
        </Link>
        
      </div>
    </div>
  );
}