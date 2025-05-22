"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
            <Image
                src={"/logo.png"}
                alt={"Logo"}
                width={100}
                height={100}
                className="h-10 w-auto sm:h-12 object-contain"
            />
        </Link>
        <h1 className="text-lg sm:text-xl font-bold">
            大阪大学外国語学部文化部連絡協議会
        </h1>
        <ul className="hidden md:flex space-x-6 flex space-x-6 text-sm sm:text-base font-medium">
            <li>
            <Link
                href="/"
                className="hover:text-blue-600 transition-colors duration-200"
            >
                ホーム
            </Link>
            </li>
            <li>
            <Link
                href="/clubs"
                className="hover:text-blue-600 transition-colors duration-200"
            >
                外語サークル図鑑
            </Link>
            </li>
            <li>
            <Link
                href="/events"
                className="hover:text-blue-600 transition-colors duration-200"
            >
                イベント
            </Link>
            </li>
        </ul>
        <button className="md:hidden text-2xl text-bold" onClick={()=>setIsOpen(!isOpen)}>
            ≡
        </button>

        </div>
        {
        isOpen && (
            <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 w-full">
            <ul className="space-y-2 items-center">
                <li>
                <Link href="/" onClick={() => setIsOpen(false)}>
                    <span className="block text-6xl font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                    ホーム
                    </span>
                </Link>
                </li>
                <li>
                <Link href="/clubs" onClick={() => setIsOpen(false)}>
                    <span className="block text-6xl font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                    外語サークル図鑑
                    </span>
                </Link>
                </li>
                <li>
                <Link href="/events" onClick={() => setIsOpen(false)}>
                    <span className="block text-6xl font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                    イベント
                    </span>
                </Link>
                </li>
            </ul>
            </div>
        )
        }
    </nav>
  )
}
