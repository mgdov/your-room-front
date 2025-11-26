import { Plus, ShoppingCart, Settings, Code, BookOpen, MessageCircle } from "lucide-react"
import type { NavigationItem } from "./types"

export const sidebarNavigation: NavigationItem[] = [
    { href: "/", label: "Новый заказ", Icon: Plus, isPrimary: true },
    { href: "/orders/all", label: "Мои заказы", Icon: ShoppingCart, isPrimary: true },
    { href: "/profile/settings", label: "Профиль", Icon: Settings },
    { href: "/developer", label: "API", Icon: Code },
    { href: "/blog", label: "Новости", Icon: BookOpen },
    { href: "/help", label: "Помощь", Icon: MessageCircle },
]
