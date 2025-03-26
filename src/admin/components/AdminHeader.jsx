import { Icon } from '@iconify/react';

const AdminHeader = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <div className="flex items-center md:hidden">
        <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
      </div>
      
      <div className="hidden md:block">
        <div className="relative">
          <Icon icon="tabler:search" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 w-64"
          />
        </div>
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
          <button className="flex items-center text-gray-700 hover:text-blue-600">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-2">
              AJ
            </div>
            <span className="hidden md:block">Alex Johnson</span>
            <Icon icon="tabler:chevron-down" className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
