import { useEffect, useState } from "react";
import "./App.css";
import AllergensButtons from "./components/AllergenButtons";
import { HasAllergens } from "./components/Allergens";
import LanguageSelector from "./components/LanguageSelector";
import MenuList from "./components/MenuList";

function App() {
  // Create a state to store the menu list
  const [menuList, setMenuList] = useState<{ idProduct: string; languageName: string; allergens: string[] }[]>([]);
  // Create a state to store the showAllergens value
  const [showAllergens, setShowAllergens] = useState<boolean>(true);
  // Create a state to store the menu title
  const [menuTitle, setMenuTitle] = useState<string>("");
  const [menuLanguage, setMenuLanguage] = useState<string>("esp");

  useEffect(() => {
    // Fetch the menu list
    const fetchMenuList = async () => {
      try {
        // Get the menu list
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/MenuType/GetMenuList/${menuLanguage}/52`);
        const menuList = await response.json();
        // Get the allergens for each menu with the hasAllergens function and store it in the menuList state `allergens` property
        const menuListWithAllergens = await Promise.all(
          Object.values(menuList)
            .flat()
            .map(async (menu: any) => {
              const allergens = await HasAllergens(menu.idProduct);
              return {
                ...menu,
                allergens,
              };
            })
        );
        // Set the menu title
        setMenuTitle(Object.keys(menuList)[0]);
        // Set the menu list
        setMenuList(menuListWithAllergens);
      } catch (error) {
        // If there is an error, log it
        console.log(error);
      }
    };
    fetchMenuList();
  }, [menuLanguage]);


  return (
    <div className="App">
      <div className="container">
        <h1>{menuTitle}</h1>
        <div className="buttons">
          {/*  Pass the function to change the menu language and the current menu language to the LanguageSelector component */}
          <LanguageSelector setMenuLanguage={setMenuLanguage} menuLanguage={menuLanguage} />
          {/*  Pass the function to change the showAllergens state and the current showAllergens state to the AllergensButtons component */}
          <AllergensButtons showAllergens={showAllergens} setShowAllergens={setShowAllergens} />
        </div>
        {/*  Pass the menu list and the showAllergens state to the MenuList component */}
        <MenuList menu={menuList} showAllergens={showAllergens} />

      </div>
    </div >
  );
}

export default App;
