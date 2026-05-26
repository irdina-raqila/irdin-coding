import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "dinaaaqila9@gmail.com",
    href: "mailto:dinaaaqila9@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+62 821-7408-3544",
    href: "tel:+6282174083544",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Banda Aceh, Indonesia",
    href: "https://maps.app.goo.gl/fE8QqoKS2t1tzvdR8",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      toast({
        title: "Message sent 💖",
        description: "I’ll reply soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast({
        title: "Failed",
        description: "Try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-32 bg-white dark:bg-black overflow-hidden">

      {/* BACKGROUND LAYERS (SAFE - NO LAYOUT SHIFT) */}
      <div className="absolute inset-0 -z-30">
        <div className="absolute w-[700px] h-[700px] bg-pink-200/20 blur-[180px] top-[-200px] left-[-200px]" />
        <div className="absolute w-[600px] h-[600px] bg-rose-300/10 blur-[200px] bottom-[-200px] right-[-200px]" />
      </div>

      <div className="container mx-auto px-6 relative">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20 max-w-2xl mx-auto"
        >
          <p className="text-pink-400 tracking-[0.3em] text-xs uppercase">
            contact
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            Let’s{" "}
            <span className="text-pink-400">Connect</span>
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-4">
            Clean layout + soft pink depth, not template anymore.
          </p>
        </motion.div>

        {/* GRID (FIXED SEJAJAR) */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT */}
          <div className="space-y-6">

            {contactInfo.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="
                  flex items-center gap-5 p-6 rounded-3xl
                  bg-white/70 dark:bg-white/5
                  backdrop-blur-xl
                  border border-pink-100 dark:border-white/10
                  hover:translate-y-[-4px]
                  hover:shadow-[0_20px_60px_-20px_rgba(244,114,182,0.35)]
                  transition
                "
              >
                <div className="p-4 rounded-2xl bg-pink-200/40">
                  <item.icon className="text-pink-500" />
                </div>

                <div>
                  <p className="text-xs text-gray-400">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </motion.a>
            ))}

          </div>

          {/* RIGHT */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="
              p-8 rounded-3xl
              bg-white/70 dark:bg-white/5
              backdrop-blur-2xl
              border border-pink-100 dark:border-white/10
              shadow-[0_30px_90px_-40px_rgba(236,72,153,0.35)]
              space-y-5
            "
          >

            <Input
              placeholder="Your name"
              className="border-b border-pink-200 rounded-none bg-transparent focus:border-pink-400"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <Input
              placeholder="Email"
              className="border-b border-pink-200 rounded-none bg-transparent focus:border-pink-400"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <Input
              placeholder="Subject"
              className="border-b border-pink-200 rounded-none bg-transparent focus:border-pink-400"
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            />

            <Textarea
              placeholder="Message"
              rows={6}
              className="border-b border-pink-200 rounded-none bg-transparent focus:border-pink-400"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />

            <Button
              type="submit"
              disabled={loading}
              className="
                w-full rounded-full
                bg-pink-400 hover:bg-pink-500
                shadow-lg shadow-pink-300/40
              "
            >
              {loading ? (
                <Loader2 className="animate-spin mr-2" />
              ) : (
                <Send className="mr-2" />
              )}
              Send Message
            </Button>

          </motion.form>

        </div>
      </div>
    </section>
  );
}