export default function clearAllButtons() {
  const clearAllButton = document.querySelector("#clear");

  clearAllButton.addEventListener("click", clearList);

  function clearList() {
    localStorage.clear();
  }
}
