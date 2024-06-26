import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

const MainHero = () => {
  return (
    <div className="relative h-[700px] overflow-hidden ">
      <Image
        src="https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hero background image"
        layout="fill"
        objectFit="cover"
        className='brightness-[60%] sm:brightness-[55%]'
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-secondary to-transparent "></div>
      <div className="absolute top-1/2 left-44 sm:left-72 transform -translate-x-1/2 -translate-y-1/2 text-left text-white z-10">
        <h1 className="text-5xl sm:text-7xl lg:text-[4.5rem] text-foreground">Find Your <br/> Roomeo.</h1>
        <p className="text-lg max-w-[500px] text-foreground">
          The ultimate solution for young adults seeking compatible roommates and affordable housing in urban areas.
        </p>
        <div className='flex items-center gap-2 mt-5'>
          <Link href='/sign-up' className='z-10'>
              <Button size='lg' className="bg-primary dark:bg-primary text-md text-white hover:scale-105 transition duration-300">Get Started Today</Button>
          </Link>
          <Link href='/sign-up' className='z-10'>
              <Button size='lg' className="bg-foreground shadow-md dark:border-secondary dark:hover:bg-primary dark:bg-foreground text-md text-secondary dark:text-secondary dark:hover:text-white dark:hover:border-white hover:text-white hover:scale-105 transition duration-300">Sign In</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainHero;