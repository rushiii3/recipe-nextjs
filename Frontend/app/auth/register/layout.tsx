import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Login to access your MyApp account",
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
