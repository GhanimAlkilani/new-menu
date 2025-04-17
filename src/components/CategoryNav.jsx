import React from 'react';
import { FaUtensils, FaWineGlassAlt, FaIceCream, FaGlassCheers } from 'react-icons/fa';

const getCategoryIcon = (sectionTitle) => {
  switch(sectionTitle) {
    case 'Appetizers':
      return <FaUtensils />;
    case 'Main Courses':
      return <FaUtensils />;
    case 'Desserts':
      return <FaIceCream />;
    case 'Drinks':
      return <FaGlassCheers />;
    default:
      return <FaWineGlassAlt />;
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