export default function SearchBar() {
  return (
    <div className="flex">
      <span className="inline-flex items-center px-3 text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </span>
      <input
        type="search"
        name="search"
        id="search"
        className="search-textfield"
        placeholder="What do you want to learn about?"
      />
    </div>
  );
}
