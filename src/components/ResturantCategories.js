import { useState } from "react";
import ResturantCategoryList from "./ResturantCategoryList";
const RestuarantCategories = ({ data, toggleValue,setshowIndex }) => {

  // const [toggleValue, settoggleValue] = useState(false);

  const toggleAccordion = () => {
    // settoggleValue(!toggleValue)
    setshowIndex();
  }
  return (
    <div className="accordions max-w-4xl mx-auto">
      <div className="acc-q flex mt-3 justify-between bg-cyan-700 font-semibold p-4 text-yellow-50 rounded-sm cursor-pointer" onClick={toggleAccordion}>
        <span className="title">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="icon-arrow">🔽</span>
      </div>
      {toggleValue && <ResturantCategoryList dataList={data.itemCards} />}
    </div>
  );
};
export default RestuarantCategories;
