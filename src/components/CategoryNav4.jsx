import React from 'react';

const CategoryNav4 = ({ sections, activeSectionId, setActiveSectionId }) => {
  return (
    <nav className="category-nav-4">
      <div className="category-scroll-4">
        {sections.map(section => (
          <button
            key={section.id}
            className={`category-btn-4 ${activeSectionId === section.id ? 'active' : ''}`}
            onClick={() => setActiveSectionId(section.id)}
          >
            {section.title}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default CategoryNav4;