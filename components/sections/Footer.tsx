import { navLinks, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-void">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr_1fr] md:px-8 md:py-20">
        <div>
          <p className="text-xl font-semibold">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm text-muted">
            Full-stack engineer building production systems — based in {site.location}.
          </p>
        </div>
        <div>
          <p className="text-sm text-muted">Menu</p>
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
          <p className="text-sm text-muted">Connect</p>
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
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl justify-between border-t border-line px-5 py-6 text-xs text-muted md:px-8">
        <span>© {new Date().getFullYear()} {site.shortName}</span>
        <span>{site.location}</span>
      </div>
    </footer>
  );
}
