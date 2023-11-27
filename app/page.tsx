import { Hero, LaunchList } from "@/components";

/* This code instructs Next.js not to cache this page and to always fetch fresh
data. This is useful for pages that have dynamic content that changes on every
request, such as a list of users that is constantly being updated.
For this example, the launches query is not dynamic, so we can remove this line
and let Next.js cache the data.
*/
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main>
      <Hero />
      <LaunchList />
    </main>
  );
}
