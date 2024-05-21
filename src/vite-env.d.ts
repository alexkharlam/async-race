/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_API_URL: string;
  readonly VITE_CARS_PAGE_LIMIT: number;
  readonly VITE_WINNERS_PAGE_LIMIT: number;
  readonly VITE_RANDOM_CARS_QUANTITY: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
