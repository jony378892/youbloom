import { IoSearchSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import useUser from "../hooks/useUser";

export default function SearchBox() {
  const { searchText, setSearchText } = useUser();

  return (
    <div className="mb-5">
      <label htmlFor="search" className="block font-medium">
        Search in YouBloom
      </label>
      <div className="mt-2">
        <div className="flex items-center rounded-md pl-3 border-gray-400 border">
          <div className="shrink-0 text-base text-gray-400 select-none">
            <IoSearchSharp className="size-6" />
          </div>
          <input
            id="search"
            name="search"
            type="text"
            value={searchText}
            placeholder="Find any post by title or description"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
            onChange={(e) => setSearchText(e.target.value)}
          />
          {searchText && (
            <div
              className="shrink-0 text-base text-gray-800 select-none cursor-pointer"
              onClick={setSearchText("")}
            >
              <MdCancel className="size-4 mr-4" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
