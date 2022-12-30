import React from "react";

// Create a type for the props
type AllergensButtons = {
    showAllergens: boolean;
    setShowAllergens: (value: boolean) => void;
};

// Create a component that will render the buttons with the state of showAllergens and the function to change the state
const AllergensButtons: React.FC<AllergensButtons> = ({ showAllergens, setShowAllergens }) => {
    return (
        <div className="buttons">
            {/* If  showAllergens is true, disable the Show Allergens button */}
            <button className="button" disabled={showAllergens} onClick={() => setShowAllergens(true)}>
                Show Allergens
            </button>
            {/* If  showAllergens is false, disable the Hide Allergens button */}
            <button className="button" disabled={!showAllergens} onClick={() => setShowAllergens(false)}>
                Hide Allergens
            </button>
        </div>
    );
};

export default AllergensButtons;