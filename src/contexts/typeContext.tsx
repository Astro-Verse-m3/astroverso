import { iUserLogin } from "../pages/Login/typeLogin";

export interface iChildren {
  children: React.ReactNode;
}

export interface iUser {
  name: string;
  email: string;
  id: number;
  score: number;
//   favoritesPosts: iFavoritesPosts[];
}

export interface iUserContextProps {
  user: iUser | null;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  login: (data: iUserLogin) => void;
}
