import Search from '@/components/Search';
import { ListsTable } from '@/components/Lists';

export default async function IndexPage() {
   return (
      <main className="p-4 md:p-10 mx-auto max-w-7xl">
         <Search />
         <ListsTable />
      </main>
   );
}
