import { useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [active, setActive] = useState("#home");
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const lastScroll = useRef(0);
  const time = useRef(0);

  const items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setScrollSpeed(Math.abs(current - lastScroll.current));
      lastScroll.current = current;

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

  const goTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">

      {/* 🔥 OUTER NEON (VISIBLE — SOFT PINK GLOW) */}
      <div
        className="absolute inset-0 scale-150 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,105,180,0.45) 0%, rgba(255,20,147,0.20) 35%, transparent 70%)",
          filter: "blur(35px)",
          transform: `translateY(0px) scale(${1 + scrollSpeed * 0.0008})`,
          transition: "transform 150ms ease-out",
        }}
      />

      {/* extra neon rim biar “kelihatan edge glow” */}
      <div
        className="absolute inset-0 rounded-full blur-2xl opacity-60"
        style={{
          boxShadow:
            "0 0 40px rgba(255,105,180,0.35), 0 0 90px rgba(255,20,147,0.25)",
        }}
      />

      {/* NAV CORE */}
      <div
        className="relative flex items-center gap-5 px-6 py-2 rounded-full
                   backdrop-blur-3xl
                   bg-white/60 dark:bg-black/30
                   border border-white/10 dark:border-white/10
                   shadow-[0_40px_120px_rgba(0,0,0,0.25)]"
      >

        {items.map((item) => {
          const isActive = active === item.href;

          return (
            <button
              key={item.href}
              onClick={() => goTo(item.href)}
              className="relative px-3 py-1 rounded-full group"
              style={{
                transform: isActive
                  ? "translateY(-1px) scale(1.03)"
                  : "translateY(0px) scale(1)",
                transition: "all 450ms cubic-bezier(0.2, 0.8, 0.2, 1)",
              }}
            >

              {/* CAPSULE */}
              <span
                className={`
                  absolute inset-0 rounded-full transition-all duration-300

                  ${
                    isActive
                      ? "bg-pink-500/15 shadow-[inset_0_0_18px_rgba(255,105,180,0.18)]"
                      : "bg-transparent group-hover:bg-white/10 dark:group-hover:bg-white/5"
                  }
                `}
              />

              {/* TEXT */}
              <span
                className={`
                  relative z-10 text-sm transition-all duration-300

                  ${
                    isActive
                      ? "text-pink-300 font-medium tracking-[0.22em] drop-shadow-[0_0_6px_rgba(255,105,180,0.5)]"
                      : "text-foreground/50 group-hover:text-foreground"
                  }
                `}
              >
                {item.label}
              </span>

              {/* DOT */}
              <span
                className={`
                  absolute left-1/2 -bottom-[6px]
                  w-[4px] h-[4px] rounded-full bg-pink-400
                  transition-opacity duration-300
                  ${isActive ? "opacity-100" : "opacity-0"}
                `}
              />
            </button>
          );
        })}

        {/* divider */}
        <div className="w-[1px] h-5 bg-white/10" />

        {/* theme */}
        <button
          onClick={toggleTheme}
          className="text-foreground/50 hover:text-pink-400 transition"
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}