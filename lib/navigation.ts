import { ArrowUpRight, MessageCircle, BookOpen, Code, Plus, Settings, ShoppingCart } from "lucide-react"
import type { FooterNavigationItem, NavigationItem } from "./types"

export const sidebarNavigation: NavigationItem[] = [
    { href: "/", label: "Новый заказ", Icon: Plus, isPrimary: true },
    { href: "/orders/all", label: "Мои заказы", Icon: ShoppingCart, isPrimary: true },
    { href: "/blog", label: "Блог", Icon: BookOpen, mobileOrder: 1 },
    { href: "/developer", label: "API", Icon: Code, mobileOrder: 2 },
    { href: "/help", label: "Помощь", Icon: MessageCircle, mobileOrder: 3 },
    { href: "/profile/settings", label: "Профиль", Icon: Settings, mobileOrder: 4 },
]

export const footerNavigation: FooterNavigationItem[] = [
    {
        href: "/rules",
        label: "Пользовательское соглашение",
        Icon: ArrowUpRight,
        external: false,
    },
    {
        href: "/privacy",
        label: "Обработка персональных данных",
        Icon: ArrowUpRight,
        external: false,
    },
    {
        href: "/contacts",
        label: "Контакты",
        Icon: ArrowUpRight,
        external: false,
    },
]
