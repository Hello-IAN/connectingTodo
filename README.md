# 📱 React Native Todo App - connectingTodo

A feature-rich Todo application built using **React Native**, leveraging **Redux Toolkit** and **Redux-Saga** for state management and side-effect handling, with **AsyncStorage** for local persistence and a clean architectural separation of concerns.

---

## 🏗 Architecture Overview

### 🧱 Layered Responsibility

This app follows a clean separation of concerns with loosely coupled layers:

* **View Layer (Screens & Components)**

  * Purely responsible for UI rendering and interaction handling.
  * Hooks into global state via `useSelector` and dispatches via `useDispatch`.
  * Avoids direct business logic or API calls.

* **State Layer (Redux Toolkit)**

  * Centralized `todos` slice manages the todo list.
  * Reducers handle pure state updates.
  * Connected to the app via the Redux `Provider`.
  * Managing Context Wrapped with React Context `Provider`.

* **Effect Layer (Redux-Saga)**

  * Handles all side effects like API calls, persistence to AsyncStorage, debounce/throttle if needed.
  * Ensures the View layer stays clean of asynchronous handling.

* **Persistence Layer (AsyncStorage)**

  * Persists local-only state (like `completed`) keyed by `todo.id`.
  * Hydrated and merged with server state on app start or refresh.

* **Navigation Layer (React Navigation)**

  * Stack-based navigation between Home and Todo Detail.
  * Navigation parameters are strictly typed using `RouteProp` and `NativeStackNavigationProp`.

---

## ⚙️ Tech Stack

* **React Native** – Core framework
* **TypeScript** – Static type safety
* **Redux Toolkit** – Predictable state management
* **Redux-Saga** – Side effect model with generators
* **AsyncStorage** – Local persistence of `completed` state
* **React Navigation** – Screen routing and navigation

---

## 💡 Key Features

* ✅ Add, edit, toggle, delete todos
* ✅ Persist `completed` state locally
* ✅ Disable editing for completed items
* ✅ Sorted by `create_at` descending
* ✅ Infinite scroll simulation (10 items at a time)
* ✅ Pull-to-refresh functionality
* ✅ Navigate to detail page for editing

---

## 🧠 Data Model

```ts
interface TTodo {
  id: string;
  content: string;
  completed: boolean; // FE-only, persisted in AsyncStorage
  create_at?: string;
  update_at?: string;
}
```

> `completed` is not part of the API response. It is managed fully on the client and preserved through AsyncStorage.

---

## 🔁 API Contract

### POST `/todos`

* Request Body:

```json
{
  "content": "Write documentation"
}
```

* Response:

```json
{
  "id": "701",
  "content": "Write documentation",
  "create_at": "2025-05-15T15:00:00Z",
  "update_at": "2025-05-15T15:00:00Z"
}
```

### GET `/todos`

Returns an array of todos (no `completed` field).

---

## 🔄 Infinite Scroll

* All todos fetched at once from API
* Client slices the full list into pages of 10 items
* More items appended when the FlatList reaches the end
* Sorted by `create_at` descending

---

## 🧱 State & Logic Flow

### Add Todo

1. UI dispatches `addTodo(content)` (string only)
2. `addTodoSaga` calls API and receives full `TTodo` object
3. Saga dispatches `addTodo(todo)` to reducer
4. Reducer prepends to state list
5. AsyncStorage updated to include `{ id, completed: false }`

### Toggle Todo

1. UI dispatches `toggleTodo(id)`
2. Local state is updated
3. AsyncStorage is updated with new `completed` state

### Update Todo

1. Only enabled if `!completed`
2. UI dispatches `updateTodo(content)`
3. Saga calls PATCH API
4. Updated state merged in reducer

---

## 📦 AsyncStorage

```ts
interface CompletionMap {
  [id: string]: boolean;
}
```

* Merged during initial GET fetch
* Saved after toggling or deleting todos
* Prevents UI from resetting `completed` state on refresh

---

## 🧭 Navigation Types

```ts
type RootStackParamList = {
  Home: undefined;
  TodoDetail: { todo: TTodo };
};
```

Use of `NativeStackNavigationProp` and `RouteProp` ensures strict typing between screens.

---

## 💅 UI Behavior Notes

* Text truncation with `numberOfLines={5}` on multiline Text
* Pull-to-refresh handled via FlatList's `onRefresh`
* `Pressable` handles disabled state and interaction block

---
## Simple Structure
React Native
├── Redux Toolkit (Store, Slice)
│ └── Global state (todos list)
├── Redux-Saga (Side effects)
│ └── Handles API interaction (GET, POST, PATCH, DELETE)
├── AsyncStorage (Local persistence)
│ └── Persist completed state per todo
├── React Navigation (NativeStack)
│ └── Home → Todo Detail
├── FlatList
│ └── Infinite scroll simulation (10 items per page)

## 🛠 Setup

```bash
yarn install
yarn android # or yarn ios
```

Ensure the following in `AndroidManifest.xml`:

```xml
<application
  android:usesCleartextTraffic="true"
  ... >
</application>
```

---

## 📜 License

MIT

---

> Built with architectural integrity and attention to UX & state handling.
