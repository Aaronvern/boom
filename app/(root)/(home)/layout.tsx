import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { ReactNode } from 'react';

const HomeLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
      <Navbar/>
      <div className='flex'>
        <Sidebar/>
        <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
          <div className='w-full'>{children}</div>
          <div className='fixed bottom-0 right-0 mr-6 mb-6'>
            <h2 className='text-1xl text-slate-400 font-mono'>built by aaronvern</h2> 
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;