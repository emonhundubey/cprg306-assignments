import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl">CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2">Week-2</Link>
      <Link href="/week-3">Week-3</Link>
    </main>
  );
}
