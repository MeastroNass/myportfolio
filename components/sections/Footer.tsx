import { navLinks, site } from "@/lib/content";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-ink text-bg">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr_1fr] md:px-8 md:py-24">
        <div>
          <p className="font-serif text-4xl">Let’s build the next system.</p>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-accent"
          >
            WhatsApp {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="mt-2 block text-sm text-bg/80">
            {site.email}
          </a>
          <p className="mt-2 text-sm text-bg/60">{site.location}</p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-bg/50">On this page</p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-bg/50">Elsewhere</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a href={site.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={site.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={site.website} target="_blank" rel="noreferrer">
                maestronasir.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl justify-between border-t border-white/10 px-5 py-6 text-xs text-bg/50 md:px-8">
        <span>{site.name}</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
