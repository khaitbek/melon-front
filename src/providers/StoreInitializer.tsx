"use client";
import { useThemeStore } from "@/store";
import { useRef } from "react";

export function StoreInitializer() {
  const ref = useRef(false);
  useThemeStore.getState()
  return null
}