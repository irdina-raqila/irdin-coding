import { useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [active, setActive] = useState("#home");
  const [glow, setGlow] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);

  const items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      for (const item of items) {
        const el = document.querySelector(item.href);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top < 140 && rect.bottom > 140) {
          setActive(item.href);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!navRef.current) return;

      const rect = navRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dist = Math.hypot(e.clientX - cx, e.clientY - cy);

      // 🔥 BOOST INTENSITY (biar keliatan)
      const intensity = Math.max(0, 1 - dist / 350);
      setGlow(intensity);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const goTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">



      {/* ✨ SECOND HARD GLOW (biar neon kebaca, bukan samar) */}
      <div
        className="absolute inset-0 blur-[35px]"
        style={{
          opacity: 0.8,
          boxShadow: `
            0 0 ${40 + glow * 80}px rgba(255,105,180,0.35),
            0 0 ${90 + glow * 120}px rgba(255,182,193,0.2)
          `,
        }}
      />

      {/* 💎 NAV CORE */}
      <div
        ref={navRef}
        className="relative flex items-center gap-8 px-7 py-2 rounded-full
                   backdrop-blur-xl
                   bg-white/70 dark:bg-black/40
                   border border-pink-200/20
                   shadow-[0_30px_120px_rgba(0,0,0,0.3)]"
      >

        {items.map((item) => {
          const isActive = active === item.href;

          return (
            <button
              key={item.href}
              onClick={() => goTo(item.href)}
              className="relative px-1 py-1 text-sm"
            >

              {/* TEXT */}
              <span
                className={`
                  transition-all duration-300

                  ${
                    isActive
                      ? "text-pink-300 tracking-[0.22em] drop-shadow-[0_0_12px_rgba(255,105,180,0.8)]"
                      : "text-foreground/60 hover:text-pink-200"
                  }
                `}
              >
                {item.label}
              </span>

              {/* 🌸 UNDERLINE NEON (FIXED VISIBILITY) */}
              <span
                className={`
                  absolute left-1/2 -bottom-1 h-[2px]
                  bg-pink-400 rounded-full
                  shadow-[0_0_16px_rgba(255,105,180,0.9)]
                  transition-all duration-300

                  ${
                    isActive
                      ? "w-full -translate-x-1/2 opacity-100"
                      : "w-0 opacity-0"
                  }
                `}
              />
            </button>
          );
        })}

        {/* divider */}
        <div className="w-[1px] h-5 bg-pink-300/30" />

        {/* theme */}
        <button
          onClick={toggleTheme}
          className="text-foreground/60 hover:text-pink-400 transition"
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}