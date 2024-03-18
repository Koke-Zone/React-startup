import { RES_URL_PIC } from "../components/utilis/constaints";
const ResturantCategoryList = ({ dataList }) => {
  return (
    <div className="acc-a shadow-md shadow-zinc-500">
      {dataList.map((m) => ( 
        <div className="p-4 border-b-2 flex items-center bg-cyan-700 bg-opacity-75 relative">
          <div className="data-card w-9/12">
            <span className="text-white text-xl capitalize font-semibold stroke-slate-100">{m.card.info.name}</span>
            <p className="price text-white">
              {m.card.info.price
                ? m.card.info.price / 100
                : m.card.info.defaultPrice / 100}{" "}
              Rs
            </p>
            <p className="text-white">{m.card.info.description}</p>
          </div>
          <div className="image w-3/12 flex justify-end">
            <img
              src={RES_URL_PIC + m.card.info.imageId}
              alt="no-image"
              width="150"
              height="100"
              className="rounded-md h-100 w-150"
            /> 
            <button className="absolute bg-customPink text-yellow-50 font-semibold w-2/12 bottom-3 right-4 text-sm py-2 rounded-sm"> Add + </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ResturantCategoryList;
