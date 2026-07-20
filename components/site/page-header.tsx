import React from "react"

type Props = {
  kicker?: string
  title: React.ReactNode
  description?: string
}

export function PageHeader({ kicker, title, description }: Props) {
  return (
    <section className="px-5 pb-10 pt-28 md:px-8 md:pb-14 md:pt-40">
      <div className="mx-auto max-w-[1120px]">
        {kicker && <p className="kicker text-orange-ink">{kicker}</p>}
        <h1 className="display-1 text-indigo mt-4 max-w-[18ch]">{title}</h1>
        {description && <p className="body-lg measure mt-6">{description}</p>}
      </div>
    </section>
  )
}
