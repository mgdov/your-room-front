"use client"

import { useState } from "react"
import { PageLayout, PageTitle, Card } from "@/components/shared"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  description: string
  date: string
  category: string
}

const ALL_BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Что делать, если ваш Telegram-канал получил пометку «накрутка / скам»",
    description:
      "Просмотры лесенкой Купить Метка «скам» или «накрутка» в Telegram — неприятный сигнал для любого владельца канала.",
    date: "11 октября 14:24",
    category: "Подробнее",
  },
  {
    id: 2,
    title: "Накрутка рефералов OneWin в Telegram — быстрый старт и рост дохода",
    description: "Рефералы OneWin Купить Накрутка рефералов OneWin — это эффективный способ быстро увеличить доход.",
    date: "10 октября 23:18",
    category: "Подробнее",
  },
  {
    id: 3,
    title: "Рейтинг пользователей Telegram: зачем он нужен и как работает",
    description:
      "Рейтинг в Telegram - это важный показатель вашей репутации в мессенджере. Узнайте, как он формируется.",
    date: "31 июля 23:05",
    category: "Подробнее",
  },
  {
    id: 4,
    title: "Накрутка лайков на видео YouTube",
    description:
      "YouTube лайки Купить Лайки под видео YouTube — один из ключевых сигналов для алгоритмов и зрителей.",
    date: "21 апреля 19:26",
    category: "Подробнее",
  },
  {
    id: 5,
    title: "Накрутка подписчиков в Телеграм",
    description:
      "Телеграм подписчики Купить Телеграм — это платформа, где сегодня развиваются сообщества, строится доверие.",
    date: "21 апреля 19:26",
    category: "Подробнее",
  },
  {
    id: 6,
    title: "Раскрутка YouTube-канала",
    description:
      "YouTube просмотры Купить YouTube подписчики Купить Успех на YouTube складывается из многих факторов.",
    date: "21 апреля 19:26",
    category: "Подробнее",
  },
  {
    id: 7,
    title: "Накрутка зрителей на стрим YouTube",
    description: "YouTube просмотры Купить Проводите прямые эфиры на YouTube и хотите выглядеть популярнее?",
    date: "21 апреля 19:25",
    category: "Подробнее",
  },
  {
    id: 8,
    title: "Накрутка реакций в Телеграм",
    description: "Телеграм реакции Купить Реакции в Телеграм — это не просто эмоции, это показатель вовлечённости.",
    date: "21 апреля 19:24",
    category: "Подробнее",
  },
  {
    id: 9,
    title: "Накрутка просмотров в YouTube",
    description:
      "YouTube просмотры Купить Каждое видео на YouTube требует первых просмотров — это запускает цепочку органического продвижения.",
    date: "21 апреля 19:24",
    category: "Подробнее",
  },
  {
    id: 10,
    title: "Накрутка голосов в телеграм канале",
    description: "Telegram голоса Купить Проводите опрос в Телеграм и хотите набрать больше голосов?",
    date: "21 апреля 19:24",
    category: "Подробнее",
  },
  {
    id: 11,
    title: "Накрутка подписчиков в YouTube",
    description:
      "YouTube подписчики Купить Количество подписчиков на YouTube — ключевой фактор доверия, продвижения и монетизации.",
    date: "21 апреля 19:23",
    category: "Подробнее",
  },
  {
    id: 12,
    title: "Накрутка комментариев в Телеграм",
    description:
      "Telegram комментарии Купить Комментарии в Телеграм — это важный индикатор жизни в канале.",
    date: "21 апреля 19:23",
    category: "Подробнее",
  },
  {
    id: 13,
    title: "Накрутка подписок в Инстаграм",
    description:
      "Инстаграм подписки Купить Накрутка подписок Инстаграм — это стратегия, когда ваш аккаунт подписывается на других пользователей.",
    date: "21 апреля 19:23",
    category: "Подробнее",
  },
  {
    id: 14,
    title: "Накрутка подписчиков в ВК",
    description:
      "ВКонтакте подписчики Купить Количество подписчиков в ВКонтакте напрямую влияет на доверие аудитории.",
    date: "21 апреля 19:22",
    category: "Подробнее",
  },
  {
    id: 15,
    title: "Накрутка комментариев в Instagram",
    description:
      "Instagram комментарии Купить Комментарии — это один из самых ценных видов активности в Instagram.",
    date: "21 апреля 19:22",
    category: "Подробнее",
  },
]

const POSTS_PER_PAGE = 10

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(ALL_BLOG_POSTS.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = ALL_BLOG_POSTS.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <PageLayout>
      <h1 className="text-4xl font-bold mb-8">Новости</h1>

      <div className="space-y-6 mb-8">
        {currentPosts.map((post) => (
          <article
            key={post.id}
            className="border-b border-slate-800 pb-6 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <h2 className="text-xl font-bold mb-3 text-white">{post.title}</h2>
            <div className="flex items-center justify-between">
              <button className="text-green-500 hover:text-green-400 font-medium text-sm">
                {post.category}
              </button>
              <span className="text-slate-500 text-sm">{post.date}</span>
            </div>
          </article>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg bg-slate-800 border border-slate-700 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`px-4 py-2 rounded-lg border transition-colors ${currentPage === page
                  ? "bg-purple-600 border-purple-600 text-white"
                  : "bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-300"
                }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg bg-slate-800 border border-slate-700 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </PageLayout>
  )
}
