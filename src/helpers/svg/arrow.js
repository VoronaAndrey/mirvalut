const ArrowSVG = ({
  collor = "#252525",
  rotate = 0,
  marginLeft = 0,
  handleSubmit,
}) => {
  return (
    <div
      id="arrow"
      style={{
        transform: `rotate(${rotate}deg)`,
        marginLeft: `${marginLeft}px`,
        cursor: "pointer",
        "&:hover svg path": {
          fill: "red",
        },
      }}
      onClick={handleSubmit && (() => handleSubmit())}
    >
      <svg
        width="6"
        height="9"
        viewBox="0 0 12 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.6974 0.434752L11.5637 1.30073C11.8484 1.60083 11.9908 1.95132 11.9908 2.35141C11.9908 2.75974 11.8484 3.10607 11.5637 3.39096L5.95081 9.00364L11.5635 14.6163C11.8483 14.9011 11.9907 15.2475 11.9907 15.6557C11.9907 16.056 11.8483 16.4064 11.5635 16.7065L10.6972 17.5612C10.4048 17.8538 10.0544 18 9.64631 18C9.23062 18 8.88417 17.8536 8.60705 17.5612L1.08891 10.0431C0.796463 9.76583 0.650117 9.41954 0.650117 9.00368C0.650117 8.59563 0.796422 8.24525 1.08891 7.95293L8.60705 0.434792C8.89197 0.149906 9.23838 0.00736237 9.64631 0.00736237C10.0468 0.00732231 10.397 0.149866 10.6974 0.434752Z"
          fill={collor}
        />
      </svg>
    </div>
  );
};
export default ArrowSVG;
