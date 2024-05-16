import Image from 'next/image';
import SearchBox from '../components/SearchBox';
import BoxPublishGroups from '../components/BoxPublishGroups';
import Button from '../components/Button';

export default function Home() {
  return (
  <main className="min-h-screen">
    <div className="flex justify-end space-x-4 p-4">
      <Button className=" hover:bg-white hover:text-black-10">Login</Button>
      <Button className=" hover:bg-white hover:text-black-10">Cadastro</Button>
    </div>
    <div className="flex items-center flex-col justify-center">
      <div>
      <Image src="/logo-dodobook-white.svg" alt="DODOBOOK" width={347} height={347} />
      <h1 className='font-alt text-white text-6xl'>DODOBOOK</h1>
      </div>
      <div className='mt-14'>
        <SearchBox />
      </div>
      <div>
        <BoxPublishGroups />
      </div>
    </div>
  </main>
  );
}
