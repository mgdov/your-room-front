# Структура компонентов для бэкенда

## 📁 Организация API

### `/lib/api/` - API клиенты

#### `http-client.ts` - Базовый HTTP клиент

- `api.get()`, `api.post()`, `api.put()`, `api.patch()`, `api.delete()`
- Обработка ошибок через `ApiError`
- Таймауты и abort controllers
- Автоматическая сериализация JSON

#### `auth.ts` - Авторизация

```typescript
login(credentials: LoginCredentials): Promise<AuthResponse>
register(data: RegisterData): Promise<AuthResponse>
logout(): Promise<void>
getCurrentUser(): Promise<User>
loginWithOAuth(provider, code): Promise<AuthResponse>
```

#### `orders.ts` - Заказы

```typescript
getOrders(page, limit, status): Promise<OrdersResponse>
getOrder(orderId): Promise<Order>
createOrder(data: CreateOrderData): Promise<Order>
cancelOrder(orderId): Promise<Order>
getOrderStats(): Promise<OrderStats>
```

#### `services.ts` - Услуги

```typescript
getPlatforms(): Promise<Platform[]>
getServices(platform?, category?): Promise<Service[]>
getService(serviceId): Promise<Service>
calculatePrice(serviceId, quantity): Promise<PriceCalculation>
```

#### `user.ts` - Профиль

```typescript
getProfile(): Promise<UserProfile>
updateProfile(data): Promise<UserProfile>
changePassword(data): Promise<void>
getBalance(): Promise<number>
```

#### `payment.ts` - Платежи

```typescript
getPaymentMethods(): Promise<PaymentMethod[]>
createPayment(data): Promise<Payment>
getPaymentStatus(paymentId): Promise<Payment>
getPaymentHistory(page, limit): Promise<{payments, total}>
```

## 🎣 React Hooks

### `/hooks/` - Готовые хуки

#### `use-auth.ts`

```typescript
const { user, loading, error, isAuthenticated, logout, refetch } = useAuth();
```

#### `use-orders.ts`

```typescript
const { orders, total, page, limit, loading, error, refetch } = useOrders({
  page: 1,
  limit: 20,
  status: "in_progress",
  autoFetch: true,
});
```

#### `use-services.ts`

```typescript
const { services, loading, error, refetch } = useServices({
  platform: "instagram",
  category: "followers",
  autoFetch: true,
});
```

## 📄 Страницы

### Публичные

- `/` - Главная (лендинг)
- `/login` - Вход
- `/registration` - Регистрация
- `/offer`, `/privacy-standalone`, `/user-agreement`, `/data-processing`, `/contact-us` - Юридические

### Личный кабинет

- `/new-order` - **НОВЫЙ МАРШРУТ** для создания заказа
- `/orders/all` - Список заказов
- `/profile/settings` - Настройки
- `/pay` - Пополнение баланса
- `/help` - Помощь
- `/developer` - API документация
- `/discount` - Скидки
- `/blog` - Блог

## 🔐 Аутентификация

### Токен в localStorage

```typescript
localStorage.setItem("auth_token", token); // После логина
localStorage.getItem("auth_token"); // Для запросов
localStorage.removeItem("auth_token"); // При логауте
```

### Автоматическое добавление в headers

```typescript
headers: {
  Authorization: `Bearer ${token}`;
}
```

## 🎨 UI Компоненты

### Shared Components (`/components/shared/`)

- `PageLayout` - Обертка для страниц ЛК
- `PageTitle` - Заголовок страницы
- `Header` - Шапка сайта
- `Sidebar` - Боковое меню
- `Footer` - Футер
- `Logo` - Логотип
- `LandingNavbar`, `LandingHero`, `LandingContent`, `LandingFooter` - Компоненты лендинга

### UI Components (`/components/ui/`)

Все базовые компоненты из shadcn/ui:

- Button, Input, Card, Dialog, Sheet, Select, и т.д.

## 📦 TypeScript типы

### Основные типы

```typescript
// User
interface User {
  id: string;
  email: string;
  username: string;
  telegram?: string;
  balance: number;
  createdAt: string;
}

// Order
interface Order {
  id: string;
  userId: string;
  service: string;
  platform: string;
  link: string;
  quantity: number;
  price: number;
  status: "pending" | "in_progress" | "completed" | "cancelled" | "partial";
  progress: number;
  createdAt: string;
  updatedAt: string;
  completedAt?: string;
}

// Service
interface Service {
  id: string;
  name: string;
  platform: string;
  category: string;
  description: string;
  price: number;
  minQuantity: number;
  maxQuantity: number;
  averageTime: string;
  isActive: boolean;
}

// Payment
interface Payment {
  id: string;
  userId: string;
  amount: number;
  method: string;
  status: "pending" | "completed" | "failed" | "cancelled";
  paymentUrl?: string;
  createdAt: string;
  completedAt?: string;
}
```

## 🚀 Быстрый старт

### 1. Настройка окружения

```bash
cp .env.example .env.local
```

Укажите URL бэкенда в `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://your-api.com/api
```

### 2. Использование в компонентах

```tsx
"use client";

import { useAuth } from "@/hooks/use-auth";
import { useOrders } from "@/hooks/use-orders";
import { createOrder } from "@/lib/api/orders";

export default function MyComponent() {
  const { user, isAuthenticated } = useAuth();
  const { orders, loading } = useOrders({ autoFetch: true });

  const handleCreateOrder = async () => {
    try {
      const order = await createOrder({
        service: "instagram_followers",
        platform: "instagram",
        link: "https://instagram.com/username",
        quantity: 1000,
      });
      console.log("Заказ создан:", order);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  if (!isAuthenticated) return <div>Требуется авторизация</div>;
  if (loading) return <div>Загрузка...</div>;

  return (
    <div>
      <h1>Привет, {user?.username}!</h1>
      <button onClick={handleCreateOrder}>Создать заказ</button>
      {orders.map((order) => (
        <div key={order.id}>{order.service}</div>
      ))}
    </div>
  );
}
```

## 📝 Что готово для бэкенда

✅ **API клиенты** - Готовы методы для всех основных операций
✅ **React хуки** - Удобная работа с данными в компонентах  
✅ **TypeScript типы** - Строгая типизация всех данных
✅ **Обработка ошибок** - Централизованная обработка через ApiError
✅ **Авторизация** - Токены, OAuth, управление сессией
✅ **Роутинг** - Все страницы настроены, включая `/new-order`
✅ **UI компоненты** - Готовая библиотека компонентов
✅ **Документация** - Подробные инструкции по интеграции

## 🔄 Следующие шаги

1. Запустить бэкенд на `http://localhost:3001/api`
2. Убедиться, что все эндпоинты возвращают данные в формате:
   ```json
   {
     "data": {...},
     "message": "Success",
     "success": true
   }
   ```
3. Протестировать авторизацию
4. Подключить реальные данные в компонентах
5. Заменить mock-данные на API запросы

## 📚 Дополнительно

- Все API методы используют async/await
- Автоматическая обработка таймаутов (30 сек)
- Поддержка abort controllers для отмены запросов
- Централизованная конфигурация через .env
- Готово к production с минимальными изменениями
