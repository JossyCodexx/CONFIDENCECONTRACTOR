

  function toggleDropdown() {
    const dropdown = document.getElementById("dropdownMenu");
    dropdown.classList.toggle("show-dropdown");
  }

  // Optional: Close dropdown if clicked outside
  document.addEventListener("click", function (event) {
    const menu = document.getElementById("dropdownMenu");
    const icon = document.querySelector(".hamburger-icon");

    if (!icon.contains(event.target) && !menu.contains(event.target)) {
      menu.classList.remove("show-dropdown");
    }
  });






















function searchProperties() {
  const location = document.getElementById("location").value;
  const propertyType = document.getElementById("propertyType").value;
  const priceRange = document.getElementById("priceRange").value;

  const resultText = `
    Searching for: ${location || 'Any Location'} · 
    ${propertyType || 'Any Type'} · 
    ${priceRange || 'Any Price'}
  `;

  // Find the result container or create one
  let resultDiv = document.getElementById("searchResult");
  if (!resultDiv) {
    resultDiv = document.createElement("div");
    resultDiv.id = "searchResult";
    resultDiv.className = "search-result";
    document.querySelector(".hero-content").appendChild(resultDiv);
  }

  resultDiv.textContent = resultText;
}
