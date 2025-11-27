"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { LucideIcon } from "lucide-react"
import {
  ChevronRight,
  LayoutGrid,
  Plus,
  ShoppingCart,
  X,
} from "lucide-react"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { footerNavigation, sidebarNavigation } from "@/lib/navigation"
import { cn } from "@/lib/utils"
import { Logo } from "./logo"

export default function Sidebar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const mobileNav = [
    {
      key: "orders",
      href: "/orders/all",
      label: "Заказы",
      Icon: ShoppingCart,
      isActive: pathname.startsWith("/orders"),
    },
    {
      key: "create",
      href: "/",
      label: "Заказать",
      Icon: Plus,
      isActive: pathname === "/" || pathname.startsWith("/order"),
    },
  ]

  return (
    <>
      <aside
        className="hidden md:flex w-64 shrink-0 border-r border-slate-800 p-6 sticky top-0 h-screen flex-col"
        style={{ backgroundColor: "rgb(23, 31, 38)" }}
      >
        <Link href="/" className="mb-8 flex items-center transition-opacity hover:opacity-80">
          <Logo
            className="gap-2"
            iconClassName="h-10 w-10 rounded-full bg-white p-1.5"
            textClassName="text-lg font-bold uppercase text-white"
            iconSize={36}
            priority
          />
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

      <MobileNav
        items={mobileNav}
        onMenuClick={() => setMenuOpen(true)}
        menuActive={menuOpen}
      />

      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent
          side="bottom"
          className="bg-[rgb(23,31,38)] border-t border-slate-800 text-white p-6 pb-8 md:hidden"
        >
          <SheetHeader className="mb-4 flex-row items-center justify-between gap-3 p-0">
            <SheetTitle className="text-lg font-semibold text-white">Меню</SheetTitle>
            <SheetClose className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 text-slate-300 transition-colors hover:border-slate-700 hover:text-white">
              <X className="h-4 w-4" />
              <span className="sr-only">Закрыть меню</span>
            </SheetClose>
          </SheetHeader>
          <nav className="space-y-3">
            <div className="space-y-2">
              {sidebarNavigation
                .filter((item) => !item.external && !item.isPrimary)
                .sort((a, b) => (a.mobileOrder ?? 99) - (b.mobileOrder ?? 99))
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-lg border border-slate-800 px-4 py-3 transition-colors",
                      pathname === item.href
                        ? "bg-slate-800 text-white"
                        : "text-slate-300 hover:bg-slate-800/60 hover:text-white",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <item.Icon className="w-5 h-5" />
                      <span className="font-medium text-sm">{item.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </Link>
                ))}
            </div>

            <div className="border-t border-slate-800/60 pt-3 space-y-2">
              {footerNavigation.map((link) => {
                const Comp = link.external ? "a" : Link

                return (
                  <Comp
                    key={link.href}
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center justify-between rounded-lg border border-slate-800 px-4 py-3 text-slate-300 transition-colors hover:bg-slate-800/60 hover:text-white"
                  >
                    <div className="flex items-center gap-3">
                      <link.Icon className="w-5 h-5" />
                      <span className="font-medium text-sm">{link.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </Comp>
                )
              })}
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </>
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

interface MobileNavProps {
  items: Array<{
    key: string
    href: string
    label: string
    Icon: LucideIcon
    isActive: boolean
  }>
  onMenuClick: () => void
  menuActive: boolean
}

function MobileNav({ items, onMenuClick, menuActive }: MobileNavProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-slate-800 bg-[rgb(23,31,38)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-around px-4 py-2">
        {items.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className={cn(
              "flex flex-col items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
              item.isActive
                ? "text-green-400"
                : "text-slate-400 hover:text-slate-200",
            )}
          >
            <item.Icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}

        <button
          type="button"
          onClick={onMenuClick}
          className={cn(
            "flex flex-col items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
            menuActive
              ? "text-green-400"
              : "text-slate-400 hover:text-slate-200",
          )}
        >
          <LayoutGrid className="h-5 w-5" />
          <span>Меню</span>
        </button>
      </div>
    </div>
  )
}
