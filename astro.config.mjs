// @ts-check
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";
import astroIcon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://resume.piagetjonathan.ch",
  integrations: [
    tailwind(),
    astroIcon({
      include: {
        mdi: ["*"],
        ri: ["*"],
        "simple-icons": ["*"],
      },
    }),
    playformCompress({
      CSS: false,
      Image: false,
      Action: {
        Passed: async () => true, // https://github.com/PlayForm/Compress/issues/376
      },
    }),
  ],
});
