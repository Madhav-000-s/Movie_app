## My Movie App — Cross‑Platform TMDB Client (Expo + React Native)

Discover trending films, search titles, and view details in a fast, mobile‑first experience. Built with Expo Router, TypeScript, and NativeWind; integrates with TMDB for content and Appwrite for simple analytics to power a "Trending" row.

### Why it’s interesting
- **Real data**: Uses TMDB for movies and Appwrite to track and surface trending searches.
- **Modern RN stack**: Expo Router, React 19, RN 0.81, NativeWind (Tailwind), Reanimated.
- **Typed & modular**: Lightweight services (`services/api.ts`, `services/appwrite.ts`) and reusable UI components.

---

## Features
- **Home feed**: Latest movies grid with images, ratings, and release years.
- **Trending carousel**: Backed by Appwrite document counts (top searches).
- **Search workflow**: Navigate to a dedicated search screen.
- **Details page**: Dynamic route `app/movies/[id].tsx` fetches full details.
- **Tabs layout**: `Home`, `Search`, `Saved`, `Profile` (via `app/(tabs)`).

---

## Tech Stack
- **Framework**: Expo 54, React Native 0.81, React 19
- **Navigation**: Expo Router (file‑based routing)
- **Styling**: NativeWind + Tailwind CSS
- **Data**: TMDB API (fetch), Appwrite (search analytics)
- **Language/Tooling**: TypeScript, ESLint

---

## Getting Started

1) Install dependencies
```bash
npm install
```

2) Configure environment variables (create `.env` at project root)
```bash
# TMDB (use a Bearer token or API key)
EXPO_PUBLIC_MOVIE_API_KEY=YOUR_TMDB_BEARER_OR_API_KEY

# Appwrite (used for Trending analytics)
EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
EXPO_PUBLIC_APPWRITE_COLLECTION_ID=your_collection_id
```

3) Run the app
```bash
npx expo start
# or
npm run android
npm run ios
npm run web
```

Notes
- The API layer expects `EXPO_PUBLIC_MOVIE_API_KEY`; the app will throw if it’s missing.
- Appwrite is configured for `https://cloud.appwrite.io/v1`. Provide valid IDs to enable Trending.

---

## Project Structure (selected)
```
app/
  (tabs)/           # Home, Search, Saved, Profile screens and layout
  movies/[id].tsx   # Movie details screen (dynamic route)
components/         # UI components (e.g., MovieCard, TrendingCard, SearchBar)
services/
  api.ts            # TMDB fetch utilities
  appwrite.ts       # Trending analytics via Appwrite
  usefetch.ts       # Generic fetching hook (loading, error, refetch)
```

---

## Notable Implementation Details
- **Trending logic**: Appwrite stores `{ searchTerm, movie_id, title, count, poster_url }`. Top results are deduped by title and limited to 5.
- **Resilient fetching**: `useFetch` provides loading/error state and `refetch` for any async function.
- **Images**: Served from `https://image.tmdb.org/t/p/w500` with graceful placeholder fallback.
- **UI polish**: Tailwind classes via NativeWind; dark/light via Expo System UI.

---

## Scripts
```bash
npm run start        # Start Expo dev server
npm run android      # Start on Android
npm run ios          # Start on iOS
npm run web          # Start on Web
npm run lint         # Lint via Expo/Eslint
```

---

## Future Enhancements
- Persisted auth + favorites (tie into Appwrite or Supabase)
- Infinite scroll + pagination for lists
- Offline cache and image prefetch
- E2E tests (Detox) and unit tests (Jest/RTL)

---
