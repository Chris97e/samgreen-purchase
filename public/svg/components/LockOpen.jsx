import React from "react";

const LockOpen = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M6 8H7V6C7 3.24 9.24 1 12 1C14.76 1 17 3.24 17 6H15C15 4.34 13.66 3 12 3C10.34 3 9 4.34 9 6V8H18C19.1 8 20 8.9 20 10V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V10C4 8.9 4.9 8 6 8ZM6 20H18V10H6V20ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17Z" />
    </svg>
  );
};

export default LockOpen;
