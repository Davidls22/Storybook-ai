import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home, CreateStory } from "./pages";
import logo from "./assets/logo.png";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-black sm:px-8 px-4 py-4 border-b">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
          <span className="text-white text-2xl ml-2">
            StoryTime
            <span className="text-white text-lg ml-1">-AI</span>
          </span>
        </Link>
        <Link
          to="/create-story"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          Create Your Story
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-story" element={<CreateStory />} />
      </Routes>
    </main>
    </BrowserRouter>
  );
};

export default App;
