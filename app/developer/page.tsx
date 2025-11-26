"use client"

import { Copy } from "lucide-react"
import { useState } from "react"
import { PageLayout, Tabs } from "@/components/shared"

const API_TABS = [
  { id: 1, name: "Список услуг" },
  { id: 2, name: "Создать" },
  { id: 3, name: "Статус" },
  { id: 4, name: "Множ. статус" },
  { id: 5, name: "Рефилл" },
  { id: 6, name: "Баланс" },
  { id: 7, name: "Отмена" },
]

const TAB_CONTENT = {
  1: {
    title: "Список услуг",
    description: "Используйте этот метод для получения списка услуг",
    endpoint: "https://hyperlike.ru/api/v2?action=services&key=yourKey",
    response: `[
  {
    "service": 1,
    "name": "Живые Подписчики Ру",
    "type": "subscribe",
    "category": "instagram profiles. Adds views and small activity",
    "rate": "100.00",
    "min": 10,
    "max": 15000,
    "refill": false,
    "cancel": true
  }
]`,
    parameters: [
      { name: "key", type: "string", description: "Ваш API ключ" },
      { name: "action", type: "string", description: "services" },
    ]
  },
  2: {
    title: "Создать заказ",
    description: "Используйте этот метод для создания нового заказа",
    endpoint: "https://hyperlike.ru/api/v2?key=yourKey&action=add&service=1&link=https://example.com&quantity=100",
    response: `{
  "order": 12345
}`,
    parameters: [
      { name: "key", type: "string", description: "Ваш API ключ" },
      { name: "action", type: "string", description: "add" },
      { name: "service", type: "number", description: "Идентификатор услуги" },
      { name: "link", type: "string", description: "Ссылка на пост" },
      { name: "quantity", type: "number", description: "Необходимое количество" },
      { name: "runs", type: "number", description: "Прогоны (только для Drip-feed)" },
      { name: "interval", type: "number", description: "Интервал в минутах (только для Drip-feed)" },
    ]
  },
  3: {
    title: "Статус заказа",
    description: "Используйте этот метод для проверки статуса заказа",
    endpoint: "https://hyperlike.ru/api/v2?key=yourKey&action=status&order=12345",
    response: `{
  "charge": "0.50",
  "start_count": "100",
  "status": "Completed",
  "remains": "0",
  "currency": "RUB"
}`,
    parameters: [
      { name: "key", type: "string", description: "Ваш API ключ" },
      { name: "action", type: "string", description: "status" },
      { name: "order", type: "number", description: "ID заказа" },
    ]
  },
  4: {
    title: "Множественный статус",
    description: "Используйте этот метод для проверки статуса нескольких заказов",
    endpoint: "https://hyperlike.ru/api/v2?key=yourKey&action=status&orders=12345,12346,12347",
    response: `{
  "12345": {
    "charge": "0.50",
    "start_count": "100",
    "status": "Completed",
    "remains": "0",
    "currency": "RUB"
  },
  "12346": {
    "charge": "1.00",
    "start_count": "200",
    "status": "In progress",
    "remains": "50",
    "currency": "RUB"
  }
}`,
    parameters: [
      { name: "key", type: "string", description: "Ваш API ключ" },
      { name: "action", type: "string", description: "status" },
      { name: "orders", type: "string", description: "ID заказов, разделенных запятыми (макс 100 заказов)" },
    ]
  },
  5: {
    title: "Создать рефилл",
    description: "Используйте этот метод для создания рефилла заказа",
    endpoint: "https://hyperlike.ru/api/v2?key=yourKey&action=refill&order=12345",
    response: `{
  "refill": 1
}`,
    parameters: [
      { name: "key", type: "string", description: "Ваш API ключ" },
      { name: "action", type: "string", description: "refill" },
      { name: "order", type: "number", description: "ID заказа для рефилла" },
    ]
  },
  6: {
    title: "Баланс",
    description: "Используйте этот метод для получения баланса аккаунта",
    endpoint: "https://hyperlike.ru/api/v2?key=yourKey&action=balance",
    response: `{
  "balance": "1234.56",
  "currency": "RUB"
}`,
    parameters: [
      { name: "key", type: "string", description: "Ваш API ключ" },
      { name: "action", type: "string", description: "balance" },
    ]
  },
  7: {
    title: "Отмена заказа",
    description: "Используйте этот метод для отмены заказа",
    endpoint: "https://hyperlike.ru/api/v2?key=yourKey&action=cancel&order=12345",
    response: `{
  "cancel": 1
}`,
    parameters: [
      { name: "key", type: "string", description: "Ваш API ключ" },
      { name: "action", type: "string", description: "cancel" },
      { name: "order", type: "number", description: "ID заказа для отмены" },
    ]
  }
}

export default function DeveloperPage() {
  const [copied, setCopied] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState(1)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(text)
    setTimeout(() => setCopied(null), 2000)
  }

  const currentContent = TAB_CONTENT[activeTab as keyof typeof TAB_CONTENT]

  return (
    <PageLayout>
      <h2 className="text-3xl font-bold mb-6">API</h2>

      <Tabs tabs={API_TABS} activeTab={activeTab} onTabChange={setActiveTab} />

      <p className="text-slate-400 mb-8">{currentContent.description}</p>

      <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800 mb-8">
        <h3 className="text-lg font-semibold mb-4">Пример запроса</h3>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
          <div className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 font-mono text-sm text-slate-300 overflow-auto">
            {currentContent.endpoint}
          </div>
          <button
            onClick={() => copyToClipboard(currentContent.endpoint)}
            className={`p-3 rounded-lg transition-colors ${copied === currentContent.endpoint
              ? "bg-green-500/20 text-green-400"
              : "bg-slate-800 hover:bg-slate-700"
              }`}
          >
            <Copy className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800 mb-8">
        <h3 className="text-lg font-semibold mb-4">Пример ответа</h3>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 overflow-auto">
          <pre className="text-sm text-slate-300">
            <code>{currentContent.response}</code>
          </pre>
        </div>
      </div>

      <div className="bg-slate-900/50 rounded-lg border border-slate-800 overflow-hidden">
        <h3 className="text-lg font-semibold p-6 border-b border-slate-800">
          Параметры запроса
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left p-4 text-slate-400 font-medium">Параметр</th>
                <th className="text-left p-4 text-slate-400 font-medium">Тип</th>
                <th className="text-left p-4 text-slate-400 font-medium">Описание</th>
              </tr>
            </thead>
            <tbody>
              {currentContent.parameters.map((param, idx) => (
                <tr key={idx} className="border-b border-slate-800 hover:bg-slate-800/30">
                  <td className="p-4 text-slate-300 font-mono text-sm">{param.name}</td>
                  <td className="p-4 text-slate-400 text-sm">{param.type}</td>
                  <td className="p-4 text-slate-300 text-sm">{param.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageLayout>
  )
}
