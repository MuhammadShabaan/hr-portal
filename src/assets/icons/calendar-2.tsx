function Calendar2({ color = "#000" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#clip0_33_1777)">
        <path
          fill={color}
          d="M19 2h-1V1a1 1 0 10-2 0v1H8V1a1 1 0 10-2 0v1H5C2.243 2 0 4.243 0 7v12c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5zM5 4h14c1.654 0 3 1.346 3 3v1H2V7c0-1.654 1.346-3 3-3zm14 18H5c-1.654 0-3-1.346-3-3v-9h20v9c0 1.654-1.346 3-3 3zm0-8a1 1 0 01-1 1H6a1 1 0 110-2h12a1 1 0 011 1zm-7 4a1 1 0 01-1 1H6a1 1 0 110-2h5a1 1 0 011 1z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_33_1777">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Calendar2;
