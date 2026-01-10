import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";
import { useMobileSearch } from "../hooks/useMobileSearch";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const { isMobileSearchOpen, openMobileSearch, closeMobileSearch } =
    useMobileSearch();

  return (
    <header className="px-2.5 sm:px-10 xl:px-5 py-2 flex items-center justify-between gap-5">
      {/* LEFT SECTION (hidden only when mobile search is open) */}
      {!isMobileSearchOpen && (
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-7 max-[430px]:basis-3/4">
          <button
            onClick={() => dispatch(toggleSidebar())}
            className="p-2.5 -ml-2 hover:bg-gray-200 rounded-full"
          >
            <img
              src="/public/assets/images/hamburger.svg"
              alt="Menu"
              className="max-h-4 sm:max-h-6 cursor-pointer"
            />
          </button>

          <Link to={"/"}>
            <img
              src="/public/assets/images/YouTube-Logo.svg"
              alt="Logo"
              className="max-h-4 sm:max-h-6 cursor-pointer"
            />
          </Link>
        </div>
      )}

      {/* SEARCH */}
      <div className="flex-1 flex justify-center">
        {/* MOBILE SEARCH (≤ 430px only) */}
        {isMobileSearchOpen && (
          <div className="flex items-center gap-2 w-full">
            <button onClick={closeMobileSearch}>
              <img
                src="/public/assets/images/arrow-back.svg"
                alt="Back"
                className="max-h-4 sm:max-h-6 cursor-pointer"
              />
            </button>

            <div className="flex w-full">
              <input
                type="search"
                placeholder="Search"
                className="pl-5 py-1 sm:py-2 w-full border border-gray-400 rounded-l-full outline-blue-400"
              />
              <button className="px-4 border border-l-0 border-gray-400 rounded-r-full bg-gray-100 hover:bg-gray-200">
                <img
                  src="/public/assets/images/search.svg"
                  alt="Search"
                  className="h-5"
                />
              </button>
            </div>
          </div>
        )}

        {/* DESKTOP SEARCH (always visible when mobile search is closed) */}
        {!isMobileSearchOpen && (
          <div className="hidden min-[431px]:flex w-full max-w-xl">
            <input
              type="search"
              placeholder="Search"
              className="flex-1 px-4 py-2 w-full border border-gray-400 rounded-l-full outline-blue-400"
            />
            <button className="px-4 border border-l-0 border-gray-400 rounded-r-full bg-gray-100 hover:bg-gray-200">
              <img
                src="/public/assets/images/search.svg"
                alt="Search"
                className="max-h-4 sm:max-h-6"
              />
            </button>
          </div>
        )}
      </div>

      {/* RIGHT SECTION */}
      {!isMobileSearchOpen && (
        <div className="flex items-center gap-3">
          {/* MOBILE SEARCH ICON (≤ 430px) */}
          <button
            onClick={openMobileSearch}
            className="block min-[431px]:hidden"
          >
            <img
              src="/public/assets/images/search.svg"
              alt="Search"
              className="max-h-4 sm:max-h-6"
            />
          </button>

          <img
            src="/public/assets/images/user-profile.svg"
            alt="User"
            className="max-h-4 sm:max-h-6"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
