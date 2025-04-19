import React from 'react';

const CategoryNav3 = ({ sections, activeSectionId, setActiveSectionId }) => {
  return (
    <nav className="category-nav-3">
      <div className="category-scroll-3">
        {sections.map(section => (
          <button
            key={section.id}
            className={`category-btn-3 ${activeSectionId === section.id ? 'active' : ''}`}
            onClick={() => {
              setActiveSectionId(section.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {section.title}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default CategoryNav3;