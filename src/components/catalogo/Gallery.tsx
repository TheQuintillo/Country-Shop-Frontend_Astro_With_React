import { useEffect, useState } from "react";
import GalleryData from "./GalleryData";
import "./Media.css";

interface GalleryItem {
  id: number;
  title: string;
  image: string;
}

function Galery() {
  const [data, setData] = useState<GalleryItem[]>([]);
  const [collection, setCollection] = useState<string[]>([]);

  useEffect(() => {
    setData(GalleryData);
    setCollection([...new Set(GalleryData.map((item) => item.title))]);
  }, []);

  const galleryFilter = (itemData: string) => {
    const filterData = GalleryData.filter((item) => item.title == itemData);
    setData(filterData);
  };

  return (
    <>
      <div
        className=""
        style={{
          margin: "0px auto",
        }}
      >
        <div className="container_gallery flex flex-row content-center flex-wrap gap-8 m-8">
          <div className="ml-10">
            <ul>
              <h1 className="ml-5 mb-2  font-bold">Filtrar</h1>
              <li>
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm w-20 py-2.5 text-center mr-2 mb-2"
                  onClick={() => setData(GalleryData)}
                >
                  All
                </button>
              </li>
              {collection.map((item) => (
                <li>
                  <button
                    type="button"
                    className=" text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm w-20 py-2.5 text-center mr-2 mb-2"
                    onClick={() => {
                      galleryFilter(item);
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.map((item) => {
              return (
                <div>
                  <img
                    className="rounded-lg"
                    src={item.image}
                    key={item.id}
                    alt=""
                    style={{
                      objectFit: "cover",
                      height: "300px",
                      width: "400px",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Galery;
