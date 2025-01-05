import { UserProfile } from "./UserProfile";

export interface UserContextProps {
    userProfile: UserProfile|null;
    setUserProfile: React.Dispatch<React.SetStateAction<UserProfile|null>>;
}