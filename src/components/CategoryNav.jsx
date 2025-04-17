import React from 'react';
//import { FaUtensils, FaHamburger , FaIceCream, FaGlassCheers } from 'react-icons/fa';

import { 
  FaHamburger,        // Burger icon
  FaPizzaSlice,       // Pizza icon
  FaLeaf,             // Salad icon
  FaCocktail,         // Drinks icon
  FaConciergeBell     // Appetizer icon (best-fit)
} from 'react-icons/fa';
import { GiBarbecue, GiMeat  } from "react-icons/gi";

const getCategoryIcon = (sectionTitle) => {
  switch (sectionTitle) {
    case 'البرجر':
      return <FaHamburger />;
    case 'الشاورما':
      return <GiMeat   />;
    case 'البيتزا والفطائر':
      return <FaPizzaSlice />;
    case 'المشاوي':
      return <GiBarbecue  />;
    case 'السلطات':
      return <FaLeaf />;
    case 'الطلبات الجانبية':
      return <FaConciergeBell />;
    case 'المشروبات':
      return <FaCocktail />;
    default:
      return <FaHamburger />;
  }
};

const CategoryNav = ({ sections, activeSectionId, setActiveSectionId }) => {
  const handleSectionChange = (sectionId) => {
    setActiveSectionId(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="category-nav">
      <ul>
        {sections.map(section => (
          <li 
            key={section.id} 
            className={activeSectionId === section.id ? 'active' : ''}
            onClick={() => handleSectionChange(section.id)}
          >
            <span className="category-icon">{getCategoryIcon(section.title)}</span>
            <span className="category-name">{section.title}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryNav;