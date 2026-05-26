import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const certificates = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-SAA-123456",
    image: "🏆",
    color: "from-pink-300 via-rose-200 to-transparent",
  },
  {
    title: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "2023",
    credentialId: "GCP-PCD-789012",
    image: "☁️",
    color: "from-fuchsia-300 via-pink-200 to-transparent",
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta (Coursera)",
    date: "2023",
    credentialId: "META-FE-345678",
    image: "⚛️",
    color: "from-rose-300 via-pink-100 to-transparent",
  },
  {
    title: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "2023",
    credentialId: "MDB-DEV-901234",
    image: "🍃",
    color: "from-pink-200 via-rose-200 to-transparent",
  },
  {
    title: "Certified Kubernetes Administrator",
    issuer: "CNCF",
    date: "2022",
    credentialId: "CKA-567890",
    image: "⚙️",
    color: "from-fuchsia-200 via-pink-300 to-transparent",
  },
  {
    title: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "2022",
    credentialId: "PSM-I-234567",
    image: "📋",
    color: "from-rose-200 via-pink-200 to-transparent",
  },
];

export default function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="relative py-28 bg-white dark:bg-black overflow-hidden"
    >
      {/* soft ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-pink-300/10 blur-[140px] top-[-150px] left-[-120px]" />
        <div className="absolute w-[500px] h-[500px] bg-rose-300/10 blur-[140px] bottom-[-150px] right-[-120px]" />
      </div>

      <div className="container mx-auto px-4 relative">

        {/* HEADER (editorial style) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 max-w-2xl mx-auto text-center"
        >
          <span className="text-pink-500 tracking-[0.3em] text-xs uppercase">
            Credentials
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
            My{" "}
            <span className="text-pink-400">Certificates</span>
          </h2>

          <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm">
            Sertifikat yang pernah aku raih selama sekolah 🎓✨
          </p>
        </motion.div>

        {/* LAYOUT (not perfect grid → more natural feel) */}
        <div className="grid md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className={`
                relative group rounded-3xl p-[1px]
                bg-gradient-to-br ${cert.color}
              `}
            >
              <div
                className="
                  relative h-full rounded-3xl p-6
                  bg-white dark:bg-[#0b0b10]
                  transition duration-500
                  group-hover:-translate-y-2
                "
              >
                {/* floating glow blob */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute w-40 h-40 bg-pink-300/20 blur-3xl top-[-20px] right-[-20px]" />
                </div>

                {/* icon */}
                <div className="text-4xl mb-4 transition group-hover:scale-110 duration-300">
                  {cert.image}
                </div>

                {/* title */}
                <div className="flex items-start gap-2">
                  <Award className="h-5 w-5 text-pink-400 mt-1" />
                  <h3 className="font-semibold text-lg leading-snug group-hover:text-pink-400 transition">
                    {cert.title}
                  </h3>
                </div>

                {/* issuer */}
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {cert.issuer}
                </p>

                {/* meta */}
                <div className="flex items-center gap-2 text-xs text-gray-400 mt-3">
                  <Calendar className="h-4 w-4" />
                  {cert.date}
                </div>

                <p className="text-[11px] mt-2 font-mono text-gray-400">
                  ID: {cert.credentialId}
                </p>

                {/* button */}
                <div className="mt-5">
                  <Button
                    size="sm"
                    className="
                      rounded-full
                      bg-pink-400/10 text-pink-500
                      hover:bg-pink-400 hover:text-white
                      transition
                    "
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}