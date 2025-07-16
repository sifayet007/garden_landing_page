import { StaticMetadata } from "next/dist/lib/metadata/types/icons";
import { StaticImageData } from "next/image";

export interface IHallOfFameUser {
  id: number;
  name: string;
  highlights: number;
  seed: number;
  avatar: StaticImageData; // image URL
  isVerified: boolean;
  isActive?: boolean; // optional for currently active/selected user
}