import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const songs = [
  {
    title: "🎶 Until I Found You - Stephen Sanchez",
    description: "Lagu romantis vintage yang super hangat 💕",
    image: "/found.jpg",
    color: "from-rose-400 via-pink-400 to-orange-300",
  },
  {
    title: "🌙 End of Beginning - Djo",
    description: "Vibe nostalgia & deep reflection ✨",
    image: "/endof.jpg",
    color: "from-indigo-400 via-purple-400 to-pink-400",
  },
  {
    title: "☀️ Cruel Summer - Taylor Swift",
    description: "Summer vibe yang catchy & energetic 🔥",
    image: "/summer.jpg",
    color: "from-yellow-300 via-orange-400 to-rose-400",
  },
  {
    title: "💔 Sorry - Justin Bieber",
    description: "Throwback pop yang masih enak banget didengar 🎧",
    image: "/sorry.webp",
    color: "from-sky-400 via-blue-400 to-indigo-500",
  },
  {
    title: "✨ Enchanted - Taylor Swift",
    description: "Fairy tale vibes yang dreamy banget 🌸",
    image: "/enchanted.webp",
    color: "from-fuchsia-400 via-pink-300 to-purple-300",
  },
  {
    title: "🌷 Somebody's Pleasure - Aziz Hedra",
    description: "Lagu galau soft yang relate banget 💭",
    image: "/somebody.jpg",
    color: "from-emerald-300 via-green-400 to-teal-400",
  },
];

export default function SongsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section
      id="projects"
      className="
        relative py-24 overflow-hidden
        bg-white dark:bg-[#020617]
        text-gray-900 dark:text-white
      "
    >
      {/* 🌸 LAYER BACKGROUND (FIXED VISIBILITY) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">

        {/* glow kiri atas */}
        <div className="absolute w-[900px] h-[900px] bg-pink-300/30 blur-[220px] top-[-300px] left-[-300px]" />

        {/* glow kanan bawah */}
        <div className="absolute w-[800px] h-[800px] bg-rose-400/25 blur-[200px] bottom-[-300px] right-[-300px]" />

        {/* glow tengah */}
        <div className="absolute w-[600px] h-[600px] bg-fuchsia-300/15 blur-[180px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      </div>

      {/* header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold">
          🎧 Favorite Songs
        </h2>
        <p className="text-gray-500 dark:text-gray-300 mt-2">
          Lagu yang paling aku suka 💕
        </p>
      </div>

      {/* carousel */}
      <div className="relative max-w-6xl mx-auto px-4">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-6">

            {songs.map((song, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33%]"
              >
                <div className="
                  group p-4 rounded-2xl
                  bg-white/80 dark:bg-white/5
                  backdrop-blur-xl
                  border border-gray-200 dark:border-white/10
                  hover:-translate-y-2 transition duration-500
                ">

                  <div className="relative">
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${song.color} blur-2xl opacity-50 group-hover:opacity-90 transition`} />

                    <div className={`relative rounded-xl p-[2px] bg-gradient-to-r ${song.color}`}>
                      <div className="overflow-hidden rounded-xl aspect-[2/3] bg-black">
                        <img
                          src={song.image}
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                        />
                      </div>
                    </div>
                  </div>

                  <h3 className="mt-4 font-bold text-lg">
                    {song.title}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                    {song.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* buttons */}
        <Button
          onClick={scrollPrev}
          className="
            absolute left-2 top-1/2 -translate-y-1/2
            bg-white/90 dark:bg-white/10
            backdrop-blur-md
            border border-pink-200/40
          "
        >
          <ChevronLeft />
        </Button>

        <Button
          onClick={scrollNext}
          className="
            absolute right-2 top-1/2 -translate-y-1/2
            bg-white/90 dark:bg-white/10
            backdrop-blur-md
            border border-pink-200/40
          "
        >
          <ChevronRight />
        </Button>
      </div>
    </section>
  );
}