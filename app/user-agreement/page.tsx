import Link from "next/link"

export default function UserAgreementPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
                <Link href="/" className="mb-8 inline-flex items-center text-emerald-400 hover:text-emerald-300">
                    ← Вернуться на главную
                </Link>

                <h1 className="mb-8 text-3xl font-bold text-white">Пользовательское соглашение</h1>

                <div className="prose prose-invert max-w-none space-y-6 text-slate-300">
                    <p>
                        Настоящий документ «Пользовательское соглашение» (далее – Соглашение) представляет собой предложение Индивидуального Предпринимателя Блиновой Александры Владимировны, размещенное на сайте https://hyperlike.ru/ (далее – «Сайт»), заключить договор на изложенных ниже условиях Соглашения.
                    </p>

                    <h2 className="mt-8 text-2xl font-bold text-white">1. Общие положения</h2>

                    <p>
                        1.1. Вы настоящим подтверждаете, что с момента перехода на Сайт и в течение времени пользования Сайтом, а также персонализированными сервисами Сайта, вы являетесь Пользователем Сайта.
                    </p>

                    <h2 className="mt-8 text-2xl font-bold text-white">2. Общие условия пользования Сайтом</h2>

                    <p>
                        2.1. Сайт осуществляет продажу услуг посредством веб-ресурса https://hyperlike.ru/ и сопутствующих сервисных служб Сайта.
                    </p>

                    <h2 className="mt-8 text-2xl font-bold text-white">3. Обязательства Пользователя</h2>

                    <p>3.1. Пользователь соглашается не использовать сервисы Сайта с целью:</p>

                    <p>3.1.1. Загрузки/продвижения контента, который является незаконным, нарушает любые права третьих лиц;</p>

                    <h2 className="mt-8 text-2xl font-bold text-white">7. Реквизиты Сайта</h2>

                    <p>ИП Блинова А.В.</p>
                    <p>ИНН 920162475012</p>
                    <p>ОГРНИП 324920000008901</p>
                    <p>Электронная почта для обращений – support@hyperlike.ru</p>
                </div>
            </div>
        </div>
    )
}
