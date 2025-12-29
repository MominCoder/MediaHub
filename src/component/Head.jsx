const Head = () => {
  return (
    <div className="flex justify-between py-2.5 gap-5 items-center">
      <div className="flex gap-2 sm:gap-4 lg:gap-7">
        <figure className="">
          <img
            src="/public/assets/images/hamburger.svg"
            alt="Hamburger"
            className="w-full max-h-6"
          />
        </figure>
        <figure className="">
          <img
            src="/public/assets/images/YouTube-Logo.svg"
            alt="Logo"
            className="w-full max-h-6"
          />
        </figure>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex-2 overflow-hidden"
      >
        <div class="flex w-full">
          <input
            type="search"
            className="pl-5 py-2 border-2 border-r-2 border-gray-400 rounded-l-full block w-full outline-blue-400"
            placeholder="Search"
            autoComplete={false}
            autoCorrect={false}
            spellCheck={false}
          />

          <button
            type="button"
            className="cursor-pointer px-4 py-2 hover:bg-gray-300 border-2 border-l-0 border-gray-400 rounded-r-full"
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

export default Head;
