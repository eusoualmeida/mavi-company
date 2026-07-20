import Link from "next/link"
import { Instagram } from "lucide-react"
import { nav, services, site, whatsappUrl } from "@/lib/site"

const legal = [
  { label: "Privacidade", href: "/privacidade" },
  { label: "Termos", href: "/termos" },
  { label: "LGPD", href: "/lgpd" },
]

export function Footer() {
  return (
    <footer className="bg-indigo text-cream">
      {/* Filete laranja */}
      <div className="bg-orange h-1 w-full" aria-hidden="true" />

      <div className="mx-auto max-w-[1120px] px-5 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <p className="font-disp text-base font-bold tracking-[-0.03em]">
              {site.name}
              <span className="text-orange">.</span>
            </p>
            <p className="text-cream/60 measure mt-4 text-sm leading-relaxed">
              Resolvo processo manual com IA e automação — e deixo rodando na sua operação.
            </p>
          </div>

          <div>
            <p className="kicker text-cream/40">Navegação</p>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream/70 hover:text-cream inline-flex text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="kicker text-cream/40">Serviços</p>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.n}>
                  <a
                    href={whatsappUrl(`Olá! Tenho interesse em "${service.title}".`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/70 hover:text-cream inline-flex text-sm transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="kicker text-cream/40">Contato</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 hover:text-cream inline-flex text-sm transition-colors"
                >
                  {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-cream/70 hover:text-cream inline-flex text-sm transition-colors"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 hover:text-cream inline-flex items-center gap-2 text-sm transition-colors"
                  aria-label="Instagram da MaviCompany"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  @mavicompanybr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-cream/10 mt-14 flex flex-col gap-5 border-t pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-serif text-cream/80 text-lg italic">{site.legalName}</p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-cream/50 hover:text-cream text-xs transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <p className="text-cream/40 text-xs">
              © {new Date().getFullYear()} {site.legalName}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
