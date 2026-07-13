// Portfolio data for Sukanand Yedle - Senior iOS Developer

export const PROFILE = {
  name: "Sukanand Yedle",
  role: "Senior iOS Developer",
  tagline: "Swift • SwiftUI • UIKit • FinTech",
  location: "Pune, Maharashtra, India",
  email: "sukanand124@gmail.com",
  phone: "+91 97631 10826",
  linkedin: "https://www.linkedin.com/in/sukanandyedle/",
  github: "https://github.com/sukanand?tab=repositories",
  photoUrl: "/assets/profilePic.png",
  resumeUrl: "/assets/SukanandYedle.pdf",
  description:
    "Building secure, scalable, and high-performance iOS applications with over five years of experience delivering enterprise solutions in Banking, FinTech, and Merchant Services.",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const ABOUT_EXPERTISE = [
  "Swift",
  "SwiftUI",
  "UIKit",
  "MVVM",
  "REST APIs",
  "Firebase",
  "Performance Optimization",
  "Secure Mobile Applications",
];

export const SKILLS = [
  {
    title: "Languages",
    icon: "Code2",
    chips: ["Swift", "Objective-C"],
  },
  {
    title: "UI",
    icon: "LayoutGrid",
    chips: ["SwiftUI", "UIKit", "AutoLayout"],
  },
  {
    title: "Architecture",
    icon: "Blocks",
    chips: ["MVVM", "MVC", "Clean Architecture", "Coordinator"],
  },
  {
    title: "Networking",
    icon: "Network",
    chips: ["REST APIs", "Async/Await", "URLSession", "Alamofire", "SSL Pinning"],
  },
  {
    title: "Apple Frameworks",
    icon: "Apple",
    chips: [
      "Combine",
      "CoreData",
      "MapKit",
      "CoreLocation",
      "AVKit",
      "UserDefaults",
      "Keychain",
    ],
  },
  {
    title: "Tools",
    icon: "Wrench",
    chips: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Firebase",
      "Crashlytics",
      "Jira",
      "App Store Connect",
      "TestFlight",
      "Swift Package Manager",
      "CocoaPods",
    ],
  },
];

export const EXPERIENCE = [
  {
    period: "2021 — Present",
    role: "Senior iOS Developer",
    company: "Siddhatech Software Services Pvt. Ltd.",
    responsibilities: [
      "Banking Applications",
      "FinTech Applications",
      "Merchant Services",
      "Team Leadership",
      "Performance Optimization",
      "Firebase Integration",
      "REST APIs",
      "CI/CD",
      "App Store Releases",
      "Code Reviews",
      "Mentoring Developers",
    ],
  },
];

export const PROJECTS = [
  {
    id: "banco-popular",
    name: "Banco Popular Dominicano",
    category: "Banking Application",
    appStoreUrl: "https://apps.apple.com/in/app/banco-popular-dominicano/id583475424",
    imageUrl: "/assets/bpd.png",
    description:
      "Developed secure mobile banking features including account management, authentication, onboarding, complaint management, and profile services.",
    technologies: ["Swift", "UIKit", "MVVM", "Firebase", "REST APIs", "URLSession"],
    features: [
      "Authentication",
      "Account Management",
      "Profile",
      "Complaints",
      "Performance Optimization",
    ],
    accent: "blue",
    featured: false,
  },
  {
    id: "app-azul",
    name: "APP Azul",
    category: "Merchant Services Platform",
    appStoreUrl: "https://apps.apple.com/dm/app/app-azul/id1522098862",
    imageUrl: "/assets/appazul.png",
    description:
      "Merchant application supporting onboarding, payments, dashboards, push notifications, and transaction tracking.",
    technologies: ["SwiftUI", "UIKit", "Firebase", "REST APIs", "MVVM"],
    features: [
      "Merchant Onboarding",
      "Dashboard",
      "Payments",
      "Push Notifications",
      "Analytics",
      "Performance Improvements",
    ],
    accent: "purple",
    featured: false,
  },
  {
    id: "mytripcv",
    name: "MyTripCV",
    category: "Travel & Social Networking",
    appStoreUrl: "https://apps.apple.com/in/app/mytripcv/id6771650958",
    imageUrl: "/assets/mytripcv.png",
    badge: "Personal Project",
    description:
      "An independently developed travel and social networking application that allows users to share journeys, interact with fellow travelers, plan itineraries, and preserve travel memories.",
    technologies: ["Swift", "SwiftUI", "Firebase", "MapKit", "Core Location"],
    features: [
      "Community Feed",
      "Travel Timeline",
      "Interactive Map",
      "MapKit",
      "Photo Sharing",
      "Travel Itinerary",
      "Real-time Chat",
      "Animations",
      "User Profiles",
      "App Store Deployment",
    ],
    accent: "gradient",
    featured: true,
  },
];

export const ACHIEVEMENTS = [
  { value: "5+", label: "Years Experience", suffix: "" },
  { value: "40", label: "Crash Reduction", suffix: "%" },
  { value: "99.9", label: "Crash-Free Sessions", suffix: "%" },
  { value: "10+", label: "Production Releases", suffix: "" },
  { value: "Team Lead", label: "Technical Leadership", suffix: "" },
];
