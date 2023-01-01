const fs = require("fs");
const globby = require("globby");
const prettier = require("prettier");

(async () => {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");
  const pages = await globby(["pages/*.js", "content/**/*.mdx", "!pages/api"]);

  const sitemap = `

        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
        <loc>http://Cybersolx.com/</loc>
     </url>
     ${pages
       .map((page) => {
         const path = page
           .replace("pages", "")
           .replace("content", "")
           .replace(".js", "")
           .replace(".mdx", "");
         const route = path === "/index" ? " " : path;
         if (path === "/404") {
           return;
         }
         return `
         
         <url>
             <loc>${`http://Cybersolx${route}`}</loc>
         </url>
         
         `;
       })
       .join("")}
</urlset>
        `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });
  fs.writeFileSync("public/sitemap.xml", formatted);
})();
