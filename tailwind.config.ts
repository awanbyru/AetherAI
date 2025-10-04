
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6366F1',
        'primary-focus': '#4F46E5',
        'secondary': '#10B981',
        'base-100': '#FFFFFF',
        'base-200': '#F3F4F6',
        'base-300': '#E5E7EB',
        'content': '#1F2937',
        'content-secondary': '#6B7280',
      }
    },
  },
  plugins: [],
};
export default config;
