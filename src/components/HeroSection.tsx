import { motion } from 'framer-motion';
import { ArrowDown, Github, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const scrollToAbout = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const fade = (d = 0) => ({
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: d, ease: 'easeOut' },
  });

  return (
    <section
      id="home"
      className="relative min-h-screen bg-white dark:bg-black overflow-hidden"
    >

      {/* 🌸 FIXED VISIBLE LAYER (SAMA STYLE ABOUT) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* 💗 top left glow */}
        <div className="absolute w-[600px] h-[600px] bg-pink-400/30 blur-[120px] top-[-120px] left-[-120px]" />

        {/* 🌷 bottom right glow */}
        <div className="absolute w-[520px] h-[520px] bg-rose-400/25 blur-[120px] bottom-[-140px] right-[-140px]" />

        {/* 💜 center glow */}
        <div className="absolute w-[420px] h-[420px] bg-fuchsia-400/20 blur-[100px] top-[55%] left-[60%] -translate-x-1/2 -translate-y-1/2" />

        {/* 🧠 IMPORTANT: jangan terlalu putih solid */}
        <div className="absolute inset-0 bg-white/65 dark:bg-black/40" />

      </div>

      <ThreeScene />

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

            {/* IMAGE */}
            <motion.div {...fade(0)} className="md:col-span-5 flex justify-center md:justify-end">
              <div className="relative">

                <img
                  src="/fotoirdin1.jpg"
                  className="
                    w-[210px] md:w-[270px]
                    h-[350px] md:h-[430px]
                    object-cover object-top
                    rounded-[28px]
                    border border-pink-200 dark:border-pink-500/30
                    shadow-2xl
                    transition duration-500 hover:scale-[1.02]
                  "
                />

              </div>
            </motion.div>

            {/* TEXT */}
            <div className="md:col-span-7 text-center md:text-left">

              <motion.div {...fade(0.2)} className="leading-tight">

                <div className="inline-flex items-center mb-3 px-5 py-2 rounded-full border border-pink-200 dark:border-pink-500/30 bg-white/60 dark:bg-black/40 backdrop-blur-md shadow-sm">
                  <span className="text-sm md:text-[13px] text-pink-500 dark:text-pink-300 tracking-wide">
                    ✦ a small corner of my internet, quietly growing 🌸
                  </span>
                </div>

                <p className="text-pink-400 dark:text-pink-300 text-[11px] tracking-[0.35em] mb-2 uppercase">
                  identity
                </p>

                <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">
                  Hello, I'm{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-500 to-pink-300">
                    Irdina
                  </span>{' '}
                  💖
                </h1>

                <p className="mt-2 text-pink-500/70 dark:text-pink-200/70 text-sm md:text-base max-w-md">
                  🌱 student • 💻 web explorer • ✨ building my first digital world
                </p>

              </motion.div>

              {/* STORY */}
              <div className="mt-5 space-y-3 max-w-xl">

                <motion.p {...fade(0.3)} className="text-pink-500/80 dark:text-pink-200 leading-relaxed">
                  🌸 lagi belajar bikin website dari nol — pelan tapi pasti.
                </motion.p>

                <motion.p {...fade(0.4)} className="text-pink-500/80 dark:text-pink-200 leading-relaxed">
                  💭 kadang paham, kadang bingung — tapi itu bagian prosesnya.
                </motion.p>

                <motion.p {...fade(0.5)} className="text-pink-500/80 dark:text-pink-200 leading-relaxed">
                  🚀 ini bukan portfolio jadi, ini perjalanan yang lagi dibangun.
                </motion.p>

              </div>

              {/* BUTTONS */}
              <motion.div {...fade(0.55)} className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">

                <Button
                  className="rounded-full px-7 bg-pink-400 hover:bg-pink-500 text-white shadow-md"
                  onClick={() => {
                    const el = document.querySelector('#projects');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  lihat perjalanan 🚀
                </Button>

                <Button
                  variant="outline"
                  className="
                    rounded-full px-7
                    border-pink-300 text-pink-500
                    dark:border-pink-500 dark:text-pink-300
                    hover:bg-pink-50 dark:hover:bg-pink-500/10
                  "
                  onClick={() => {
                    const el = document.querySelector('#contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  ngobrol 💌
                </Button>

              </motion.div>

              {/* SOCIAL */}
              <motion.div {...fade(0.6)} className="mt-6 flex gap-4 justify-center md:justify-start">

                {[
                  { icon: Github, href: 'https://github.com/irdina-raqila/irdin-coding.git' },
                  { icon: Youtube, href: 'https://www.youtube.com/' },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    className="
                      p-2 rounded-full border
                      border-pink-200 dark:border-pink-500/30
                      hover:scale-110 transition
                    "
                  >
                    <s.icon className="w-5 h-5 text-pink-500 dark:text-pink-300" />
                  </a>
                ))}

              </motion.div>

            </div>
          </div>
        </div>
      </div>

      {/* scroll */}
      <motion.button
        onClick={scrollToAbout}
        className="
          absolute bottom-6 left-1/2 -translate-x-1/2 p-3 rounded-full
          bg-white dark:bg-black border border-pink-200 dark:border-pink-500/30
        "
        whileHover={{ scale: 1.1 }}
      >
        <ArrowDown className="w-5 h-5 text-pink-500 dark:text-pink-300" />
      </motion.button>
    </section>
  );
}