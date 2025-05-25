"use client";
import { useRef } from 'react';

export default function SearchClubs() {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    const query = searchInputRef.current?.value;
    if (query) {
      // Perform search logic here, e.g., redirect to a search results page
      console.log(`Searching for clubs with query: ${query}`);
      // You can use router.push('/search?query=' + encodeURIComponent(query)) if using Next.js
      console.log({ searchInputRef });  
      window.location.href='/clubs/search/' + searchInputRef.current?.value;
    }
  };

  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        ref={searchInputRef}
        placeholder="サークル名で検索..."
        className="items-center border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white rounded-lg px-6 py-2 hover:bg-blue-600 transition-colors"
      >
        検索
      </button>
    </div>
  );
}