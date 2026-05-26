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

      <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: delay + 0.1 }}
          className="h-full rounded-full"
          style={{
            background:
              'linear-gradient(90deg, #f9a8d4, #fb7185, #fbcfe8)',
            boxShadow: '0 0 12px rgba(251, 113, 133, 0.35)',
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
        border border-gray-200 dark:border-gray-800
        bg-white dark:bg-gray-900
        shadow-sm hover:shadow-md transition
      "
    >
      <div className="absolute inset-0 opacity-10 bg-pink-300 blur-3xl" />

      <div className="relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-pink-100 dark:bg-pink-900/20">
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
      className="
        py-24 md:py-32
        bg-white dark:bg-black
        transition-colors duration-500
      "
    >
      <div className="container mx-auto px-4">
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

          <h2
            className="
              text-4xl md:text-6xl font-bold mt-3 mb-4
              bg-gradient-to-r from-black via-gray-800 to-pink-400
              dark:from-white dark:via-gray-200 dark:to-pink-300
              text-transparent bg-clip-text
            "
          >
            My <span className="text-pink-500">Subjects 🎓</span>
          </h2>

          <p className="text-pink-500/80 dark:text-pink-300 max-w-md mx-auto text-sm">
            ✨ Perkembangan kemampuan di berbagai mata pelajaran dan skill pendukung belajar ✨
          </p>

          <div className="w-24 h-[3px] bg-gradient-to-r from-black to-pink-400 dark:from-white dark:to-pink-300 mx-auto mt-6 rounded-full" />
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