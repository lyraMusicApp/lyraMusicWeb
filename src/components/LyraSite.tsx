import {
  Sparkles,
  Download,
  Wand2,
  BookOpen,
  ArrowRight,
  Twitter,
  Linkedin,
  Instagram,
  Menu,
  Plus,
  Music2,
  Github,
  Search,
  Mic2,
  Car,
  Layers,
  Headphones,
  Smartphone,
  ChevronRight,
  Heart,
  Play,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const VIDEO = "https://files.catbox.moe/127kmb.mp4";

// Always resolves to the newest release APK the developer publishes on GitHub
const APK_URL =
  "https://github.com/shnwazdeveloper/lyraMusic/releases/latest/download/Lyra-Music.apk";
const REPO_URL = "https://github.com/shnwazdeveloper/lyraMusic";
const RELEASES_URL = "https://github.com/shnwazdeveloper/lyraMusic/releases/latest";

const features = [
  { Icon: Search, title: "Universal Search", desc: "Find songs, videos, albums, and playlists in one place." },
  { Icon: Music2, title: "Background Playback", desc: "Stream uninterrupted while you do everything else." },
  { Icon: Download, title: "Offline Downloads", desc: "Save tracks locally and listen without a connection." },
  { Icon: Mic2, title: "Synced Lyrics", desc: "Sing along with lyrics rendered as the song plays." },
  { Icon: Layers, title: "Library & Playlists", desc: "Organize your music with smart, simple controls." },
  { Icon: Car, title: "Android Auto", desc: "Native media controls and Android Auto support." },
];

const stats = [
  { k: "100%", v: "Open source" },
  { k: "0", v: "Ads, ever" },
  { k: "6.0+", v: "Android" },
  { k: "Latest", v: "Auto-updated release" },
];

function Logo({ size = 32 }: { size?: number }) {
  return (
    <span
      className="liquid-glass flex items-center justify-center rounded-full"
      style={{ width: size, height: size }}
    >
      <Music2 style={{ width: size * 0.45, height: size * 0.45 }} className="text-white" />
    </span>
  );
}

const NAV_LINKS = [
  { id: "features", label: "Features" },
  { id: "preview", label: "Preview" },
  { id: "download", label: "Download" },
] as const;

export function LyraSite() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative w-full bg-black text-white">
      {/* HERO with looping video */}
      <section className="relative w-full overflow-hidden">
        <video
          src={VIDEO}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />

        <div className="relative z-10 flex min-h-screen w-full flex-col">
          {/* HERO PANEL */}
          <div className="relative flex w-full flex-1">
            <div className="relative flex w-full flex-col p-5 sm:p-8 lg:p-12">
              {/* Nav */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Logo size={22} />
                  <span className="text-sm font-semibold tracking-tighter text-white sm:text-base">
                    lyra
                  </span>
                </div>

                <nav className="liquid-glass hidden items-center gap-1 rounded-full px-2 py-1.5 text-sm text-white/70 md:flex">
                  {NAV_LINKS.map((l) => {
                    const active = activeSection === l.id;
                    return (
                      <a
                        key={l.id}
                        href={`#${l.id}`}
                        className={`rounded-full px-3 py-1.5 transition-all ${
                          active
                            ? "bg-white/15 text-white"
                            : "hover:text-white"
                        }`}
                      >
                        {l.label}
                      </a>
                    );
                  })}
                  <a href={REPO_URL} target="_blank" rel="noreferrer" className="rounded-full px-3 py-1.5 transition-colors hover:text-white">GitHub</a>
                </nav>
                <div className="flex items-center gap-2">
                  <a
                    href={REPO_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="liquid-glass hidden h-10 w-10 items-center justify-center rounded-full text-white transition-transform hover:scale-105 sm:flex md:hidden"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={APK_URL}
                    className="liquid-glass-strong hidden items-center gap-2 rounded-full px-4 py-2 text-sm text-white transition-transform hover:scale-105 md:inline-flex"
                  >
                    <Download className="h-4 w-4" /> Get App
                  </a>
                </div>
              </div>

              {/* Center hero */}
              <div className="flex flex-1 flex-col items-center justify-center py-12 text-center [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]">
                <Logo size={72} />
                <h1 className="mt-6 text-balance text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  Your music,{" "}
                  <em className="font-serif font-medium italic text-white/85">
                    beautifully
                  </em>{" "}
                  reimagined.
                </h1>
                <p className="mt-5 max-w-xl text-balance text-sm text-white/80 sm:text-base">
                  Lyra is a free, open-source music player for Android — Material You,
                  synced lyrics, offline library, and zero ads.
                </p>

                <a
                  href={APK_URL}
                  className="liquid-glass-strong mt-8 inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm text-white transition-transform hover:scale-105 active:scale-95"
                >
                  <span>Download APK</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                    <Download className="h-3.5 w-3.5" />
                  </span>
                </a>

                <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                  {["Material You", "Offline Library", "Synced Lyrics"].map((p) => (
                    <span
                      key={p}
                      className="liquid-glass rounded-full px-3 py-1.5 text-[11px] text-white/80 sm:text-xs"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom quote */}
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-widest text-white/50 sm:text-xs">
                  Visionary Design
                </p>
                <p className="mt-2 text-base text-white sm:mt-3 sm:text-2xl">
                  <span>"We imagined a sound with </span>
                  <em className="font-serif font-medium italic text-white/80">no ending</em>
                  <span>."</span>
                </p>
                <div className="mt-3 flex items-center justify-center gap-3 text-[10px] uppercase tracking-widest text-white/60 sm:text-xs">
                  <span className="h-px w-8 bg-white/30 sm:w-10" />
                  Marcus Aurelio
                  <span className="h-px w-8 bg-white/30 sm:w-10" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/10 bg-black px-5 py-10 sm:py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 text-center sm:grid-cols-4">
          {stats.map(({ k, v }, i) => (
            <Reveal key={v} delay={i * 90}>
              <p className="text-3xl font-medium tracking-tight sm:text-4xl">{k}</p>
              <p className="mt-1 text-xs text-white/50 sm:text-sm">{v}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="scroll-mt-20 bg-black px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50 sm:text-xs">
              Features
            </p>
            <h2 className="mt-3 max-w-2xl text-balance text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
              Everything a music app should be —
              <br className="hidden sm:inline" />{" "}
              <em className="font-serif italic text-white/70">nothing it shouldn't.</em>
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ Icon, title, desc }, i) => (
              <Reveal
                key={title}
                delay={i * 120}
                className="liquid-glass rounded-3xl p-5 transition-transform hover:scale-[1.02] sm:p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-5 text-base font-medium sm:text-lg">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PREVIEW / now-playing mock */}
      <section id="preview" className="scroll-mt-20 bg-black px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2">
          <Reveal>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50 sm:text-xs">
              Now Playing
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
              Music that follows
              <br />
              <em className="font-serif italic text-white/70">your every move.</em>
            </h2>
            <p className="mt-4 max-w-md text-sm text-white/60 sm:text-base">
              Background playback, lockscreen controls, Android Auto, and a Material You
              palette that adapts to your wallpaper.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={APK_URL}
                className="liquid-glass-strong inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm text-white transition-transform hover:scale-105"
              >
                <Download className="h-4 w-4" /> Get the APK
              </a>
              <a
                href={RELEASES_URL}
                target="_blank"
                rel="noreferrer"
                className="liquid-glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm text-white transition-transform hover:scale-105"
              >
                Releases <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          {/* Phone mock - playable preview */}
          <Reveal delay={150}>
            <PhonePreview />
          </Reveal>
        </div>
      </section>

      {/* DOWNLOAD CTA */}
      <section id="download" className="scroll-mt-20 bg-black px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl">
          <Reveal className="liquid-glass-strong relative rounded-3xl p-8 sm:p-14">
            <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <div className="liquid-glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-white/70">
                  <Smartphone className="h-3.5 w-3.5" /> Android 6.0+
                </div>
                <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
                  Take Lyra
                  <em className="font-serif italic text-white/70"> with you.</em>
                </h2>
                <p className="mt-3 text-sm text-white/60 sm:text-base">
                  Free, open-source, and lightweight. Sideload the APK directly from the
                  latest GitHub release.
                </p>
                <div className="mt-5 flex items-center gap-3 text-xs text-white/50">
                  <Headphones className="h-4 w-4" />
                  Designed for everyday listening.
                </div>
              </div>

              <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:flex-col">
                <a
                  href={APK_URL}
                  className="liquid-glass-strong inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
                >
                  <Download className="h-4 w-4" /> Download APK
                </a>
                <a
                  href={REPO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="liquid-glass inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
                >
                  <Github className="h-4 w-4" /> View on GitHub
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER — video-textured wordmark */}
      <footer className="relative border-t border-white/10 bg-black px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <svg
            viewBox="0 0 1000 140"
            className="mx-auto h-auto w-full max-w-[140px] sm:max-w-[160px]"
            preserveAspectRatio="xMidYMid meet"
            aria-label="@ 2026 lyra music"
          >
            <defs>
              <clipPath id="lyra-text-clip">
                <text
                  x="500"
                  y="70"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontFamily="Inter, ui-sans-serif, system-ui"
                  fontWeight="900"
                  fontSize="110"
                  letterSpacing="-2"
                  textLength="940"
                  lengthAdjust="spacingAndGlyphs"
                >
                  @ 2026 LYRA MUSIC
                </text>
              </clipPath>
            </defs>
            <foreignObject width="1000" height="140" clipPath="url(#lyra-text-clip)">
              <video
                src={VIDEO}
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </foreignObject>
          </svg>
        </div>

      </footer>





    </main>
  );
}

const SONG = {
  id: "OMPHhaJFPQo",
  title: "Baarish Mein Phir",
  artist: "Saahel",
  thumb: "https://i.ytimg.com/vi/OMPHhaJFPQo/hqdefault.jpg",
  watchUrl: "https://youtu.be/OMPHhaJFPQo",
};

function PhonePreview() {
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [liked, setLiked] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const sendCommand = (func: "playVideo" | "pauseVideo") => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args: [] }),
      "*",
    );
  };

  const togglePlay = () => {
    if (!started) {
      setStarted(true);
      setPlaying(true);
      return;
    }
    if (playing) {
      sendCommand("pauseVideo");
      setPlaying(false);
    } else {
      sendCommand("playVideo");
      setPlaying(true);
    }
  };

  return (
    <div className="mx-auto w-full max-w-xs sm:max-w-sm">
      <div className="liquid-glass-strong rounded-[2.5rem] p-4">
        <div className="liquid-glass rounded-[2rem] p-5">
          <div className="flex items-center justify-between text-[10px] text-white/60">
            <span>9:41</span>
            <span>Lyra</span>
          </div>

          <div className="mt-5 flex items-center justify-center">
            <button
              type="button"
              onClick={togglePlay}
              className="group relative h-44 w-44 overflow-hidden rounded-3xl"
              aria-label={playing ? "Pause" : `Play ${SONG.title}`}
            >
              <img
                src={SONG.thumb}
                alt={SONG.title}
                className="h-full w-full object-cover"
              />
              <span
                className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity ${
                  playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                }`}
              >
                <span className="liquid-glass-strong flex h-12 w-12 items-center justify-center rounded-full">
                  {playing ? (
                    <span className="flex h-4 gap-1">
                      <span className="block h-full w-1.5 rounded-sm bg-white" />
                      <span className="block h-full w-1.5 rounded-sm bg-white" />
                    </span>
                  ) : (
                    <Play className="h-5 w-5 fill-white" />
                  )}
                </span>
              </span>
            </button>
          </div>

          {/* Hidden YouTube player — audio only, no visible YouTube UI */}
          {started && (
            <iframe
              ref={iframeRef}
              className="pointer-events-none absolute h-px w-px opacity-0"
              style={{ left: "-9999px", top: "-9999px" }}
              src={`https://www.youtube.com/embed/${SONG.id}?autoplay=1&controls=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
              title={SONG.title}
              allow="autoplay; encrypted-media"
            />
          )}

          <div className="mt-5 text-center">
            <p className="truncate text-base font-medium">{SONG.title}</p>
            <p className="truncate text-xs text-white/60">{SONG.artist}</p>
          </div>

          <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className={`h-full rounded-full bg-white transition-all duration-700 ${
                playing ? "w-3/5" : "w-1/4"
              }`}
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-[10px] text-white/50">
            <span>{playing ? "0:08" : "0:00"}</span>
          </div>


          <div className="mt-5 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => setLiked((v) => !v)}
              className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-105"
              aria-pressed={liked}
              aria-label="Like"
            >
              <Heart
                className={`h-4 w-4 ${liked ? "fill-white text-white" : ""}`}
              />
            </button>
            <button
              type="button"
              onClick={togglePlay}
              className="liquid-glass-strong flex h-14 w-14 items-center justify-center rounded-full transition-transform hover:scale-105"
              aria-label={playing ? "Pause" : "Play"}
            >
              {playing ? (
                <span className="flex h-4 gap-1">
                  <span className="block h-full w-1.5 rounded-sm bg-white" />
                  <span className="block h-full w-1.5 rounded-sm bg-white" />
                </span>
              ) : (
                <Play className="h-5 w-5 fill-white" />
              )}
            </button>
            <button
              type="button"
              className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-105"
              aria-label="Lyrics"
            >
              <Mic2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
