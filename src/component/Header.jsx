import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";
import { useMobileSearch } from "../hooks/useMobileSearch";

const Header = () => {
  const dispatch = useDispatch();

  const {
    isMobileSearchOpen,
    openMobileSearch,
    closeMobileSearch,
  } = useMobileSearch();

  return (
    <header className="px-2.5 sm:px-10 xl:px-5 flex justify-between py-2.5 gap-5 items-center">
      {/* LEFT SECTION (hidden only when mobile search is open) */}
      {!isMobileSearchOpen && (
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-7 basis-3/4 sm:basis-auto">
          <button
            onClick={() => dispatch(toggleSidebar())}
            className="hover:bg-gray-200 p-2.5 -ml-2 rounded-full"
          >
            <img
              src="/public/assets/images/hamburger.svg"
              alt="Menu"
              className="max-h-4 sm:max-h-6 cusror-pointer"
            />
          </button>

          <img
            src="/public/assets/images/YouTube-Logo.svg"
            alt="Logo"
            className="max-h-4 sm:max-h-6 cursor-pointer"
          />
        </div>
      )}

      {/* SEARCH */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className={isMobileSearchOpen ? "w-full" : "basis-1/5 sm:basis-2/4"}
      >
        {/* Expanded mobile search */}
        {isMobileSearchOpen && (
          <div className="flex items-center gap-4 sm:hidden">
            <button onClick={closeMobileSearch}>
              <img
                src="/public/assets/images/arrow-back.svg"
                alt="Back"
                className="h-4"
              />
            </button>

            <div className="flex w-full">
              <input
                type="search"
                placeholder="Search"
                className="pl-5 py-1 sm:py-2 border-2 border-gray-400 rounded-l-full w-full outline-blue-400"
              />

              <button
                type="button"
                className="px-2 sm:px-4 bg-emerald-200 hover:bg-gray-300 border-2 border-l-0 border-gray-400 rounded-r-full"
              >
                <img
                  src="/public/assets/images/search.svg"
                  alt="Search"
                  className="max-h-4 sm:max-h-6"
                />
              </button>
            </div>
          </div>
        )}

        {/* Desktop search */}
        <div className="hidden sm:flex w-full">
          <input
            type="search"
            placeholder="Search"
            className="pl-5 py-2 border-2 border-gray-400 rounded-l-full w-full outline-blue-400"
          />

          <button
            type="button"
            className="px-4 bg-emerald-200 hover:bg-gray-300 border-2 border-l-0 border-gray-400 rounded-r-full"
          >
            <img
              src="/public/assets/images/search.svg"
              alt="Search"
              className="max-h-4 sm:max-h-6"
            />
          </button>
        </div>

        {/* Mobile search icon */}
        {!isMobileSearchOpen && (
          <button
            type="button"
            onClick={openMobileSearch}
            className="sm:hidden w-full flex justify-end"
          >
            <img
              src="/public/assets/images/search.svg"
              alt="Search"
              className="max-h-4 sm:max-h-6"
            />
          </button>
        )}
      </form>

      {/* USER AVATAR */}
      {!isMobileSearchOpen && (
        <img
          src="/public/assets/images/user-profile.svg"
          alt="User"
          className="max-h-4 sm:max-h-6"
        />
      )}
    </header>
  );
};

export default Header;