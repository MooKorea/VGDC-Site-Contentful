import { createClient } from "contentful";

export default function useContentful(contentType) {
  const client = createClient({
    space: "vgr4mf4t2zeb",
    environment: "master", // defaults to 'master' if not set
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  });

  function parseBlogPosts(entries) {
    const sanitizedEntries = entries.items.map((e) => {
      const headerImage = e.fields.headerImage.fields;
      return { ...e.fields, headerImage };
    });
    return sanitizedEntries;
  }

  function parseTextPage(entries) {
    const items = entries.items[0].fields
    console.log({...items[Object.keys(items)[0]]})
    return {...items[Object.keys(items)[0]]}
  }

  const getContent = async () => {
    try {
      const entries = await client.getEntries({
        content_type: contentType,
      });
      switch (contentType) {
        case 'blogPost':
          return parseBlogPosts(entries)
        case 'aboutPage':
          return parseTextPage(entries)
        case 'faqPage':
          return parseTextPage(entries)
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { getContent };
}
