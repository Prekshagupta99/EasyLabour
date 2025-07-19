// src/app/components/Navbar.jsx
"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-teal-800 text-white">
      <div className="text-2xl font-bold">
        <Link href="/">EasyLabour</Link>
      </div>
      <ul className="flex items-center gap-6 text-lg">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/login"> Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
