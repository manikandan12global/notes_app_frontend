"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {

  return (
    <Provider store={store}>{children}</Provider>
  );
}
