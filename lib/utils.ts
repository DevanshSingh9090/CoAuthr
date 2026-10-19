import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Joins class names and resolves Tailwind conflicts.
 * cn("px-2 px-4", cond && "font-bold") -> "px-4 font-bold"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Turns any value into plain JSON data.
 * Server actions can only return serialisable values, and Liveblocks/Clerk
 * responses contain class instances and Dates, so we round-trip through JSON.
 */
export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

/**
 * Converts a role chosen in the UI into Liveblocks access scopes.
 * creator / editor -> can edit, viewer -> read-only (but can still show presence)
 */
export const getAccessType = (userType: UserType): AccessType => {
  switch (userType) {
    case "creator":
    case "editor":
      return ["room:write"];
    case "viewer":
    default:
      return ["room:read", "room:presence:write"];
  }
};

/**
 * Human-friendly relative time: "just now", "5 minutes ago", "2 days ago", "3 weeks ago".
 */
export const timeAgo = (timestamp: string | Date): string => {
  const seconds = Math.round((Date.now() - new Date(timestamp).getTime()) / 1000);

  if (seconds < 60) return "just now";

  // Largest unit first; the first one that fits wins
  const units: [seconds: number, label: string][] = [
    [60 * 60 * 24 * 30, "month"],
    [60 * 60 * 24 * 7, "week"],
    [60 * 60 * 24, "day"],
    [60 * 60, "hour"],
    [60, "minute"],
  ];

  for (const [size, label] of units) {
    if (seconds >= size) {
      const count = Math.floor(seconds / size);
      return `${count} ${label}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
};

// Cursor / avatar-ring colours. Chosen to stay readable on the dark Coauthr page.
export const userColors = [
  "#F5B544", // amber
  "#F26D7D", // rose
  "#5EA8FF", // sky
  "#B58CFF", // violet
  "#FF8A5B", // tangerine
  "#4FD1C5", // teal
  "#FF6FB5", // pink
  "#9BE564", // lime
  "#FFD166", // sunflower
  "#6C9BFF", // periwinkle
  "#E879F9", // orchid
  "#34D399", // mint
];

/**
 * Always returns the same colour for the same user id,
 * so a person keeps their colour across sessions and devices.
 */
export function getUserColor(userId: string) {
  let hash = 0;
  for (let i = 0; i < userId.length; i++) {
    hash = (hash * 31 + userId.charCodeAt(i)) >>> 0;
  }
  return userColors[hash % userColors.length];
}