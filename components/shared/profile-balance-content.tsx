export function ProfileBalanceContent() {
    return (
        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
            <div className="mb-6 flex items-center gap-4">
                <div className="relative flex-1">
                    <input
                        type="text"
                        placeholder="Поиск"
                        className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 pl-10 text-white placeholder-slate-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <svg
                        className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <select className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>Все</option>
                </select>
            </div>

            <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10">
                    <svg className="h-10 w-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <p className="mb-2 text-lg font-medium text-white">Пока что изменений</p>
                <p className="text-slate-400">в балансе не было</p>
            </div>
        </div>
    )
}
