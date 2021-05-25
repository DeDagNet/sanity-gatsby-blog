export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60aceffb810fa7b48cc063bd",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-zn6x1ufn",
                  apiId: "1a82c116-434c-42b2-bcbb-97d990977d4e",
                },
                {
                  buildHookId: "60aceffb614370a66b44158f",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-enxngp55",
                  apiId: "6b02bbd0-3ccd-45b6-a33a-e4b2dd486f53",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/DeDagNet/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-enxngp55.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
