export const showAlert = (message) => {
  const alertContainer = document.createElement("div");
  alertContainer.classList.add("error-alert");
  alertContainer.textContent = message;
  document.body.appendChild(alertContainer);
};
