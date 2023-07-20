import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill"
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill"
import { PluginOption, defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import viteTsconfigPaths from "vite-tsconfig-paths"
import rollupNodePolyFills from "rollup-plugin-node-polyfills"

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  preview: {
    port: 3080,
  },
  server: {
    port: 3080,
  },
  build: {
    rollupOptions: {
      plugins: [
        // Enable rollup polyfills plugin
        // used during production bundling
        rollupNodePolyFills({}) as PluginOption,
      ],
    },
  },
  plugins: [react(), viteTsconfigPaths()],
  esbuild: {
    target: "esnext",
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
        NodeModulesPolyfillPlugin(),
      ],
    },
  },
})
