import { formatTimeAgo } from "../utils/formatters.js";
import { formatCount } from "../utils/formatters.js";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="cursor-pointer">
      <img className="rounded-xl w-full" src={thumbnails.medium.url} alt={title} />

      <div className="mt-2.5">
        <p className="font-semibold">{title}</p>
        <p className="text-gray-500 font-medium text-sm">{channelTitle}</p>
        <p className="text-gray-500 font-medium text-sm">
          {formatCount(statistics.viewCount)} views •{" "}
          {formatTimeAgo(snippet.publishedAt)}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
