"use client"

import React, { ReactNode, createContext, useContext, useState } from "react";
import { UserProfile } from "@/interfaces/UserProfile";
import { UserContextProps } from "@/interfaces/UserContextProps";

export const UserContext = createContext<UserContextProps | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [userProfile, setUserProfile] = useState<UserProfile|null>(null);
    return (
        <UserContext.Provider
            value={{
                userProfile,
                setUserProfile
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUserProvider = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserProvider must be used within a UserProvider');
    }
    return context;
};
