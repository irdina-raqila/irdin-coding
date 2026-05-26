import { motion } from 'framer-motion';

const subjects = {
  utama: [
    { name: 'Matematika 📐', level: 90 },
    { name: 'Bahasa Indonesia 📖', level: 95 },
    { name: 'Bahasa Inggris 🌍', level: 88 },
    { name: 'IPA 🔬 (Fisika, Biologi, Kimia)', level: 85 },
    { name: 'IPS 🏛️ (Sejarah, Ekonomi, Sosiologi)', level: 82 },
  ],
  tambahan: [
    { name: 'Informatika 💻', level: 92 },
    { name: 'Seni Budaya 🎨', level: 87 },
    { name: 'Pendidikan Agama ☪️', level: 96 },
    { name: 'PJOK 🏃‍♂️', level: 80 },
    { name: 'Prakarya 🧵', level: 78 },
  ],
  lainnya: [
    { name: 'Literasi Digital 📱', level: 90 },
    { name: 'Public Speaking 🎤', level: 83 },
    { name: 'Problem Solving 🧠', level: 89 },
    { name: 'Kerja Tim 🤝', level: 94 },
    { name: 'Kreativitas 💡', level: 97 },
  ],
};

function SkillBar({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium text-gray-800 dark:text-gray-200">
          {name}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {level}%
        </span>
      </div>

      <div className="h-2.5 bg-gray-200/70 dark:bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: delay + 0.1 }}
          className="h-full rounded-full"
          style={{
            background:
              'linear-gradient(90deg, #fbcfe8, #f472b6, #f9a8d4)',
            boxShadow: '0 0 14px rgba(244,114,182,0.35)',
          }}
        />
      </div>
    </motion.div>
  );
}

function SubjectCard({
  title,
  icon,
  data,
  delay,
}: {
  title: string;
  icon: string;
  data: { name: string; level: number }[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="
        relative p-6 rounded-3xl overflow-hidden
        bg-white/80 dark:bg-white/5
        backdrop-blur-xl
        border border-pink-100 dark:border-white/10
        shadow-[0_10px_40px_-20px_rgba(244,114,182,0.3)]
        hover:-translate-y-1 transition
      "
    >
      {/* 🌸 visible pink layer */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[250px] h-[250px] bg-pink-300/30 blur-[80px] top-[-80px] left-[-80px]" />
        <div className="absolute w-[200px] h-[200px] bg-rose-300/20 blur-[80px] bottom-[-80px] right-[-80px]" />
      </div>

      <div className="relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-pink-100 dark:bg-pink-500/10">
            <span className="text-2xl">{icon}</span>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>

        <div className="space-y-4">
          {data.map((item, index) => (
            <SkillBar
              key={item.name}
              {...item}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 bg-white dark:bg-black overflow-hidden"
    >

      {/* 🌸 GLOBAL LAYER (BIAR GAK FLAT) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-pink-400/25 blur-[140px] top-[-120px] left-[-120px]" />
        <div className="absolute w-[500px] h-[500px] bg-rose-300/20 blur-[140px] bottom-[-150px] right-[-150px]" />
        <div className="absolute inset-0 bg-white/60 dark:bg-black/40" />
      </div>

      <div className="relative container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-pink-500 font-medium tracking-widest text-sm">
            📚 Pelajaran Sekolah ✨
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-3 mb-4 text-gray-900 dark:text-white">
            My <span className="text-pink-500">Subjects 🎓</span>
          </h2>

          <p className="text-pink-500/80 dark:text-pink-300 max-w-md mx-auto text-sm">
            ✨ Perkembangan kemampuan di berbagai mata pelajaran dan skill pendukung belajar ✨
          </p>

          <div className="w-24 h-[3px] bg-gradient-to-r from-pink-400 to-rose-300 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <SubjectCard
            title="📘 Pelajaran Utama"
            icon="📚"
            data={subjects.utama}
            delay={0}
          />

          <SubjectCard
            title="🎨 Pelajaran Tambahan"
            icon="🧠"
            data={subjects.tambahan}
            delay={0.1}
          />

          <SubjectCard
            title="🚀 Skill Pendukung"
            icon="✨"
            data={subjects.lainnya}
            delay={0.2}
          />
        </div>

      </div>
    </section>
  );
}