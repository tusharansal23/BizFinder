const SearchBar = () => {
  return (
    <section className="search-bar">
      <input placeholder="Search services (Plumber, Salon, Repair...)" />
      <input placeholder="City" />
      <button>Search</button>
    </section>
  );
};

export default SearchBar;
