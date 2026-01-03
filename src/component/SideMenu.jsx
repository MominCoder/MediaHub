const SideMenu = ({hidden}) => {
  return (
    <div className={`px-9 xl:px-5 py-5 ${hidden ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <ul className="flex flex-col gap-8">
        <li className="flex flex-col gap-1 items-center">
          <figure className="">
            <img
              className="max-h-6"
              src="/public/assets/images/home.svg"
              alt="Home"
            />
          </figure>
          <span className="text-xs">Home</span>
        </li>
        <li className="flex flex-col gap-1 items-center">
          <figure className="">
            <img
              className="max-h-6"
              src="/public/assets/images/reels.svg"
              alt="Shorts"
            />
          </figure>
          <span className="text-xs">Shorts</span>
        </li>
        <li className="flex flex-col gap-1 items-center">
          <figure className="">
            <img
              className="max-h-6"
              src="/public/assets/images/user-profile.svg"
              alt="You"
            />
          </figure>
          <span className="text-xs">You</span>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
