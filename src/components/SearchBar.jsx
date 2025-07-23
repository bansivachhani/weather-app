import React, { useState } from 'react';
import { Search } from 'lucide-react';

function SearchBar({ setCity, error }) {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    if (input.trim()) {
      setCity(input.trim());
      setInput('');
    }
  };

  return (
    <div className="flex flex-col items-center mb-6">
      <div className="flex w-11/12 md:w-2/3 lg:w-1/2 glass-card rounded-full overflow-hidden">
        <input
          type="text"
          placeholder="Search city..."
          className="flex-grow px-4 py-2 bg-transparent text-white placeholder-white outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-white bg-opacity-10 hover:bg-opacity-20 text-white flex items-center justify-center transition"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>

      {error && (
        <div className="text-red-300 text-sm mt-2 text-center px-2">
          {error}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
