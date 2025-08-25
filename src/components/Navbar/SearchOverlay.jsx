import React, { useRef, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useExercisesSearch } from "../../hooks/useExercisesSearch";

const SearchOverlay = ({ searchOpen, setSearchOpen }) => {
  const { search, setSearch, handleSearch } = useExercisesSearch();
  const navigate = useNavigate();
  const formRef = useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const results = await handleSearch();
    setSearchOpen(false);
    navigate("/results", { state: { exercises: results } });
  };

  // Cerrar al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSearchOpen]);

  if (!searchOpen) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-40 flex justify-center items-center px-4">
      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="bg-white dark:bg-gray-800 rounded-full flex items-center px-4 py-2 w-full max-w-lg"
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search exercises..."
          className="flex-1 p-2 bg-transparent outline-none text-gray-900 dark:text-white"
        />
        <button
          type="submit"
          className="text-xl text-gray-700 dark:text-gray-200 hover:opacity-80 px-3"
        >
          <CiSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchOverlay;
