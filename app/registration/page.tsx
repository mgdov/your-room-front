"use client"

import Link from "next/link"
import { PageLayout } from "@/components/shared"

export default function RegistrationPage() {
  return (
    <PageLayout
      showSidebar={false}
      headerProps={{ showSearch: false, showActions: false }}
      containerClassName="flex items-center justify-center"
      contentClassName="w-full max-w-md"
    >
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Регистрация</h1>
        <form
          className="space-y-4"
          onSubmit={(event) => {
            event.preventDefault()
            // TODO: отправить данные на бэкенд регистрации
          }}
        >
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="register-email">
              Email
            </label>
            <input
              id="register-email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
              className="w-full bg-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-2 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="register-password">
              Пароль
            </label>
            <input
              id="register-password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="w-full bg-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-2 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="register-password-confirmation">
              Повторите пароль
            </label>
            <input
              id="register-password-confirmation"
              name="passwordConfirmation"
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
            Зарегистрироваться
          </button>
        </form>

        <div className="text-center text-slate-400 text-sm mt-4">
          Уже есть аккаунт? {" "}
          <Link href="/login" className="text-purple-400 hover:text-purple-300">
            Войти
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}
