export const navigateToSection = (path: string, sectionId?: string) => {
  if (path === '/' && sectionId) {
    // Se siamo già nella Home, scorri alla sezione
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  } else if (path === '/' && !sectionId) {
    // Se siamo già nella Home senza sezione, vai in cima
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    // Se siamo in un'altra pagina, naviga alla Home
    window.location.href = `/${sectionId ? `#${sectionId}` : ''}`;
  }
};
