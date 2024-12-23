import Search from "./Search";

const Header = () => {
  return (
    <div className="flex flex-wrap justify-between pt-16">
      <h1 className="font-bold sm:text-3xl text-2xl sm:mb-0 mb-2">
        Discover Events
      </h1>
      <Search />
    </div>
  );
};

export default Header;
