import React,{ } from "react";
import View from "../ViewList/View";

function FilteredList({ items, filterFn, renderItem, filter,filterElement,setFilter,el }) {
    
    const visibleItems = filterFn(filter, items , el);
    console.log(visibleItems);
    return (
      <div>
        {filterElement(filter,setFilter)}
        {visibleItems?.map(item => renderItem(item))}
      </div>
    );

    
  }

  FilteredList.defaultProps = {
    
    renderItem(item) {
      <View text={item} />;
    },

    filterElement(filter, setFilter) {
        return (
          <input
              type="text"
              value={filter}
              onChange={e => setFilter(e.target.value)}
            />
          
        );
      }
   
  };

  

  export default FilteredList