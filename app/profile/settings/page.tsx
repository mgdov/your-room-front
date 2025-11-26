"use client"

import { useCallback, useState } from "react"
import { Eye, EyeOff, Copy } from "lucide-react"
import { PageLayout } from "@/components/shared"
import Link from "next/link"
import { formatCurrency } from "@/lib/utils"

interface ProfileSettingsData {
  username: string
  email: string
  apiToken: string
  referralLink: string
}

interface PasswordFormState {
  current: string
  next: string
}

interface ProfileStats {
  totalOrders: number | null
  totalSpent: number | null
  invited: number | null
  monthEarned: number | null
  totalEarned: number | null
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("settings")
  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [endOldSessions, setEndOldSessions] = useState(false)
  const [profileSettings, setProfileSettings] = useState<ProfileSettingsData>({
    username: "",
    email: "",
    apiToken: "",
    referralLink: "",
  })
  const [passwordForm, setPasswordForm] = useState<PasswordFormState>({
    current: "",
    next: "",
  })
  const [stats] = useState<ProfileStats>({
    totalOrders: null,
    totalSpent: null,
    invited: null,
    monthEarned: null,
    totalEarned: null,
  })

  const handleCopy = useCallback((value: string) => {
    if (!value) return

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(value).catch(() => null)
    }
  }, [])

  const maskToken = useCallback((token: string) => {
    if (!token) return "—"
    return token.length <= 12 ? token : `${token.slice(0, 6)}…${token.slice(-6)}`
  }, [])

  const formatCurrencyOrDash = useCallback((value: number | null) => {
    if (value === null) return "—"
    return formatCurrency(value)
  }, [])

  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Профиль</h1>

        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setActiveTab("settings")}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${activeTab === "settings"
              ? "bg-slate-800 text-white"
              : "bg-slate-900/50 text-slate-400 hover:text-white"
              }`}
          >
            Настройки
          </button>
          <button
            onClick={() => setActiveTab("balance")}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${activeTab === "balance"
              ? "bg-slate-800 text-white"
              : "bg-slate-900/50 text-slate-400 hover:text-white"
              }`}
          >
            История баланса
          </button>
          <button
            onClick={() => setActiveTab("referral")}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${activeTab === "referral"
              ? "bg-slate-800 text-white"
              : "bg-slate-900/50 text-slate-400 hover:text-white"
              }`}
          >
            Реферальная система
          </button>
        </div>

        {activeTab === "settings" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Логин</h2>
                <div className="mb-4">
                  <div className="flex items-center justify-between bg-slate-800 rounded-lg px-4 py-3 border border-slate-700">
                    {profileSettings.username ? (
                      <span className="text-white">{profileSettings.username}</span>
                    ) : (
                      <span className="inline-flex h-4 w-24 rounded bg-slate-700/60 animate-pulse" aria-hidden="true" />
                    )}
                    <button
                      type="button"
                      onClick={() => handleCopy(profileSettings.username)}
                      disabled={!profileSettings.username}
                      className="text-purple-400 hover:text-purple-300 disabled:opacity-40 disabled:cursor-not-allowed"
                      aria-label="Скопировать логин"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-3 mt-6">Старый пароль</h3>
                <div className="mb-4">
                  <div className="relative">
                    <input
                      type={showOldPassword ? "text" : "password"}
                      value={passwordForm.current}
                      onChange={(event) =>
                        setPasswordForm((prev) => ({ ...prev, current: event.target.value }))
                      }
                      className="w-full bg-slate-800 text-white rounded-lg px-4 py-3 pr-12 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button
                      onClick={() => setShowOldPassword(!showOldPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                    >
                      {showOldPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-3 mt-6">Изменить пароль</h3>
                <div className="mb-4">
                  <div className="relative">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      value={passwordForm.next}
                      onChange={(event) =>
                        setPasswordForm((prev) => ({ ...prev, next: event.target.value }))
                      }
                      className="w-full bg-slate-800 text-white rounded-lg px-4 py-3 pr-12 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                    >
                      {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={endOldSessions}
                      onChange={(e) => setEndOldSessions(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-600 text-purple-600 focus:ring-2 focus:ring-purple-500"
                    />
                    <span>Завершить старые сессии</span>
                  </label>
                </div>

                <button type="button" className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-lg font-medium transition-colors">
                  Сохранить
                </button>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Настройки email</h2>

                <h3 className="text-lg font-semibold mb-3">Email</h3>
                <div className="mb-4">
                  <input
                    type="email"
                    value={profileSettings.email}
                    onChange={(event) =>
                      setProfileSettings((prev) => ({ ...prev, email: event.target.value }))
                    }
                    placeholder="Укажите email"
                    className="w-full bg-slate-800 text-white rounded-lg px-4 py-3 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <button type="button" className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-lg font-medium transition-colors">
                  Сохранить
                </button>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">API</h2>

                <h3 className="text-lg font-semibold mb-3">Ваш токен</h3>
                <div className="mb-4">
                  <div className="flex items-center justify-between bg-slate-800 rounded-lg px-4 py-3 border border-slate-700">
                    {profileSettings.apiToken ? (
                      <span className="text-white font-mono text-sm">{maskToken(profileSettings.apiToken)}</span>
                    ) : (
                      <span className="inline-flex h-4 w-40 max-w-full rounded bg-slate-700/60 animate-pulse" aria-hidden="true" />
                    )}
                    <button
                      type="button"
                      onClick={() => handleCopy(profileSettings.apiToken)}
                      disabled={!profileSettings.apiToken}
                      className="text-purple-400 hover:text-purple-300 disabled:opacity-40 disabled:cursor-not-allowed"
                      aria-label="Скопировать токен"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  disabled={!profileSettings.apiToken}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors mb-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Сменить токен
                </button>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors" type="button">
                  Выход
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🔑</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Google Authenticator</h3>
                <Link href="#" className="text-green-400 hover:text-green-300 font-medium">
                  Привязать
                </Link>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold mb-2">{stats.totalOrders ?? "—"}</div>
                <div className="text-slate-400">Всего заказов</div>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold mb-2">{formatCurrencyOrDash(stats.totalSpent)}</div>
                <div className="text-slate-400">Вы потратили</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "balance" && (
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Поиск"
                  className="w-full bg-slate-800 text-white placeholder-slate-500 rounded-lg px-4 py-3 pl-10 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <svg className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <select className="bg-slate-800 text-white rounded-lg px-4 py-3 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Все</option>
              </select>
            </div>

            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-white font-medium text-lg mb-2">Пока что изменений</p>
              <p className="text-slate-400">в балансе не было</p>
            </div>
          </div>
        )}

        {activeTab === "referral" && (
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">
                  Приглашайте пользователей и получайте <span className="text-green-400">10%</span> от их платежей
                </h3>
                <p className="text-slate-300 text-sm">
                  Средства будут добавлены к балансу вашей панели. Полученные деньги не могут быть выведены.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-white font-medium mb-3">Ваша ссылка</label>
              <div className="flex items-center justify-between bg-slate-800 rounded-lg px-4 py-3 border border-slate-700">
                {profileSettings.referralLink ? (
                  <span className="text-white break-all">{profileSettings.referralLink}</span>
                ) : (
                  <span className="inline-flex h-4 w-64 max-w-full rounded bg-slate-700/60 animate-pulse" aria-hidden="true" />
                )}
                <button
                  type="button"
                  onClick={() => handleCopy(profileSettings.referralLink)}
                  disabled={!profileSettings.referralLink}
                  className="text-purple-400 hover:text-purple-300 disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Скопировать реферальную ссылку"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4">Statistics</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <div className="text-slate-400 text-sm mb-2">Приглашено</div>
                <div className="text-white text-3xl font-bold">{stats.invited ?? "—"}</div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <div className="text-slate-400 text-sm mb-2">Заработано за месяц</div>
                <div className="text-white text-3xl font-bold">{formatCurrencyOrDash(stats.monthEarned)}</div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <div className="text-slate-400 text-sm mb-2">Всего заработано</div>
                <div className="text-white text-3xl font-bold">{formatCurrencyOrDash(stats.totalEarned)}</div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                </svg>
              </div>
              <p className="text-white font-medium text-lg">Статистика появится после первых приглашённых пользователей</p>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  )
}
