export default async function getAllPosts() {
  const result = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
    {
      // cache: "force-cache", // by default the browser cache is used

      // cache: "no-store", // no cache is saved

      next: {
        revalidate: 10, // update every 10 seconds
      },
    }
  );

  if (!result.ok) {
    throw new Error("There was an error fetching posts");
  }

  return result.json();
}
