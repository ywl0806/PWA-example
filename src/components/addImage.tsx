import { useState } from "react";

export const AddImage = () => {
  const [count, setCount] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  const getImage = async () => {
    const imgUrl = count + 1 + "";
    const newArr = [...images, imgUrl];
    setImages(newArr);
  };

  return (
    <div className="p-5">
      <div></div>
      <button
        className={`duration-400 w-[15rem] rounded-sm border bg-lime-300 text-[3rem] transition-shadow hover:shadow-lg`}
        onClick={() => {
          if (count >= 5) return;
          getImage();
          setCount(count + 1);
        }}
        disabled={count > 5}
      >
        +
      </button>

      <h1 className="text-[2rem]">{count}</h1>

      <div className=" grid min-w-[20rem] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {images.map((img) => (
          <div
            key={img}
            className="mx-auto min-w-[10rem] max-w-[20rem] ease-linear"
          >
            <img src={`/images/dog/img${img}.jpg`} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
