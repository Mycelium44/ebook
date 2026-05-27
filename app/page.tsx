import Link from "next/link";
import React from "react";

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
    ],
  },
  {
    title: "4. Phase II — Vernetzung",
    items: [
      { slug: "vernetzung", label: "Die vernetzte Gemeinschaft" },
      { slug: "netzwerk-architektur", label: "Netzwerk-Architektur" },
      { slug: "protokolle", label: "Protokolle des Lebendigen" },
    ],
  },
  {
    title: "Bibliothek",
    items: [
      { slug: "bibliothek", label: "Begleitliteratur" },
      { slug: "ressourcen", label: "Ressourcen" },
    ],
  },
];

const JumpIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <path fillRule="evenodd" clipRule="evenodd" d="M8.53033 8.75C8.53033 8.33579 8.86612 8 9.28033 8H15.2907C15.705 8 16.0407 8.33579 16.0407 8.75V14.7604C16.0407 15.1746 15.705 15.5104 15.2907 15.5104C14.8765 15.5104 14.5407 14.7604V14.7604V10.5607L9.28033 15.8211C8.98744 16.114 8.51256 16.114 8.21967 15.8211C7.92678 15.5282 7.92678 15.0533 8.21967 14.7604L13.4801 9.5H9.28033C8.86612 9.5 8.53033 9.16421 8.53033 8.75Z" fill="#24292E"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="2.5" cy="3.5" r="1.5" fill="#555555"/>
   <circle cx="7" cy="3.5" r="1.5" fill="#555555"/>
    <circle cx="11.5" cy="3.5" r="1.5" fill="#555555"/>
    <circle cx="2.5" cy="7" r="1.5" fill="#555555"/>
    <circle cx="7" cy="7" r="1.5" fill="#555555"/>
    <circle cx="11.5" cy="7" r="1.5" fill="#555555"/>
    <circle cx="2.5" cy="10.5" r="1.5" fill="#555555"/>
    <circle cx="7" cy="10.5" r="1.5" fill="#555555"/>
    <circle cx="11.5" cy="10.5" r="1.5" fill="#555555"/>
  </svg>
);

const FlagIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <path d="M2 2L2 13M2 2L8 5.5M2 2L8 13" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DiscordIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <circle cx="8" cy="6" r="2.5" stroke="#000000" strokeWidth="1"/>
    <path d="M5 9.5C5 11.5 6.5 13 8 13C9.5 13 11 11.5 11 9.5" stroke="#000000" strokeWidth="1" strokeLinecap="round"/>
    <path d="M4 6C4 4.5 6 3 8 3C10 3 12 4.5 12 6" stroke="#000000" strokeWidth="1"/>
  </svg>
);

const BookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <path d="M8 2C8 1.44772 8.44772 1 9 1H13C13.5523 1 14 1.44772 14 2V13C14 13.5523 13.5523 14 13 14H9C8.44772 14 8 13.5523 8 13V2Z" stroke="#000000" strokeWidth="1"/>
    <path d="M2 4C2 3.44772 2.44772 3 3 3H7V13C7 13.5523 6.55228 14 6 14H3C2.44772 14 2 13.5523 2 13V4Z" stroke="#000000" strokeWidth="1"/>
  </svg>
);

const PlayIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <circle cx="8" cy="8" r="5.5" stroke="#000000" strokeWidth="1"/>
    <path d="M6.5 5.5L11 8L6.5 10.5V5.5Z" stroke="#000000" strokeWidth="1" strokeLinejoin="round"/>
  </svg>
);

const MicIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <rect x="5" y="3" width="6" height="8" rx="3" stroke="#000000" strokeWidth="1"/>
    <path d="M2 8C2 10.5 4.5 12.5 8 12.5C11.5 12.5 14 10.5 14 8" stroke="#000000" strokeWidth="1" strokeLinecap="round"/>
    <path d="M8 12.5V14.5" stroke="#000000" strokeWidth="1" strokeLinecap="round"/>
    <path d="M6 14.5H10" stroke="#000000" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <path d="M10.5 2L14 6L10.5 14H8L6 10L3 14H1L5 8L2 2H5L7 6L10.5 2Z" stroke="#000000" strokeWidth="1" strokeLinejoin="round"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <path d="M8 2V10M8 10L5 7M8 10L11 7" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V12" stroke="#000000" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <rect x="2" y="4" width="12" height="9" rx="1.5" stroke="#000000" strokeWidth="1"/>
    <path d="M2 5.5L8 8.5L14 5.5" stroke="#000000" strokeWidth="1"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <path d="M8 1.5C4.96243 1.5 2.5 3.96243 2.5 7C2.5 9.42564 4 11.125 6.0125 11.75C6.25 11.8375 6.35 11.6375 6.35 11.4625C6.35 11.3 6.3375 10.75 6.3375 10.1625C4.5 10.4875 4.1125 9.475 4.1125 9.475C3.8375 8.7625 3.4125 8.5875 3.4125 8.5875C2.9875 8.25 3.45 8.2625 3.45 8.2625C3.9375 8.3 4.25 8.825 4.25 8.825C4.8125 9.575 5.4875 9.8 5.5625 9.75C5.5875 9.6125 5.7125 9.4875 5.8625 9.4125C5.9625 9.275 6.1625 9.1625 6.3625 9.1625C7.1875 9.1625 7.75 9.9875 7.75 9.9875C7.75 9.9875 8.25 10.075 8.275 10.725C8.3 11.375 7.925 12.5 7.75 12.5C7.7125 12.5 7.9125 12.5875 8.0625 12.5C8.0625 12.5 9.8625 12.4 10.125 10.6875C10.175 10.3625 10.375 10.1125 10.6 9.975C10.7125 9.825 10.975 9.775 11.125 9.9C11.1625 9.975 11.3125 10.15 11.3125 10.4375C11.3125 10.8125 11.125 11.5 11.125 11.5C11.125 11.5 11.0625 12.4 10.6 12.9125C10.525 12.9875 10.3875 12.9625 10.3375 12.9C10.2875 12.9 10.1125 12.825 9.9875 12.725C9.8625 12.625 9.8 12.5375 9.8 12.5375C9.8 12.5375 9.7375 12.7625 9.6375 12.9C9.5375 13.0375 9.3875 13.0625 9.3375 13C9.2875 12.9375 9.125 12.8125 8.9375 8.675C9.075 8.575 9.3375 8.4375 9.7125 8.425C10.0875 8.4125 10.5125 8.5 10.8125 8.925C11.1125 9.35 11.175 9.925 11.025 10.4625C11.1625 10.5 11.3 10.5125 11.4125 10.5125C11.7625 10.5125 12.1375 10.4375 12.4375 10.25C12.7375 10.0625 12.9375 9.8125 13.0375 9.5C13.1375 9.1875 13.125 8.875 13 8.625C12.875 8.375 12.65 8.175 12.35 8.05C12.05 7.925 11.7 7.875 11.3625 7.9125C11.025 7.95 10.7125 8.075 10.4375 8.275C10.1625 8.475 9.9375 8.75 9.7875 9.075C9.6375 9.4 9.5625 9.775 9.575 10.15C9.5875 10.525 9.6875 10.8875 9.8625 11.2125C10.0375 11.5375 10.2875 11.8125 10.5875 12.0125C10.8875 12.2125 11.2375 12.325 11.6 12.3375C11.9625 12.35 12.325 12.2625 12.65 12.0875C12.975 11.9125 13.25 11.6625 13.4375 11.3625C13.625 11.0625 13.7125 10.725 13.6875 10.3875C13.6625 10.05 13.525 9.725 13.3 9.4625C13.075 9.2 12.775 9 12.425 8.9C12.075 8.8 11.7 8.8 11.35 8.9C11 9 10.675 9.2 10.4125 9.475C10.15 9.75 9.95 10.1 9.8375 10.4875C9.725 10.875 9.7 11.2875 9.7625 11.6875C9.825 12.0875 9.975 12.4625 10.2 12.7875C10.425 13.1125 10.725 13.375 11.075 13.55C11.425 13.725 11.8125 13.8125 12.2 13.8C12.5875 13.7875 12.9625 13.675 13.2875 13.475C13.6125 13.275 13.875 13 14.0375 12.675C14.2 12.35 14.25 12.0125 14.15 11.7C14.05 11.7 14.05 11.7 14.05 11.7Z" stroke="#000000" strokeWidth="1"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <path d="M8 13C8 13 2 9.5 2 5.5C2 3.567 3.567 2 5.5 2C6.60457 2 7.62652 2.46731 8 3.2C8.37348 2.46731 9.39543 2 10.5 2C12.433 2 14 3.567 14 5.5C14 9.5 8 13 8 13Z" stroke="#000000" strokeWidth="1" strokeLinejoin="round"/>
  </svg>
);

const PodcastIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <circle cx="8" cy="6" r="2" stroke="#000000" strokeWidth="1.5"/>
    <path d="M5 9.5V10.5C5 12.1569 6.34315 13.5 8 13.5C9.65685 13.5 11 12.1569 11 10.5V9.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M3 9.5V7.5C3 5.01472 5.01472 3 7.5 3" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M13 9.5V7.5C13 5.01472 10.9853 3 8.5 3" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const sidebarButtons = [
  { label: "School", href: "#", icon: <FlagIcon />, badge: "NEW" },
  { label: "Discord", href: "#", icon: <DiscordIcon /> },
  { label: "Book", href: "/preamble", icon: <BookIcon /> },
  { label: "Video", href: "#", icon: <PlayIcon /> },
  { label: "Podcast", href: "#", icon: <MicIcon /> },
  { label: "X", href: "#", icon: <XIcon /> },
  { label: "PDF", href: "#", icon: <DownloadIcon /> },
  { label: "Newsletter", href: "#", icon: <MailIcon /> },
  { label: "GitHub", href: "#", icon: <GitHubIcon /> },
  { label: "Fund", href: "#", icon: <HeartIcon /> },
];

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
      {/* Header */}
      <header className="book-header">
        <div style={{ display: "flex", alignItems: "center", marginLeft: "20px" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
            <img src="/images/MyceliumGroup.svg" alt="Mycelium" style={{ height: "36px", width: "auto", display: "block" }} />
          </Link>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link href="#" className="book-header-menu-btn">
            <MenuIcon />
          </Link>
        </div>
      </header>

      {/* Layout */}
      <div className="book-layout" style={{ paddingTop: "60px" }}>
        <div className="book-grid">
          {/* Sidebar */}
          <div className="book-sidebar">
            <Link href="/preamble">
              <div className="book-cover">
                <img
                  src="/images/cover.jpg"
                  alt="Mycelium"
                  className="book-cover-img"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
                <span className="book-cover-label">Mycelium</span>
              </div>
            </Link>

            <div className="sidebar-btn-stack">
              {sidebarButtons.map((btn, i) => (
                <Link key={i} href={btn.href} className="sidebar-btn">
                  <span className="sidebar-btn-icon">{btn.icon}</span>
                  <span>{btn.label}</span>
                  {btn.badge && <span className="sidebar-btn-badge">{btn.badge}</span>}
                </Link>
              ))}
            </div>
          </div>

          {/* Main content */}
          <div className="book-main">
            <div className="description-block">
              <div className="description-label">Description</div>
              <p className="description-text">
                Ein vitalistisches Manifest für eine neue Kultur des Lebendigen. Elysium ist der Entwurf,
                Technologie zur Wiederbelebung des Menschen zu nutzen — auf Basis von Arete, Vitalismus und Menschlichkeit.
              </p>
            </div>

            {/* Chapters */}
            <div className="chapter-section">
              {chapters.map((chapter, idx) => (
                <div key={idx}>
                  <a className="chapter-section-header" href={`/${chapter.items[0].slug}`}>
                    {chapter.title}
                    <span className="chapter-section-icon">
                      <JumpIcon />
                    </span>
                  </a>
                  <div className="chapter-list">
                    {chapter.items.map((item, i) => (
                      <a key={i} className="chapter-list-item" href={`/${item.slug}`}>
                        <span className="chapter-list-item-icon">
                          <JumpIcon />
                        </span>
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
