export interface IDetails{
  id: number;
  title: string;
  thumbnail: string;
  status: string;
  short_description: string;
  description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
  minimum_system_requirements: Minimumsystemrequirements;
  screenshots: Screenshot[];
}

interface Screenshot {
  id: number;
  image: string;
}

interface Minimumsystemrequirements {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}