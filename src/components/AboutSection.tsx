import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Music, GraduationCap, MapPin, Heart } from 'lucide-react';
import { useState } from 'react';

export default function AboutSection() {
  const [open, setOpen] = useState<number | null>(0);

  const bio = [
    {
      title: 'siapa aku',
      icon: Heart,
      content:
        'Aku Irdina Raqila 💗 seorang pelajar yang lagi belajar jadi versi lebih baik di masa yang akan datang.',
    },
    {
      title: 'perjalanan belajar',
      icon: Code2,
      content:
        'Aku belajar dengan sungguh-sungguh 🧠 agar bisa menggapai impianku menjadi mahasiswa STAN.',
    },
    {
      title: 'sekolah',
      icon: GraduationCap,
      content:
        'Aku siswa MAN 1 Banda Aceh kelas X-11 📚 Lagi belajar banyak hal baru setiap hari.',
    },
    {
      title: 'hal kecil tentang aku',
      icon: Music,
      content:
        'Aku suka musik 🎧 karena bikin aku lebih tenang, fokus, dan nyaman saat belajar.',
    },
    {
      title: 'asal',
      icon: MapPin,
      content:
        'Aku lahir di Banda Aceh (19 Mei 2010) 🌸 tempat sederhana yang membentuk aku sampai sekarang.',
    },
  ];

  const stats = [
    { value: '2010', label: 'lahir' },
    { value: 'X-11', label: 'kelas' },
    { value: 'MAN 1', label: 'sekolah' },
    { value: 'STAN', label: 'cita-cita' },
  ];

  const toggle = (i: number) => {
    setOpen(open === i ? null : i);
  };

  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-white dark:bg-[#0b0b0f] relative overflow-hidden"
    >

      {/* 🌸 FINAL VISIBLE LAYER (WHITE FRIENDLY) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* 💗 small but strong pink glow */}
        <div className="absolute w-[520px] h-[520px] bg-pink-400/30 blur-[110px] top-[-80px] left-[-80px]" />

        {/* 🌷 second glow */}
        <div className="absolute w-[450px] h-[450px] bg-rose-400/25 blur-[110px] bottom-[-100px] right-[-100px]" />

        {/* 💜 center accent */}
        <div className="absolute w-[380px] h-[380px] bg-fuchsia-400/25 blur-[90px] top-[55%] left-[60%] -translate-x-1/2 -translate-y-1/2" />

        {/* 🧠 IMPORTANT: lighter white overlay (biar glow tetap kelihatan) */}
        <div className="absolute inset-0 bg-white/60 dark:bg-black/40" />

      </div>

      <div className="container mx-auto px-6 flex justify-center relative z-10">

        <div className="w-full max-w-5xl">

          {/* HEADER */}
          <motion.div className="text-center mb-14">
            <p className="text-pink-400 font-medium">
              ✦ About Me
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Know Me{' '}
              <span className="text-pink-500 dark:text-pink-400">
                Better 💗
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* FOTO */}
            <motion.div
              className="flex justify-center"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <div className="relative overflow-hidden rounded-[28px]">

                <motion.img
                  src="/fotoirdin2.jpg"
                  className="
                    w-[260px] md:w-[300px]
                    h-[380px] md:h-[460px]
                    object-cover object-top
                    rounded-[28px]
                    border border-pink-200 dark:border-pink-500/30
                    shadow-2xl
                  "
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.08 },
                  }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeOut',
                  }}
                />

                <div className="absolute inset-0 rounded-[28px] bg-pink-400/10 blur-xl -z-10" />

              </div>
            </motion.div>

            {/* TEXT */}
            <div className="space-y-5">

              {/* ACCORDION */}
              <div className="space-y-3">

                {bio.map((item, i) => (
                  <div
                    key={i}
                    className="
                      border border-pink-100 dark:border-pink-500/20
                      rounded-2xl overflow-hidden
                      bg-white dark:bg-black/30
                      backdrop-blur-md
                    "
                  >
                    <button
                      onClick={() => toggle(i)}
                      className="w-full flex items-center justify-between px-5 py-4"
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 text-pink-500" />
                        <span className="text-gray-900 dark:text-white font-medium">
                          {item.title}
                        </span>
                      </div>

                      <span className="text-pink-400 text-lg">
                        {open === i ? '−' : '+'}
                      </span>
                    </button>

                    <AnimatePresence>
                      {open === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-5 pb-4 text-gray-600 dark:text-gray-300 leading-relaxed"
                        >
                          {item.content}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-3 pt-2">

                {stats.map((s, i) => (
                  <div
                    key={i}
                    className="
                      p-3 rounded-2xl text-center
                      border border-pink-100 dark:border-pink-500/20
                      bg-white dark:bg-black/30
                      backdrop-blur-md
                    "
                  >
                    <p className="text-pink-500 dark:text-pink-400 font-bold">
                      {s.value}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {s.label}
                    </p>
                  </div>
                ))}

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}