const btn = document.querySelector("button");
const containerIframe = document.querySelector("#containerIframe");

let i = 0;

btn.addEventListener("click", (eo) => {
  const videosArray = [
  `<iframe id="video" height="315" src="https://www.youtube.com/embed/bv_IJ3N6y8U?si=BpIfG5NOSGLjK7xj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  `<iframe id="video" src="https://www.youtube.com/embed/W_y2Bwx94Qo?si=a2sNGEsRilE47c5C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  `<iframe id="video" src="https://www.youtube.com/embed/FVgQcfXHeGo?si=XBwduMvKKYLsMG02" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  ];
  // containerIframe.innerHTML = videosArray[Math.floor(Math.random() * videosArray.length)];
  containerIframe.innerHTML = videosArray[i];
  i++;
  if(i > videosArray.length - 1) {
    i = 0;
  }
});