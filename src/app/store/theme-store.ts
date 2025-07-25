import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ThemeState = {
  mode: 'light' | 'dark'
  toggleMode: () => void
}

// Uso do middleware `persist` para salvar a preferência do usuário no localStorage
export const useThemeStore = create<ThemeState>()(
  persist(
    set => ({
      mode: 'light', // Tema padrão
      toggleMode: () =>
        set(state => ({ mode: state.mode === 'light' ? 'dark' : 'light' }))
    }),
    {
      name: 'theme-storage' // Nome da chave no localStorage
    }
  )
)
