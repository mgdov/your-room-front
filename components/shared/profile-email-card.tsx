"use client"

interface ProfileEmailCardProps {
    email: string
    onChangeEmail: (value: string) => void
}

export function ProfileEmailCard({ email, onChangeEmail }: ProfileEmailCardProps) {
    return (
        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
            <h2 className="mb-4 text-xl font-bold">Настройки email</h2>

            <h3 className="mb-3 text-lg font-semibold">Email</h3>
            <div className="mb-4">
                <input
                    type="email"
                    value={email}
                    onChange={(event) => onChangeEmail(event.target.value)}
                    placeholder="Укажите email"
                    className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
            </div>

            <button
                type="button"
                className="w-full rounded-lg bg-slate-800 py-3 font-medium text-white transition-colors hover:bg-slate-700"
            >
                Сохранить
            </button>
        </div>
    )
}
