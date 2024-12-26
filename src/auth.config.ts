import type { NextAuthConfig } from "next-auth";
import Discord from "next-auth/providers/discord";
import GitHub from "next-auth/providers/github";

export default {
  providers: [
    Discord,
    GitHub,
  ],
} satisfies NextAuthConfig;
