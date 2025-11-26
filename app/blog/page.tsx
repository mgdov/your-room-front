"use client"

import { useMemo, useState } from "react"
import { PageLayout, PageTitle, EmptyState } from "@/components/shared"
import { ChevronLeft, ChevronRight, Newspaper } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  description: string
  date: string
  category: string
  href?: string
}

const POSTS_PER_PAGE = 10

export default function BlogPage() {
  const [posts] = useState<BlogPost[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = posts.length ? Math.ceil(posts.length / POSTS_PER_PAGE) : 0
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = useMemo(() => posts.slice(startIndex, endIndex), [posts, startIndex, endIndex])

  const goToPage = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const showPlaceholder = posts.length === 0

  return (
    <PageLayout>
      <PageTitle
        title="Новости"
        subtitle="Раздел обновится после публикации материалов в админ-панели"
      />

      {showPlaceholder ? (
        <>
          <BlogListPlaceholder />
          <EmptyState
            icon={<Newspaper className="h-6 w-6" />}
            message="Здесь появятся новости, как только они будут опубликованы в админ-панели."
          />
        </>
      ) : (
        <div className="space-y-6 mb-8">
          {currentPosts.map((post) => (
            <article
              key={post.id}
              className="border-b border-slate-800 pb-6 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <h2 className="text-xl font-bold mb-3 text-white">{post.title}</h2>
              <p className="text-slate-400 mb-4 line-clamp-3">{post.description}</p>
              <div className="flex items-center justify-between">
                <button className="text-green-500 hover:text-green-400 font-medium text-sm">
                  {post.category}
                </button>
                <span className="text-slate-500 text-sm">{post.date}</span>
              </div>
            </article>
          ))}
        </div>
      )}

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

function BlogListPlaceholder() {
  return (
    <div className="space-y-6 mb-8">
      {Array.from({ length: 3 }).map((_, index) => (
        <article key={index} className="border-b border-slate-800 pb-6">
          <div className="h-6 w-3/4 rounded bg-slate-800/60 animate-pulse" />
          <div className="mt-4 h-4 w-full max-w-xl rounded bg-slate-800/40 animate-pulse" />
          <div className="mt-6 flex items-center justify-between">
            <div className="h-4 w-24 rounded bg-slate-800/50 animate-pulse" />
            <div className="h-4 w-32 rounded bg-slate-800/50 animate-pulse" />
          </div>
        </article>
      ))}
    </div>
  )
}
