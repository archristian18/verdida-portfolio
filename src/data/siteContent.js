import {
  BarChart3,
  Building2,
  Clock,
  Compass,
  DraftingCompass,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  Target,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Contact Us", href: "/#contact" },
];

export const services = [
  {
    icon: MapPin,
    title: "Relocation Survey",
    text: "Boundary relocation support for confirming property limits and reference points.",
  },
  {
    icon: Ruler,
    title: "Subdivision Survey",
    text: "Survey preparation for dividing land parcels into approved lots.",
  },
  {
    icon: DraftingCompass,
    title: "Consolidation-Subdivision Survey",
    text: "Survey work for combining parcels and subdividing them under one plan.",
  },
  {
    icon: Building2,
    title: "Consolidation Survey",
    text: "Survey documentation for merging adjoining properties into a single parcel.",
  },
  {
    icon: BarChart3,
    title: "Topographic Survey",
    text: "Site elevation and feature mapping for planning, design, and development work.",
  },
  {
    icon: Compass,
    title: "Construction Survey",
    text: "Layout and measurement support for construction alignment and site execution.",
  },
  {
    icon: Target,
    title: "Real Estate Planning and Consultation",
    text: "Guidance for property planning, development options, and real estate decisions.",
  },
];

export const highlights = [
  "Relocation and subdivision surveys",
  "Consolidation survey documentation",
  "Topographic and construction surveys",
  "Real estate planning and consultation",
];

export const values = [
  {
    icon: ShieldCheck,
    title: "Reliable Guidance",
    text: "Clear next steps for property advertising and realty concerns.",
  },
  {
    icon: Target,
    title: "Focused Marketing",
    text: "Campaign messaging built around the property's real strengths.",
  },
];

export const contactMethods = [
  {
    icon: Phone,
    label: "0932-5766-140 | 0926-0028-443",
  },
  {
    icon: Mail,
    label: "phrolverdida@yahoo.com",
  },
  {
    icon: MapPin,
    label: `Centennial Commercial Center
    Unit 206, Pit-os, Cebu City`,
  },
  {
    icon: ExternalLink,
    label: "Facebook Page",
    href: "https://www.facebook.com/averdidasurveying",
    text: "www.facebook.com/averdidasurveying",
  },
  {
    icon: Clock,
    label: "Office Hours",
    text: "8:00AM to 5:00PM, Monday to Saturday",
  },
];
