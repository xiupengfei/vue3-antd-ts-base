// import { defineConfig } from 'vite'
import { resolve } from 'path'
import { loadEnv } from 'vite'
import type { UserConfig, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import styleImport from 'vite-plugin-style-import'
import { getThemeVariables } from 'ant-design-vue/dist/theme'
import settings from './src/settings'
import modifyVars from './src/themes/global'
import { svgBuilder } from './src/plugins/svgBuilder'
import { wrapperEnv } from './build/utils'

// https://vitejs.dev/config/

// const { VITE_PUBLIC_PATH } = import.meta.env

const pathResolve = (dir: string) => {
  return resolve(process.cwd(), '.', dir)
}

export default ({ command, mode }: ConfigEnv): UserConfig => {
  console.log(command, mode)
  const root = process.cwd()
  const env = wrapperEnv(loadEnv(mode, root))
  const { VITE_PORT } = env
  return {
    base: './',
    root,
    server: {
      port: VITE_PORT,
      open: true,
    },
    define: {},
    resolve: {
      alias: {
        '@/': pathResolve('src') + '/',
      },
    },
    build: {
      target: 'es2015',
      outDir: 'dist',
      terserOptions: {
        compress: {
          // 防止Infinity被压缩成1/0，这可能会导致 Chrome 上的性能问题
          keep_infinity: true,
          drop_console: true,
        },
      },
      // 启用/禁用 brotli 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能
      brotliSize: false,
      chunkSizeWarningLimit: 1024,
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            ...getThemeVariables({
              dark: !!settings.dark,
            }),
            ...modifyVars,
          },
          javascriptEnabled: true, // less
        },
      },
    },
    plugins: [
      vue(),
      vueJsx(),
      svgBuilder('./src/icons/svg/'),
      styleImport({
        libs: [
          {
            libraryName: 'ant-design-vue',
            esModule: true,
            resolveStyle: (name) => {
              return `ant-design-vue/es/${name}/style/css`
            },
          },
        ],
      }),
    ],
  }
}
