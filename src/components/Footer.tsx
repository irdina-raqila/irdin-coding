import { motion } from 'framer-motion';
import { Github, Youtube, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/irdina-raqila/irdin-coding.git', label: 'GitHub' },
    { icon: Youtube, href: 'https://www.youtube.com/', label: 'YouTube' },
  ];

  return (
    <footer className="py-10 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>© {currentYear}</span>
              <span>—</span>
              <span>Irdina Raqila</span>
              <Heart className="h-4 w-4 text-pink-400 fill-pink-400" />
            </div>

            {/* 🌸 PERSONAL TEXT (ANTI TEMPLATE) */}
            <p className="text-xs mt-2 max-w-xs text-muted-foreground/70 leading-relaxed">
              ini cuma tempat kecil di internet…  
              tempat aku belajar, salah, ngulang lagi,  
              dan pelan-pelan jadi lebih ngerti 🌱
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-end gap-3"
          >

            {/* SOCIAL */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="p-2 rounded-full hover:bg-muted transition text-muted-foreground hover:text-pink-400"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* ✨ RAW FEEL (bukan quote template) */}
            <p className="text-xs text-muted-foreground/60 text-center md:text-right max-w-xs leading-relaxed">
              kadang ngerti, kadang blank…  
              tapi ya udah, lanjut aja dulu 💭
            </p>

          </motion.div>
        </div>
      </div>
    </footer>
  );
}