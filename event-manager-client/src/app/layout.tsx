"use client";
import { ApolloProvider } from "@apollo/client";
import { spaceGrotesk } from "./fonts";
import createApolloClient from "./lib/apollo-client";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = createApolloClient();
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased`}>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </body>
    </html>
  );
}
