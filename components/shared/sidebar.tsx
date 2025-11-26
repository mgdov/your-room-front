"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { LucideIcon } from "lucide-react"
import { sidebarNavigation } from "@/lib/navigation"
import { cn } from "@/lib/utils"

export default function Sidebar() {
  const pathname = usePathname()
  return (
    <aside
      className="flex w-64 shrink-0 border-r border-slate-800 p-6 sticky top-0 h-screen flex-col"
      style={{ backgroundColor: "rgb(23, 31, 38)" }}
    >
      <Link href="/" className="flex items-center gap-2 mb-8 hover:opacity-80 transition-opacity">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="black"
            />
          </svg>
        </div>
        <span className="font-bold text-white text-lg">HYPERLIKE</span>
      </Link>

      <nav className="space-y-3 flex-1 w-full">
        {sidebarNavigation.map((item) => (
          <SidebarNavItem
            key={item.href}
            href={item.href}
            label={item.label}
            Icon={item.Icon}
            active={pathname === item.href}
            isPrimary={item.isPrimary}
          />
        ))}
      </nav>
    </aside>
  )
}

interface SidebarNavItemProps {
  href: string
  label: string
  Icon: LucideIcon
  active: boolean
  isPrimary?: boolean
}

function SidebarNavItem({ href, label, Icon, active, isPrimary }: SidebarNavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
        isPrimary
          ? active
            ? "bg-slate-800 text-white"
            : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
          : active
            ? "text-white"
            : "text-slate-400 hover:text-white",
      )}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium text-sm">{label}</span>
    </Link>
  )
}
