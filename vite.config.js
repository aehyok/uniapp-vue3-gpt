import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
    ],
  },
  transpileDependencies: ["luch-request", "@dcloudio/uni-ui"],
  server: {
    port: 5173,
    host: "0.0.0.0", // 可查看到局域网IP地址
    // https: true, // 可开启https
    proxy: {
      "/so": {
        target: "http://8.219.92.157:3001", // 代理接口
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/so/, ""),
      },
    },
  },
});
