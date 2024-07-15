// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    // compatibilityDate: '2024-07-14',
    future: {
        compatibilityVersion: 4,
    },
    modules: [
        "@nuxt/ui",
        "@pinia/nuxt",
        "@pinia-plugin-persistedstate/nuxt",
        "nuxt-zod-i18n",
        "@nuxtjs/i18n"
    ],
    runtimeConfig: {
        public: {
            apiUrl: 'localhost:3001',
            baseUrl: 'localhost:3001',
            appEnv: 'development'
        }
    },
    pinia: {
        storesDirs: ['./stores/**']
    },
    piniaPersistedstate: {
        cookieOptions: {
            sameSite: 'strict',
        },
        storage: 'localStorage'
    },
    imports: {
        dirs: [
            'stores/**/*',
            'utils/**/*'
        ]
    },
    colorMode: {
        preference: 'light', // default value of $colorMode.preference
        fallback: 'light', // fallback value if not system preference found
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '-mode',
        storageKey: 'nuxt-color-mode'
    }
})