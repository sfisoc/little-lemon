import { useRef, useEffect } from "react";

export const validateEmail = email => {
  var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  return String(email).search (filter) != -1;

};
  
  export const validateName = name => {
    return !(!name || name.length === 0 );
  };

  export const validateNumber = name => {
    return (name && name.length === 10 );
  };
  
  

  export function getSectionListData(data) {
    const categoryItems = data.reduce((acc, curr) => {
      const menuItem = {
        id: curr.id,
        title: curr.title,
        price: curr.price,
        image: curr.image
      };
      if (!Array.isArray(acc[curr.category])) {
        acc[curr.category] = [menuItem];
      } else {
        acc[curr.category].push(menuItem);
      }
      return acc;
    }, {});
  
    const sectionListData = Object.entries(categoryItems).map(([key, item]) => {
      return {
        title: key,
        data: item,
      };
    });
    return sectionListData;
  }
  
  export function useUpdateEffect(effect, dependencies = []) {
    const isInitialMount = useRef(true);
  
    useEffect(() => {
      if (isInitialMount.current) {
        isInitialMount.current = false;
      } else {
        return effect();
      }
    }, dependencies);
  }
  