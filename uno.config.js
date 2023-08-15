// uno.config.ts
import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'
import presetWebFonts from '@unocss/preset-web-fonts'

export default defineConfig({
  theme: {
    colors: {
      brand: {
        primary: '#66BD7E',
        secondary: '#F1F1F1',
      },
    },
  },
  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: ['Poppins', 'Poppins:400,500,600,700'],
        mono: 'Questrial',
      },
    }),
  ],
})
