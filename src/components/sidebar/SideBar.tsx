import React, { ReactNode, useState } from "react";

interface SideBarProps {
  sideItem: Record<string, any>[] | null;
  app_logo?: string;
  app_display_name?: string;
  children?: ReactNode;
}

const Sidebar = ({
  sideItem,
  app_logo,
  app_display_name,
  children,
}: SideBarProps) => {
  const [active, setActive] = useState(1);
  const [showSide, setShowSide] = useState(true);

  const handleNavSide = (index: React.SetStateAction<number>) => {
    setActive(index);
    setShowSide(false);
  };

  return (
    <>
      <div
        className={`${
          showSide
            ? "fixed left-0 h-screen"
            : "h-screen absolute -left-[200%] md:left-0"
        } overflow-hidden w-[206px] shadow-md md:w-[19%] transition-all ease-in-out duration-500 top-16 md:top-0 bottom-0 z-40 md:fixed`}
      >
        <div className='bg-white h-full'>
          <div className='flex items-center ml-3 md:justify-center gap-4 pt-6'>
            <img
              src={app_logo}
              alt='kodecamp-logo'
              className='w-[36.71px] h-[36px]'
            />
            <p className='font-bold md:text-lg text-[#0D6EFD]'>
              {app_display_name}
            </p>
          </div>

          <nav className='mt-6 md:mt-10'>
            <div className='relative'>
              {sideItem?.map((side_item, index) => (
                <div
                  key={index}
                  onClick={() => handleNavSide(index)}
                  className={`${
                    active === index
                      ? "bg-blue-100 border-e-4 py-3 border-blue-500 text-blue-500"
                      : " py-2"
                  } flex items-center space-x-4 px-3 my-4 transition-all ease-in-out duration-500 cursor-pointer`}
                >
                  <span className='text-left'>{side_item.logo}</span>
                  <span className='text-sm md:text-lg font-normal'>
                    {side_item.name}
                  </span>
                </div>
              ))}
            </div>
          </nav>
          {children}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
