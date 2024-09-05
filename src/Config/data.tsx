import { NavItem } from "@/types";

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "User",
    href: "/",
    icon: "user",
    label: "user",
  },
  {
    title: "Employee",
    href: "/",
    icon: "employee",
    label: "employee",
  },
  {
    title: "Profile",
    href: "/",
    icon: "profile",
    label: "profile",
  },
  {
    title: "Kanban",
    href: "/",
    icon: "kanban",
    label: "kanban",
  },
];

export const LoginSchema = [
  {
    LeftSection: {
      Logo: {
        type: "image",
        src: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
        alt: "Logo",
      },
      Title: {
        type: "text",
        text: "Welcome to Website",
        SubText: "Sofia Davis",
        style: {
          fontSize: "24px",
          fontWeight: "bold",
          color: "#000000",
        },
      },
    },
    RightSection: {
      Text: {
        Title: "Create an account",
        SubTitle: "Enter your email below to create your account",
        TermsOfServiceSrc:
          "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
        PrivacyPolicySrc:
          "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
      },
      AuthForm: {
        Email: {
          type: "text",
          variableType: "email",
          label: "Email",
          placeholder: "Enter your email...",
          className:
            "w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        },

        Password: {
          type: "text",
          variableType: "string",
          label: "Password",
          placeholder: "Enter your password...",
          className:
            "w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        },
      },
    },
  },
];
