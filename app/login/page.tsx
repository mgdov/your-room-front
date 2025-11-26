"use client"

import Link from "next/link"
import { PageLayout } from "@/components/shared"

export default function LoginPage() {
  return (
    <PageLayout
      showSidebar={false}
      headerProps={{ showSearch: false, showActions: false }}
      containerClassName="flex items-center justify-center"
      contentClassName="w-full max-w-md"
    >
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Вход в аккаунт</h1>
        <form
          className="space-y-4"
          onSubmit={(event) => {
            event.preventDefault()
            // TODO: отправить данные на бэкенд авторизации
          }}
        >
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="login-email">
              Email
            </label>
            <input
              id="login-email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
              className="w-full bg-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-2 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="login-password">
              Пароль
            </label>
            <input
              id="login-password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="w-full bg-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-2 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg transition-colors mt-6"
          >
            Войти
          </button>
        </form>

        <div className="text-center text-slate-400 text-sm mt-4">
          Нет аккаунта? {" "}
          <Link href="/registration" className="text-purple-400 hover:text-purple-300">
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}
