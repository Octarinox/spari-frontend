import Search from "@/components/Search";
import { ListsTable } from "@/components/Lists";

export default async function IndexPage() {
   return (
      <div className="p-4 md:p-10 mx-auto max-w-7xl w-full">
         <Search />
         <ListsTable />
      </div>
   );
}
