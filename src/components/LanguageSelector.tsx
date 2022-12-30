import React from "react";

type LanguageSelectorProps = {
  menuLanguage: string,
  setMenuLanguage: (value: string) => void,
};

// This component is used to select the language of the menu list and set the menuLanguage state
const LanguageSelector: React.FC<LanguageSelectorProps> = ({ menuLanguage, setMenuLanguage }) => {
  return (
    <div className="buttons">
      <button className="button" disabled={menuLanguage === "esp"} onClick={() => setMenuLanguage("esp")}>
        Spanish
      </button>
      <button className="button" disabled={menuLanguage === "cat"} onClick={() => setMenuLanguage("cat")}>
        Catalan
      </button>
    </div>
  );
};

export default LanguageSelector;
