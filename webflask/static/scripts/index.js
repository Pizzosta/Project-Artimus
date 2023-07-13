function deleteNote(noteId) {
  fetch("/delete-note", {
    method: "POST",
    body: JSON.stringify({ noteId: noteId }),
  }).then((_res) => {
    window.location.href = "/";
  });
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("scanForm");
  const loadingSpinner = document.getElementById("loadingSpinner");
  const results = document.getElementById("resultsContainer");

  form.addEventListener("submit", function() {
      loadingSpinner.style.display = "block";
      results.style.display = "none";
  });
});
