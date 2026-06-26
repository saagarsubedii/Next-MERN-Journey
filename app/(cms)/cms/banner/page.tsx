import { TableRowSkeletion } from '@/components/ui/table/RowSkeletion';
import Link from 'next/link';

export default function BannerListPage() {
  return (
    <div className=" w-full flex flex-col gap-2 p-1">
                {/* Top Section: Create Button */}
        <div className=" bg-gray-200 rounded-full flex justify-between items-center mb-6">
            {/* Left Side: Bold ra thulo heading text */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Banner Listing Page
            </h1>

            {/* Right Side: Create Banner Link */}
            <div>
                <Link
                href="/cms/banner/create"
                className="p-2 px-6 rounded-full text-center bg-teal-800 text-white hover:underline hover:bg-teal-900 inline-block font-medium"
                >
                Create Banner
                </Link>
            </div>
        </div>

      {/* Search Bar Section */}
      <div className="w-full flex justify-end p-2 gap-2">
        <form className="w-1/3">
          <input
            type="search"
            className="px-5 p-2 rounded-full bg-white w-full shadow-lg border border-gray-200"
            placeholder="Enter your search keyword"
          />
        </form>
      </div>

      {/* Table Section */}
      <div className="w-full flex">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="bg-gray-950 text-white text-center p-3 border border-gray-800">Title</th>
              <th className="bg-gray-950 text-white text-center p-3 border border-gray-800">Image</th>
              <th className="bg-gray-950 text-white text-center p-3 border border-gray-800">URL</th>
              <th className="bg-gray-950 text-white text-center p-3 border border-gray-800">Status</th>
              <th className="bg-gray-950 text-white text-center p-3 border border-gray-800">Actions</th>
            </tr>
          </thead>

          <tbody>
            <TableRowSkeletion rows={10} cols={5} /> 
            
          </tbody>
        </table>
      </div>
    </div>
  );
}
