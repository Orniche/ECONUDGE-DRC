// Animation au chargement des produits
const produits = document.querySelectorAll('.produit');
window.addEventListener('load', () => {
  produits.forEach((produit, index) => {
    setTimeout(() => {
      produit.style.opacity = '1';
      produit.style.transform = 'translateY(0)';
      produit.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    }, index * 200); // Délai pour chaque produit
  });
});

// Animation au survol des produits
produits.forEach((produit) => {
  produit.addEventListener('mouseover', () => {
    produit.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
    produit.style.transition = 'box-shadow 0.3s ease';
  });

  produit.addEventListener('mouseout', () => {
    produit.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  });
});
