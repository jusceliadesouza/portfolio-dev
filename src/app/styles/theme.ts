export const colors = {
  // Cores principais
  // Usados para fundos, textos e bordas
  slate: {
    50: '#F8FAFC', // Quase branco, para fundos claros
    100: '#F1F5F9',
    200: '#E2E8F0', // Bordas claras
    300: '#CBD5E1',
    400: '#94A3B8', // Texto "muted" claro
    500: '#64748B', // Texto "muted" escuro
    600: '#475569', // Corpo de texto claro
    700: '#334155',
    800: '#1E293B', // Texto "focus" claro, superfície escura
    900: '#0F172A' // O canvas escuro
  },

  // Cor de Destaque
  // Usada para todos os elementos interativos.
  emerald: {
    400: '#34D399', // Hover do tema escuro
    500: '#10B981', // Cor principal
    600: '#059669' // Hover do tema claro
  },

  // Cor destaque secundária
  // Usada para textos e elementos secundários
  yellow: {
    400: '#FBBF24', // Hover do tema claro
    500: '#F59E0B', // Cor principal
    600: '#F59E0B' // Hover do tema escuro
    },

  // B&W puros
  common: {
    white: '#FFFFFF',
    black: '#000000'
  }
}

export const shared = {
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Sora, sans-serif'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  }
}

export const theme = {
  light: {
    ...shared,
    canvas: colors.slate[50],
    surface: colors.common.white,
    interactive: colors.emerald[500],
    interactive_hover: colors.emerald[600],
    text_focus: colors.slate[800],
    text_body: colors.slate[600],
    text_muted: colors.slate[400],
    stroke: colors.slate[200],
    highlight: colors.yellow[500],
  },
  dark: {
    ...shared,
    canvas: colors.slate[900],
    surface: colors.slate[800],
    interactive: colors.emerald[500],
    interactive_hover: colors.emerald[400],
    text_focus: colors.slate[50],
    text_body: colors.slate[300],
    text_muted: colors.slate[500],
    stroke: colors.slate[700],
    highlight: colors.slate[100],
  }
}
