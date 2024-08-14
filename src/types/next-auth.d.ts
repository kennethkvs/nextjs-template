import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      name: string;
      email: string;
      image: string;
      role: string;
      phone: string;
    } & DefaultSession;
  }

  interface User extends DefaultUser {
    role: string;
    phone: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: string;
    phone: string;
  }
}
