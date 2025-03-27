import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select onChange={changeLanguage} value={i18n.language} className="language-switcher">
      <option value="fr">Français</option>
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="de">Deutsch</option>
      <option value="ar">العربية</option>
      <option value="zh">中文</option>
    </select>
  );
};

export default LanguageSwitcher;