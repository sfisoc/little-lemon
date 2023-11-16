export const validateEmail = email => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  
  export const validateName = name => {
    return name.match(/^[a-zA-Z]+$/);
  };
  

  export function getSectionListData(data) {
    // SECTION_LIST_MOCK_DATA is an example of the data structure you need to return from this function.
    // The title of each section should be the category.
    // The data property should contain an array of menu items. 
    // Each item has the following properties: "id", "title" and "price"
    // Hint: You need to use the reduce function to transform the data into the desired structure.
    // Hint: You can use the SECTION_LIST_MOCK_DATA as a reference to see how the data should look like
     
    const categoryItems = data.reduce((acc, curr) => {
      const menuItem = {
        id: curr.id,
        title: curr.title,
        price: curr.price,
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
  