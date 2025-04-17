import * as XLSX from 'xlsx';

export const loadMenuData = async () => {
  try {
    // Fetch the Excel file
    const response = await fetch('/data/menu.xlsx');
    console.log('res:::',response)
    const arrayBuffer = await response.arrayBuffer();
    const data = new Uint8Array(arrayBuffer);
    const workbook = XLSX.read(data, { type: 'array' });
    
    // Get sheets
    const sectionsSheet = workbook.Sheets['Sections'];
    const productsSheet = workbook.Sheets['Products'];
    
    // Convert to JSON
    const sections = XLSX.utils.sheet_to_json(sectionsSheet);
    const products = XLSX.utils.sheet_to_json(productsSheet);
    
    // Convert numeric fields
    const processedProducts = products.map(product => ({
      ...product,
      price: Number(product.price),
      sectionId: Number(product.sectionId),
      id: Number(product.id)
    }));
    
    const processedSections = sections.map(section => ({
      ...section,
      id: Number(section.id)
    }));
    
    return { sections: processedSections, products: processedProducts };
  } catch (error) {
    console.error('Error loading menu data:', error);
    return { sections: [], products: [] };
  }
};