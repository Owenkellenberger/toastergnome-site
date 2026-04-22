export type StreamingService =
  | "spotify"
  | "youtube"
  | "apple"
  | "soundcloud"
  | "amazon";

export type Project = {
  title: string;
  artist?: string;
  image: string;
  description: string;
  links: Partial<Record<StreamingService, string>>;
};
