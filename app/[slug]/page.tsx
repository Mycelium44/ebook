"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const chapters = [
  {
    title: "1. Quickstart — Was ist Elysium?",
    items: [
      { slug: "preamble", label: "Was ist Elysium?" },
      { slug: "video-einfuehrung", label: "Videoeinführung (5 Min)" },
      { slug: "video-tour", label: "Video-Tour durch die Plattform" },
      { slug: "ein-satz", label: "Elysium in einem Satz" },
      { slug: "ein-essay", label: "Elysium in einem Essay" },
      { slug: "mycelium-kartographie", label: "Mycelium-Kartographie" },
    ],
  },
  {
    title: "2. Warum jetzt? — Diagnose der Gegenwart",
    items: [
      { slug: "einleitung", label: "Drei Krisen, eine Antwort" },
      { slug: "pandoras-buechse", label: "Pandoras Büchse" },
      { slug: "medizin-3", label: "Medizin 3.0" },
      { slug: "vitalismus-als-antwort", label: "Vitalismus als Antwort" },
    ],
  },
  {
    title: "3. Phase I — Vitalismus",
    items: [
      { slug: "vitalismus-einfuehrung", label: "① Animus — Der beseelte Leib" },
      { slug: "animus", label: "② Biolabs — Wissenschaft, die lebt" },
      { slug: "biolabs", label: "③ Elysium — Der Ort der Regeneration" },
      { slug: "elysium-ort", label: "④ Medicus — Medizin des ganzen Menschen" },
      { slug: "medicus", label: "⑤ Agora — Gemeinschaft als Gesundheitsfaktor" },
      { slug: "agora", label: "⑥ Nexus — Das verbindende Netzwerk" },
      { slug: "nexus", label: "Appendix Phase I" },
    ],
  },
  {
    title: "4. Phase II — Arete",
    items: [
      { slug: "arete-einfuehrung", label: "① Nexus Expanded — Das lebende Netzwerk" },
      { slug: "nexus-expanded", label: "② Paideia — Bildung als Menschwerdung" },
      { slug: "paideia", label: "③ Prosperitas — Wirtschaft des Lebendigen" },
      { slug: "prosperitas", label: "④ Polis — Die lebendige Gemeinschaft" },
      { slug: "polis", label: "Einführung: Was ist Arete?" },
    ],
  },
  {
    title: "Bibliothek",
    items: [
      { slug: "exodus", label: "I Exodus" },
      { slug: "politeia", label: "II Politeia" },
      { slug: "exodus-mycelium", label: "III Exodus & Mycelium" },
      { slug: "traditioneller-libertarismus", label: "IV Traditionalistischer Libertarismus" },
      { slug: "grundlagen-21", label: "V Grundlagen des 21. Jahrhunderts" },
      { slug: "goetterdaemmerung", label: "VI Götterdämmerung" },
      { slug: "vitalistische-alchemie", label: "VII Vitalistische Alchemie" },
      { slug: "europaeischer-idealismus", label: "VIII Europäischer Idealismus" },
      { slug: "hyperion", label: "IX Hyperion: Elysische Fragmente" },
    ],
  },
];

const content: Record<string, { title: string; body: string }> = {
  "preamble": {
    title: "Was ist Elysium?",
    body: "<p style=\"font-size: 15px; font-family: Inter, sans-serif; line-height: 1.6; color: #374151;\">Elysium ist der Entwurf einer neuen Kultur des Lebendigen.</p><p style=\"font-size: 15px; font-family: Inter, sans-serif; line-height: 1.6; color: #374151; margin-top: 16px;\">Es geht um die Frage: <em>Können wir Technologie nutzen, um eine neue menschliche Zivilisation auf Basis von Arete, Vitalismus und Menschlichkeit zu etablieren?</em></p>",
  },
};

// TNS EXACT jump icon — filled SVG (not stroke-based)
const JumpIcon = () => (
  React.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: { flexShrink: 0 } },
    React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.53033 8.75C8.53033 8.33579 8.86612 8 9.28033 8H15.2907C15.705 8 16.0407 8.33579 16.0407 8.75V14.7604C16.0407 15.1746 15.705 15.5104 15.2907 15.5104C14.8765 15.5104 14.5407 15.1746 14.5407 14.7604V10.5607L9.28033 15.8211C8.98744 16.114 8.51256 16.114 8.21967 15.8211C7.92678 15.5282 7.92678 15.0533 8.21967 14.7604L13.4801 9.5H9.28033C8.86612 9.5 8.53033 9.16421 8.53033 8.75Z", fill: "#24292E" })
  )
);

const MenuIcon = () => (
  React.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React.createElement("path", { d: "M1 3.5C1 2.67157 1.67157 2 2.5 2C3.32843 2 4 2.67157 4 3.5C4 4.32843 3.32843 5 2.5 5C1.67157 5 1 4.32843 1 3.5Z", fill: "#555555" }),
    React.createElement("path", { d: "M6 3.5C6 2.67157 6.67157 2 7.5 2C8.32843 2 9 2.67157 9 3.5C9 4.32843 8.32843 5 7.5 5C6.67157 5 6 4.32843 6 3.5Z", fill: "#555555" }),
    React.createElement("path", { d: "M11 3.5C11 2.67157 11.6716 2 12.5 2C13.3284 2 14 2.67157 14 3.5C14 4.32843 13.3284 5 12.5 5C11.6716 5 11 4.32843 11 3.5Z", fill: "#555555" }),
    React.createElement("path", { d: "M1 7C1 6.17157 1.67157 5.5 2.5 5.5C3.32843 5.5 4 6.17157 4 7C4 7.82843 3.32843 8.5 2.5 8.5C1.67157 8.5 1 7.82843 1 7Z", fill: "#555555" }),
    React.createElement("path", { d: "M6 7C6 6.17157 6.67157 5.5 7.5 5.5C8.32843 5.5 9 6.17157 9 7C9 7.82843 8.32843 8.5 7.5 8.5C6.67157 8.5 6 7.82843 6 7Z", fill: "#555555" }),
    React.createElement("path", { d: "M11 7C11 6.17157 11.6716 5.5 12.5 5.5C13.3284 5.5 14 6.17157 14 7C14 7.82843 13.3284 8.5 12.5 8.5C11.6716 8.5 11 7.82843 11 7Z", fill: "#555555" }),
    React.createElement("path", { d: "M1 10.5C1 9.67157 1.67157 9 2.5 9C3.32843 9 4 9.67157 4 10.5C4 11.3284 3.32843 12 2.5 12C1.67157 12 1 11.3284 1 10.5Z", fill: "#555555" }),
    React.createElement("path", { d: "M6 10.5C6 9.67157 6.67157 9 7.5 9C8.32843 9 9 9.67157 9 10.5C9 11.3284 8.32843 12 7.5 12C6.67157 12 6 11.3284 6 10.5Z", fill: "#555555" }),
    React.createElement("path", { d: "M11 10.5C11 9.67157 11.6716 9 12.5 9C13.3284 9 14 9.67157 14 10.5C14 11.3284 13.3284 12 12.5 12C11.6716 12 11 11.3284 11 10.5Z", fill: "#555555" })
  )
);

const FlagIcon = () => React.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: { flexShrink: 0 } },
  React.createElement("path", { d: "M2 2L2 13M2 2L8 5.5M2 2L8 13", stroke: "#000000", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })
);

const BookIcon = () => React.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: { flexShrink: 0 } },
  React.createElement("path", { d: "M2 2.5C2 2.22386 2.22386 2 2.5 2H6.5C7.32843 2 8 2.67157 8 3.5V12.5C8 12.7761 7.77614 13 7.5 13H2.5C2.22386 13 2 12.7761 2 12.5V2.5Z", stroke: "#000000", strokeWidth: 1.5 }),
  React.createElement("path", { d: "M14 3.5C14 3.77614 13.7761 4 13.5 4H9.5C8.67157 4 8 3.32843 8 2.5V2", stroke: "#000000", strokeWidth: 1.5 })
);

const sidebarButtons = [
  { label: "School", href: "https://ns.com", icon: React.createElement(FlagIcon, { key: "school" }), badge: "NEW" },
  { label: "Book", href: "/preamble", icon: React.createElement(BookIcon, { key: "book" }) },
];

export default function ChapterPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : (params.slug || "");
  const allItems = chapters.flatMap((c) => c.items);
  const currentIndex = allItems.findIndex((item) => item.slug === slug);
  const prev = currentIndex > 0 ? allItems[currentIndex - 1] : null;
  const next = currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null;
  const pageContent = content[slug] || {
    title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    body: "<p style=\"font-size: 14px; font-family: Inter, sans-serif; line-height: 1.6; color: #374151;\">Content coming soon.</p>",
  };

  return React.createElement(
    "div",
    { style: { minHeight: "100vh", backgroundColor: "#ffffff" } },
    React.createElement(
      "header",
      { className: "book-header" },
      React.createElement(
        "div",
        { style: { display: "flex", alignItems: "center", marginLeft: "20px" } },
        React.createElement(
          Link,
          { href: "/", style: { display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" } },
          React.createElement("img", { src: "/images/MyceliumGroup.svg", alt: "Mycelium", style: { height: "36px", width: "auto", display: "block" } })
        )
      ),
      React.createElement(
        "div",
        { style: { display: "flex", alignItems: "center" } },
        React.createElement(
          Link,
          { href: "#", className: "book-header-menu-btn" },
          React.createElement(MenuIcon)
        )
      )
    ),
    React.createElement(
      "div",
      { className: "book-layout", style: { paddingTop: "60px" } },
      React.createElement(
        "div",
        { className: "book-grid" },
        React.createElement(
          "div",
          { className: "book-sidebar" },
          React.createElement(
            Link,
            { href: "/" },
            React.createElement(
              "div",
              { className: "book-cover" },
              React.createElement("img", {
                src: "/images/cover.jpg",
                alt: "Mycelium",
                className: "book-cover-img",
                style: { width: "100%", height: "100%", objectFit: "cover", borderRadius: "4px" }
              }),
              React.createElement("span", { className: "book-cover-label" }, "Mycelium")
            )
          ),
          React.createElement(
            "div",
            { className: "sidebar-btn-stack" },
            sidebarButtons.map((btn, i) =>
              React.createElement(
                Link,
                { key: i, href: btn.href, className: "sidebar-btn" },
                React.createElement("span", { className: "sidebar-btn-icon" }, btn.icon),
                React.createElement("span", null, btn.label),
                btn.badge ? React.createElement("span", { className: "sidebar-btn-badge" }, btn.badge) : null
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "book-main" },
          React.createElement(
            "div",
            { className: "breadcrumb" },
            React.createElement(Link, { href: "/", style: { color: "#555555", textDecoration: "none" } }, "Home"),
            React.createElement("span", null, "/"),
            React.createElement("span", null, pageContent.title)
          ),
          React.createElement("h1", { style: { fontFamily: "'Cinzel', Georgia, serif", fontSize: "32px", fontWeight: 600, color: "#000000", marginBottom: "32px", lineHeight: 1.3, letterSpacing: "0.015em" } }, pageContent.title),
          React.createElement("div", { style: { marginBottom: "40px" }, dangerouslySetInnerHTML: { __html: pageContent.body } }),
          React.createElement(
            "div",
            { className: "chapter-nav" },
            prev
              ? React.createElement(Link, { href: `/${prev.slug}`, className: "chapter-nav-link" },
                  React.createElement("span", null, "←"),
                  React.createElement("span", null, prev.label)
                )
              : React.createElement("span", null),
            next
              ? React.createElement(Link, { href: `/${next.slug}`, className: "chapter-nav-link" },
                  React.createElement("span", null, next.label),
                  React.createElement("span", null, "→")
                )
              : React.createElement("span", null)
          )
        )
      )
    )
  );
}
