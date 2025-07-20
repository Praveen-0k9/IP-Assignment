function showDateTime() {
  let now = new Date();
  let dateTimeString = now.toLocaleString();
  document.getElementById("dateTimeDisplay").textContent = dateTimeString;
}
