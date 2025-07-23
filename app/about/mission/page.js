"use client";
import React from "react";

export default function Mission() {
  return (
    <main className="mt-10">
      <div>Mission page</div>

      <div>
        <button
          className="bg-green-500 rounded-sm px-4 py-1 text-white"
          onClick={() => console.log("I have clicked here")}
        >
          Click Here
        </button>
      </div>
    </main>
  );
}
