import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-white bg-black">
      <h1 className="text-4xl font-bold mb-5">CPRG 306: Web Development 2 - Assignments</h1>
      <div className="text-lg">
        <Link href="/week-2">Week-2</Link>
        </div>
        <div className="text-lg">
        <Link href="/week-3">Week-3</Link>
      </div>
    </main>
  );
}
