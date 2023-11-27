import type { Metadata } from "next";
import { Header } from "@/components";
import { RootLayoutProps } from "@/types";
import { ApolloProvider } from "@/providers/apollo";
import { PaginationProvider } from "@/context/pagination";

import "./globals.css";

export const metadata: Metadata = {
  title: "SpaceX Clone App",
  description: "Challenge for Atlas"
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <ApolloProvider>
        <PaginationProvider>
          <body>
            <Header />
            {children}
            {/* <footer>Footer here</footer> */}
          </body>
        </PaginationProvider>
      </ApolloProvider>
    </html>
  );
}
