"use client";
// @ts-expect-error - AOS is a JS library without type definitions
import AOS from "aos";
import { Header } from "@/components/header";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      {children}
    </>
  );
}
