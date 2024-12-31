document.getElementById("showColorsButton").addEventListener("click", () => {
    const hexInput = document.getElementById("hexInput").value.trim();
    const hexCodes = hexInput.split(/\s+/);
  
    if (hexCodes.some((code) => !/^([0-9A-F]{6})$/i.test(code))) {
      alert("Invalid color code format. Ensure each code is a 6-digit HEX without a # prefix.");
      return;
    }
  
    const colorDisplay = document.getElementById("colorDisplay");
    colorDisplay.innerHTML = ""; // Clear previous colors
  
    hexCodes.forEach((hex) => {
      const colorDiv = document.createElement("div");
      colorDiv.classList.add("w-24", "h-24", "shadow-md", "border");
      colorDiv.style.backgroundColor = `#${hex}`;
      colorDiv.title = `#${hex}`;
  
      const label = document.createElement("span");
      label.textContent = `#${hex}`;
      label.classList.add("block", "text-center", "hidden", "mt-2", "text-gray-800");
  
      const wrapper = document.createElement("div");
      wrapper.classList.add("flex", "flex-col", "items-center", "justify-center");
      wrapper.appendChild(colorDiv);
      wrapper.appendChild(label);
  
      colorDisplay.appendChild(wrapper);
    });
  });
  