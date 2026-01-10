import { formatDuration, formatTimeAgo } from "../utils/formatters.js";
import { formatCount } from "../utils/formatters.js";

const VideoCard = ({ info }) => {
  const { contentDetails, snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="cursor-pointer">
      <div className="relative">
        <img
          className="rounded-xl w-full"
          src={thumbnails.medium.url}
          alt={title}
        />
        <span className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-1.5 py-0.5 rounded-md">
          {formatDuration(contentDetails.duration)}
        </span>
      </div>

      <div className="mt-2.5">
        <p className="font-semibold line-clamp-2">{title}</p>
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
