// src/pages/api/auth/[...nextauth].js
import NextAuth from '@auth/core';
import GitHubProvider from '@auth/core/providers/github';

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // You can add more providers here
  ],
};

export default NextAuth(authOptions);
