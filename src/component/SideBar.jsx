import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";

const SideBar = ({ hidden }) => {
  const dispatch = useDispatch();

  const handleSidebarToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div
      className={`fixed inset-0 z-40 transition-opacity duration-300
      ${
        hidden
          ? "opacity-0 pointer-events-none"
          : "opacity-100 pointer-events-auto"
      }
    `}
    >
      {/* Overlay */}
      <div className=" bg-black/60">
        {/* Sidebar */}
        <div
          className={`bg-white pt-3.75 w-1/4 h-full transform transition-transform duration-300 ease-out ${
            hidden ? "-translate-x-full" : "translate-x-0"
          } `}
        >
          <div className="px-10 xl:px-5">
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
          </div>

          <div
            className="flex flex-col max-h-screen hover:overflow-y-auto [&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-white
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-400"
          >
            <div className="px-10 xl:px-5 py-5 border-b border-opacity-10">
              <ul className="flex flex-col gap-4">
                <li className="flex gap-6">
                  <figure>
                    <img
                      className="max-h-6"
                      src="/public/assets/images/home.svg"
                      alt="Home"
                    />
                  </figure>
                  <span>Home</span>
                </li>
                <li className="flex gap-6">
                  <figure>
                    <img
                      className="max-h-6"
                      src="/public/assets/images/reels.svg"
                      alt="Shorts"
                    />
                  </figure>
                  <span>Shorts</span>
                </li>
              </ul>
            </div>

            <div className="px-10 xl:px-5 py-5 border-b border-opacity-10">
              <h2 className="text-lg font-medium mb-4">You {">"}</h2>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-6">
                  <figure>
                    <img
                      className="max-h-6"
                      src="/public/assets/images/history.svg"
                      alt="history"
                    />
                  </figure>
                  <span>History</span>
                </li>
                <li className="flex gap-6">
                  <figure>
                    <img
                      className="max-h-6"
                      src="/public/assets/images/download.svg"
                      alt="Downloads"
                    />
                  </figure>
                  <span>Downloads</span>
                </li>
                <li className="flex gap-6">
                  <figure>
                    <img
                      className="max-h-6"
                      src="/public/assets/images/like.svg"
                      alt="like"
                    />
                  </figure>
                  <span>Liked videos</span>
                </li>
              </ul>
            </div>

            <div className="px-10 xl:px-5 py-5 border-b border-opacity-10">
              <h2 className="text-lg font-medium mb-4">Explore {">"}</h2>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-6">
                  <figure>
                    <img
                      className="max-h-6"
                      src="/public/assets/images/shopping.svg"
                      alt="Shopping"
                    />
                  </figure>
                  <span>Shopping</span>
                </li>
                <li className="flex gap-6">
                  <figure>
                    <img
                      className="max-h-6"
                      src="/public/assets/images/music.svg"
                      alt="Music"
                    />
                  </figure>
                  <span>Music</span>
                </li>
                <li className="flex gap-6">
                  <figure>
                    <img
                      className="max-h-6"
                      src="/public/assets/images/news.svg"
                      alt="news"
                    />
                  </figure>
                  <span>News</span>
                </li>
                <li className="flex gap-6">
                  <figure>
                    <img
                      className="max-h-6"
                      src="/public/assets/images/podcast.svg"
                      alt="podcast"
                    />
                  </figure>
                  <span>Podcast</span>
                </li>
                <li className="flex gap-6">
                  <figure>
                    <img
                      className="max-h-6"
                      src="/public/assets/images/gaming.svg"
                      alt="gaming"
                    />
                  </figure>
                  <span>Gaming</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
