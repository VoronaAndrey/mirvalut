export const getImg = (name, width, height, boxShadow = "", cursor = "") => {
  return (
    <img
      src={`./image/${name}`}
      alt={name}
      style={{
        width: width,
        height: height,
        boxShadow: boxShadow,
        cursor: cursor,
      }}
    ></img>
  );
};
