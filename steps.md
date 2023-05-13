1. Frontend init: Use vite preact template

```sh
npm create vite@latest marknet-app --template preact-ts
mv marknet-app app
```

2. Add tailwindcss

    - Follow the instructions here: https://tailwindcss.com/docs/guides/vite

      ```sh
      cd app/
      npm install -D tailwindcss postcss autoprefixer
      npx tailwindcss init -p
      ```

    - Add the following to `tailwind.config.js`:

      ```js
      // export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      //   theme: {
      //     extend: {},
      //   },
      //   plugins: [],
      // }
      ```

    - Add the Tailwind directives to your CSS (in `src/index.css`):

      ```css
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      ```

    - Start using Tailwind’s utility classes to style your content.

