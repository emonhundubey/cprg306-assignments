import NewItem from "./NewItem";


const Page = () => {
  return (
    <main className="bg-indigo-100 h-screen flex justify-center">
      <div className="w-full max-w-md p-8  text-slate-500 rounded-md shadow-md">
      <h1 className="font-bold text-indigo-700 border bg-white border-black text-center text-4xl mb-4">Produce Purchase Page</h1>
      <NewItem />
      </div>
    </main>
  );
}

export default Page;