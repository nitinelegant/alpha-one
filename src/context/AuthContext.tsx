"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { AUTH_TOKEN } from "@/constants/auth";
import { authApi } from "@/api/authApi";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string, userData: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(AUTH_TOKEN);
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    const { accessToken } = await authApi.login({ email, password });

    if (accessToken) {
      localStorage.setItem(AUTH_TOKEN, accessToken);
      setIsAuthenticated(true);
      window.location.href = "/dashboard";
    }
  };

  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    setIsAuthenticated(false);
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
