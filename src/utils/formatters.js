export function formatCount(count) {
  const num = Number(count);

  if (num < 1000) return num.toString();
  if (num < 1000000) return (num / 1_000).toFixed(1).replace('.0', '') + 'K';
  if (num < 1000000000) return (num / 1_000_000).toFixed(1).replace('.0', '') + 'M';

  return (num / 1_000_000_000).toFixed(1).replace('.0', '') + 'B';
}

export function formatTimeAgo(dateString) {
  const now = new Date();
  const past = new Date(dateString);
  const seconds = Math.floor((now - past) / 1000);

  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'week', seconds: 604800 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
    }
  }

  return 'Just now';
}