// Click a gallery photo to view it full size; arrow keys / buttons move between photos.
// Without JavaScript the gallery links simply open the full-size image.
(function () {
  var galleries = document.querySelectorAll(".gallery");
  if (!galleries.length) return;

  var box = document.createElement("div");
  box.className = "lightbox";
  box.hidden = true;
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.setAttribute("aria-label", "Photo viewer");
  box.innerHTML =
    '<button class="lb-close" aria-label="Close">&times;</button>' +
    '<button class="lb-prev" aria-label="Previous photo">&lsaquo;</button>' +
    '<img alt="">' +
    "<p></p>" +
    '<button class="lb-next" aria-label="Next photo">&rsaquo;</button>';
  document.body.appendChild(box);

  var img = box.querySelector("img");
  var caption = box.querySelector("p");
  var items = [];
  var index = 0;
  var opener = null;

  function show(i) {
    index = (i + items.length) % items.length;
    var a = items[index];
    img.src = a.href;
    img.alt = a.querySelector("img").alt;
    caption.textContent = a.getAttribute("data-caption") || "";
    var multi = items.length > 1;
    box.querySelector(".lb-prev").hidden = !multi;
    box.querySelector(".lb-next").hidden = !multi;
  }

  function close() {
    box.hidden = true;
    img.removeAttribute("src");
    document.body.style.overflow = "";
    if (opener) opener.focus();
  }

  galleries.forEach(function (g) {
    var links = Array.prototype.slice.call(g.querySelectorAll("a.gallery-item"));
    links.forEach(function (a, i) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        items = links;
        opener = a;
        box.hidden = false;
        document.body.style.overflow = "hidden";
        show(i);
        box.querySelector(".lb-close").focus();
      });
    });
  });

  box.querySelector(".lb-close").addEventListener("click", close);
  box.querySelector(".lb-prev").addEventListener("click", function () { show(index - 1); });
  box.querySelector(".lb-next").addEventListener("click", function () { show(index + 1); });
  box.addEventListener("click", function (e) { if (e.target === box) close(); });
  document.addEventListener("keydown", function (e) {
    if (box.hidden) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") show(index - 1);
    else if (e.key === "ArrowRight") show(index + 1);
  });
})();
