/**
 * NITRO FRAME INTERACTION PROTOCOLS
 */
document.addEventListener('DOMContentLoaded', () => {
  const cardElement = document.querySelector('.nitro-spec-card');

  // Dynamic subtle 3D parallax angle response when hover occurs
  cardElement.addEventListener('mousemove', (e) => {
    const rect = cardElement.getBoundingClientRect();
    const x = e.clientX - rect.left - (rect.width / 2);
    const y = e.clientY - rect.top - (rect.height / 2);

    // Apply real-time matrices matrix rotations
    cardElement.style.transform = `rotateX(${-y / 15}deg) rotateY(${x / 15}deg)`;
  });

  // Re-stabilize card layout on mouse leave event parameters
  cardElement.addEventListener('mouseleave', () => {
    cardElement.style.transform = `rotateX(0deg) rotateY(0deg)`;
    cardElement.style.transition = 'transform 0.5s ease';
  });

  cardElement.addEventListener('mouseenter', () => {
    cardElement.style.transition = 'none';
  });
});
