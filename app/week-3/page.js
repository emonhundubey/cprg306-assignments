import ItemList from "./ItemList";
import React from "react";

const Page = (props) => {
 
    return (
      <main className="bg-slate-950">
        <h1 className="font-bold text-white text-3xl m-2">Shopping List</h1>
        <ItemList />
      </main>
    );  



}
export default Page;