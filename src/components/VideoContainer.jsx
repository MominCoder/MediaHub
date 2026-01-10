import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YT_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const response = await fetch(YT_VIDEOS_API);
      const data = await response.json();
      setVideos(data.items);
    };

    getVideos();
  }, []);

  return (
    <div className="px-5 grid max-[430px]:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {videos &&
        videos.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
