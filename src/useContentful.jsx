import { createClient } from "contentful";

export default function useContentful() {
  const client = createClient({
    space: "vgr4mf4t2zeb",
    environment: "master", // defaults to 'master' if not set
    accessToken: "v50BiP2aZsunnUXaSLgsifnrROFr41pBLJiSK2A-Gcs",
  });

  const getContent = async () => {
    try {
      const entries = await client.getEntries();
      const sanitizedEntries = entries.items.map((e) => {
        const headerImage = e.fields.headerImage.fields
        return { ...e.fields, headerImage };
      });
      return sanitizedEntries;
    } catch (error) {
      console.error(error);
    }
  };

  return { getContent };
}
