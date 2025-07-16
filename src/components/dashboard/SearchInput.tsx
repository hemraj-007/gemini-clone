import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';

interface Props {
  onSearch: (value: string) => void;
}

const SearchInput: React.FC<Props> = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(search);
    }, 300);

    return () => clearTimeout(timeout);
  }, [search]);

  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
        <FiSearch size={20} />
      </span>
      <input
        type="text"
        placeholder="Search chatrooms..."
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
