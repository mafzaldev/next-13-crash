import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Next13Blog</h1>
      <ul>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/about/team">Team</Link>
      </ul>
    </div>
  );
};

export default HomePage;
