'use client';
import React from 'react';
import Image from "next/image";




export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className=" text-green-800 font-bold text-xl px-2 py-1 rounded-full">
              <Image src="/images/logo.jpg" alt={''} className='rounded-full' width={80} height={50}/>
            </div>
            <div>
              <p className="font-semibold">Yetebaberut Beherawi Petroleum</p>
              <h2 className="justify-center text-center">የተባበሩት ብሔራዊ ፔትሮሊየም (የብፔ)</h2>
              <p className="text-sm text-center text-gray-400">Bale Robe Branch</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">© 2025 YBP Share Company. All rights reserved.</p>
            <p className="text-sm text-gray-400">Bale Robe City, Oromia Region, Ethiopia</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
