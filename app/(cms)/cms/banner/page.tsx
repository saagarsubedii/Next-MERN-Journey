import Link from 'next/link';

export default function BannerListPage() {
  return (
    <div className="w-full flex flex-col gap-4 p-4">
                {/* Top Section: Create Button */}
        <div className="flex justify-between items-center mb-6">
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
      <div className="w-full flex justify-end">
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
            <tr>
              {/* Title Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* Image Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* URL Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* Status Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* Actions Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
            </tr>
             <tr>
              {/* Title Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* Image Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* URL Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* Status Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* Actions Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
            </tr>
             <tr>
              {/* Title Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* Image Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* URL Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* Status Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* Actions Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
            </tr> <tr>
              {/* Title Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* Image Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* URL Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* Status Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* Actions Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
            </tr> <tr>
              {/* Title Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* Image Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* URL Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* Status Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* Actions Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
            </tr> <tr>
              {/* Title Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* Image Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* URL Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* Status Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* Actions Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
            </tr> <tr>
              {/* Title Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* Image Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* URL Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* Status Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* Actions Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
            </tr> <tr>
              {/* Title Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* Image Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* URL Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* Status Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* Actions Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
            </tr> <tr>
              {/* Title Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* Image Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* URL Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* Status Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* Actions Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
            </tr> <tr>
              {/* Title Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* Image Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* URL Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* Status Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
              {/* Actions Column Loading Skeleton */}
              <td className="p-3 border border-gray-800">
                <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse"></p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
