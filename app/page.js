import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen md:flex flex-col  p-24 text-white bg-black">
      <h1 className="text-4xl font-bold mb-5">CPRG 306: Web Development 2 - Assignments</h1>
      <div className="text-lg">
        <Link href="/week-2">Week 2 Assignments</Link>
      </div>
      <div className="text-lg">
        <Link href="/week-3">Week 3 Assignments</Link>
      </div>
      <div className="text-lg">
        <Link href="/week-4">Week 4 Assignments</Link>
      </div>
      <div className="text-lg">
        <Link href="/week-5">Week 5 Assignments</Link>
      </div>
      <div className="text-lg">
        <Link href="/week-6">Week 6 Assignments</Link>
      </div>
      <div className="text-lg">
        <Link href="/week-7">Week 7 Assignments</Link>
      </div>
      <div className="text-lg">
        <Link href="/week-8">Week 8 Assignments</Link>
        </div>
      <div className="text-lg">
        <Link href="/week-9">Week 10 Assignments</Link>
      </div>
    </main>
  );
}
