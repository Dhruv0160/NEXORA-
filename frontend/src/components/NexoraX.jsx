import React from "react";

/**
 * Nexora "X" mark — a clean 4-wing geometric X made of two
 * crossing parallelograms, mirroring the brand logo.
 */
const NexoraX = ({ className = "w-7 h-7" }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    {/* Diagonal from top-left to bottom-right */}
    <polygon points="3,3 11,3 29,21 29,29 21,29 3,11" />
    {/* Diagonal from top-right to bottom-left */}
    <polygon points="29,3 21,3 3,21 3,29 11,29 29,11" />
  </svg>
);

export default NexoraX;
