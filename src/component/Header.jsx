import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  
  const handleSidebarToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="px-10 xl:px-5 flex justify-between py-2.5 gap-5 items-center">
      <div className="flex gap-2 sm:gap-4 lg:gap-7">
        <figure
          className="cursor-pointer hover:bg-gray-200 p-2.5 -ml-2.5 -mt-2.5 rounded-full"
          onClick={() => handleSidebarToggle()}
        >
          <img
            src="/public/assets/images/hamburger.svg"
            alt="Hamburger"
            className="w-full max-h-6"
          />
        </figure>
        <figure className="cursor-pointer">
          <img
            src="/public/assets/images/YouTube-Logo.svg"
            alt="Logo"
            className="w-full max-h-6"
          />
        </figure>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="basis-2/4 overflow-hidden"
      >
        <div className="flex w-full">
          <input
            type="search"
            className="pl-5 py-2 border-2 border-r-2 border-gray-400 rounded-l-full block w-full outline-blue-400"
            placeholder="Search"
            autoComplete="false"
            autoCorrect="false"
            spellCheck="false"
          />

          <button
            type="button"
            className="cursor-pointer px-4 py-2 bg-emerald-200 hover:bg-gray-300 border-2 border-l-0 border-gray-400 rounded-r-full"
          >
            <figure className="">
              <img
                src="/public/assets/images/search.svg"
                alt="Search"
                className="w-full max-h-6"
              />
            </figure>
          </button>
        </div>

        {/* <button
            type="button"
            className="cursor-pointer"
          >
            <figure className="">
              <img
                src="/public/assets/images/search.svg"
                alt="Search"
                className="w-full max-h-6"
              />
            </figure>
          </button> */}
      </form>

      <figure className="">
        <img
          src="/public/assets/images/user-profile.svg"
          alt="User Avatar"
          className="w-full max-h-6"
        />
      </figure>
    </div>
  );
};

export default Header;
