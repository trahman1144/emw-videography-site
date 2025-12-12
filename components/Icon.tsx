export type IconName =
  | "camera" | "clapper" | "briefcase" | "music" | "event"
  | "chat" | "cog" | "palette" | "calendar" | "coin"
  | "globe" | "star" | "check";

export function Icon({ name, size = 28, className = "" }: { name: IconName; size?: number; className?: string }): JSX.Element {
  const defaultClassName = "text-white/70";
  const combinedClassName = className || defaultClassName;
  
  const svgProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: combinedClassName,
    "aria-hidden": "true" as const,
  };

  switch (name) {
    case "camera":
      return (
        <svg {...svgProps}>
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <circle cx="12" cy="13" r="3" />
          <line x1="7" y1="7" x2="7" y2="5" />
          <line x1="17" y1="7" x2="17" y2="5" />
        </svg>
      );
    
    case "clapper":
      return (
        <svg {...svgProps}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <line x1="3" y1="8" x2="21" y2="8" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="16" x2="21" y2="16" />
          <path d="M7 4v4M11 4v4M15 4v4" />
        </svg>
      );
    
    case "briefcase":
      return (
        <svg {...svgProps}>
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    
    case "music":
      return (
        <svg {...svgProps}>
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      );
    
    case "event":
      return (
        <svg {...svgProps}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    
    case "chat":
      return (
        <svg {...svgProps}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );
    
    case "cog":
      return (
        <svg {...svgProps}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
        </svg>
      );
    
    case "palette":
      return (
        <svg {...svgProps}>
          <circle cx="13.5" cy="6.5" r=".5" />
          <circle cx="17.5" cy="10.5" r=".5" />
          <circle cx="8.5" cy="7.5" r=".5" />
          <circle cx="6.5" cy="12.5" r=".5" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
        </svg>
      );
    
    case "calendar":
      return (
        <svg {...svgProps}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    
    case "coin":
      return (
        <svg {...svgProps}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v12M6 12h12" />
          <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" fill="currentColor" />
        </svg>
      );
    
    case "globe":
      return (
        <svg {...svgProps}>
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    
    case "star":
      return (
        <svg {...svgProps}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    
    case "check":
      return (
        <svg {...svgProps}>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    
    default:
      return <svg {...svgProps} />;
  }
}

