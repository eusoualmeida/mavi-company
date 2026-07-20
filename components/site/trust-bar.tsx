import { Check } from "lucide-react"
import { trust } from "@/lib/site"

export function TrustBar() {
  return (
    <ul className="flex flex-wrap items-center gap-2.5 sm:gap-3">
      {trust.map((item) => (
        <li
          key={item}
          className="rounded-pill border border-line bg-cream-2 inline-flex items-center gap-2 px-3.5 py-2"
        >
          <Check className="text-orange h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span className="text-indigo text-[13px] font-medium">{item}</span>
        </li>
      ))}
    </ul>
  )
}
