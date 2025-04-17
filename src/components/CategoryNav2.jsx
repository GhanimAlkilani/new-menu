import React from 'react';

const CategoryNav2 = ({ sections, activeSectionId, setActiveSectionId }) => {
  return (
    <nav className="category-nav-2">
      <div className="category-scroll">
        {sections.map(section => (
          <button
            key={section.id}
            className={`category-btn-2 ${activeSectionId === section.id ? 'active' : ''}`}
            onClick={() => setActiveSectionId(section.id)}
          >
            {section.title}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default CategoryNav2;