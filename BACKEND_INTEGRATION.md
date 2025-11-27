# Backend Integration Guide

## Структура API клиента

Все API методы организованы в папке `/lib/api/`:

### Модули API

1. **client.ts** - Базовый HTTP клиент с обработкой ошибок
2. **auth.ts** - Авторизация и регистрация
3. **orders.ts** - Работа с заказами
4. **services.ts** - Получение списка услуг
5. **user.ts** - Управление профилем
6. **payment.ts** - Платежи и пополнение баланса

### Хуки для компонентов

В папке `/hooks/`:

- `use-auth.ts` - Управление авторизацией
- `use-orders.ts` - Работа с заказами
- `use-services.ts` - Получение услуг

## Настройка

1. Скопируйте `.env.example` в `.env.local`:

```bash
cp .env.example .env.local
```

2. Укажите URL вашего API:

```env
NEXT_PUBLIC_API_URL=https://your-api.com/api
```

## Примеры использования

### Авторизация

```tsx
import { useAuth } from "@/hooks/use-auth";
import { login } from "@/lib/api/auth";

function LoginForm() {
  const { refetch } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    await login({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    refetch(); // Обновить данные пользователя
  };

  return <form onSubmit={handleSubmit}>...</form>;
}
```

### Получение заказов

```tsx
import { useOrders } from "@/hooks/use-orders";

function OrdersPage() {
  const { orders, loading, error } = useOrders({
    page: 1,
    limit: 20,
    status: "in_progress",
  });

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}
```

### Создание заказа

```tsx
import { createOrder } from "@/lib/api/orders";

async function handleCreateOrder(data) {
  try {
    const order = await createOrder({
      service: "instagram_followers",
      platform: "instagram",
      link: "https://instagram.com/username",
      quantity: 1000,
    });

    console.log("Заказ создан:", order);
  } catch (error) {
    console.error("Ошибка:", error.message);
  }
}
```

## Структура ответов API

Все ответы должны соответствовать формату:

```typescript
{
    data: T,           // Данные
    message?: string,  // Сообщение (опционально)
    success: boolean   // Статус выполнения
}
```

## Обработка ошибок

API клиент автоматически обрабатывает ошибки и выбрасывает `ApiError`:

```typescript
try {
  await api.post("/endpoint", data);
} catch (error) {
  if (error instanceof ApiError) {
    console.log(error.status); // HTTP статус
    console.log(error.message); // Сообщение об ошибке
    console.log(error.data); // Дополнительные данные
  }
}
```

## Аутентификация

Токен сохраняется в `localStorage` после успешной авторизации и автоматически добавляется в заголовки запросов:

```typescript
headers: {
  Authorization: `Bearer ${token}`;
}
```

## Роуты

### Публичные страницы

- `/` - Главная (лендинг)
- `/login` - Вход
- `/registration` - Регистрация
- `/offer`, `/privacy-standalone`, `/user-agreement`, `/data-processing`, `/contact-us` - Юридические страницы

### Личный кабинет (требует авторизации)

- `/new-order` - Создание заказа
- `/orders/all` - Список заказов
- `/profile/settings` - Настройки профиля
- `/pay` - Пополнение баланса
- `/help` - Помощь
- `/developer` - API документация

## TypeScript типы

Все типы данных определены в соответствующих API модулях. Примеры:

```typescript
import type { Order, CreateOrderData } from "@/lib/api/orders";
import type { User, LoginCredentials } from "@/lib/api/auth";
import type { Service, Platform } from "@/lib/api/services";
```

## Рекомендации

1. **Используйте хуки** для получения данных в компонентах
2. **Обрабатывайте ошибки** на уровне UI
3. **Показывайте loading состояния** во время запросов
4. **Валидируйте данные** перед отправкой на сервер
5. **Используйте TypeScript типы** для type safety

## Что нужно от бэкенда

### Обязательные эндпоинты:

**Авторизация:**

- `POST /api/auth/login` - Вход
- `POST /api/auth/register` - Регистрация
- `POST /api/auth/logout` - Выход
- `GET /api/auth/me` - Текущий пользователь
- `POST /api/auth/oauth/{provider}` - OAuth авторизация

**Заказы:**

- `GET /api/orders` - Список заказов
- `GET /api/orders/:id` - Один заказ
- `POST /api/orders` - Создать заказ
- `POST /api/orders/:id/cancel` - Отменить заказ
- `GET /api/orders/stats` - Статистика

**Услуги:**

- `GET /api/services/platforms` - Список платформ
- `GET /api/services` - Список услуг
- `GET /api/services/:id` - Одна услуга
- `POST /api/services/calculate` - Расчет стоимости

**Пользователь:**

- `GET /api/user/profile` - Профиль
- `PATCH /api/user/profile` - Обновить профиль
- `POST /api/user/password` - Изменить пароль
- `GET /api/user/balance` - Баланс

**Платежи:**

- `GET /api/payment/methods` - Методы оплаты
- `POST /api/payment` - Создать платеж
- `GET /api/payment/:id` - Статус платежа
- `GET /api/payment/history` - История платежей
