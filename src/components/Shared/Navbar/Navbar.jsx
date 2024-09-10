const Navbar = () => {
  return (
    <div className="max-w-[1200px] mx-auto xl:px-0 md:px-5 px-3">
      <div className="flex justify-between items-center">
        <div>
          <img src="@assets/logo.svg" alt="logo" />
          <span className="text-[#1B1C57] font-bold text-base leading-5">
            Hounter
          </span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
