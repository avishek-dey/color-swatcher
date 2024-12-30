document.getElementById('generateButton').addEventListener('click', () => {
    const input = document.getElementById('colorInput').value.trim();
    const colors = input.split(/\s+/); // Split by spaces or newlines
    const swatchContainer = document.getElementById('swatchContainer');
  
    swatchContainer.innerHTML = ''; // Clear previous swatches
  
    colors.forEach(color => {
      if (/^#?[0-9A-Fa-f]{6}$/.test(color)) {
        const formattedColor = color.startsWith('#') ? color : `#${color}`;
        const swatch = document.createElement('div');
        swatch.className = 'colorSwatch';
        swatch.style.backgroundColor = formattedColor;
        swatch.textContent = formattedColor;
        swatchContainer.appendChild(swatch);
      } else {
        alert(`Invalid color code: ${color}`);
      }
    });
  });
  