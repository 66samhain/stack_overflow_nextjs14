import React from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';

function LocalSearch() {
  return (
    <div className="relative w-full">
      <div className="background-light800_darkgradient relative flex min-h-[56px] flex-1 grow items-center gap-4 rounded-[10px] px-4">
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />

        <Input
          type="text"
          placeholder="Search questions..."
          value=""
          className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
        />
      </div>
    </div>
  );
}

export default LocalSearch;