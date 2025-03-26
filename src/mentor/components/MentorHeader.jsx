
import { Icon } from '@iconify/react';

const MentorHeader = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex justify-end items-center">
      <div className="flex items-center md:hidden">
        <h1 className="text-xl font-bold text-purple-700">Mentor Portal</h1>
      </div>
      
      <div className="flex items-center">
        <div className="mr-4 relative">
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <Icon icon="tabler:bell" className="h-5 w-5 text-gray-600" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
        
        <div className="mr-4">
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <Icon icon="tabler:mail" className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        
        <div className="relative">
          <button className="flex items-center text-gray-700 hover:text-purple-600">
            <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-bold mr-2">
              MB
            </div>
            <span className="hidden md:block">Michelle Brown</span>
            <Icon icon="tabler:chevron-down" className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default MentorHeader;
