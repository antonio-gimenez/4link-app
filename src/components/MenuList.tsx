import React from "react";

// Type for the menu list
type Menu = {
  idProduct: string,
  languageName: string,
  allergens: string[],
};

// Type for the props
type MenuListProps = {
  menu: Menu[],
  showAllergens: boolean,
};

// Create a component that will render the menu list with the allergens if showAllergens is true
// The component will receive the menu list and the showAllergens value
const MenuList: React.FC<MenuListProps> = ({ menu, showAllergens }) => {
  return (
    <div className="menu">
      {menu.map((item: Menu) => (
        <div className="menu-item" key={item.idProduct}>
          <div className="menu-desc">
            <p className="menu-desc-name">{item.languageName}</p>
            <span className="menu-desc-id">{item.idProduct}</span>
          </div>
          {showAllergens && <p className="menu-allergens">Allergens: {item.allergens.join(", ")}</p>}
        </div>
      ))}
    </div>
  );
};

export default MenuList;
