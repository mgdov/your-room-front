import { PageLayout, PageTitle } from "@/components/shared"

export default function NewOrderPage() {
    return (
        <PageLayout>
            <PageTitle>Новый заказ</PageTitle>
            <div className="rounded-lg border border-slate-700 bg-slate-800 p-8">
                <p className="text-slate-300">
                    Страница создания нового заказа. Здесь будет форма выбора услуги и оформления заказа.
                </p>
            </div>
        </PageLayout>
    )
}
