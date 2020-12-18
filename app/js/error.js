export const createErrorMessage = (message, parent) => {
  const div = document.createElement("div");
  div.classList.add("error-message");
  div.textContent = message;
  parent.appendChild(div);
};
