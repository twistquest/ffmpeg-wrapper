const dropZone = document.getElementById("drop-zone") as HTMLElement;
const output = document.getElementById("output") as HTMLElement;
const videoFormats = [
  ".webm",
  ".mkv",
  ".avi",
  ".mov",
  ".wmv",
  ".mp4",
  ".m4v",
] as string[];

dropZone.addEventListener("drop", dropHandler);

window.addEventListener("dragover", (e) => {
  e.preventDefault();
});
window.addEventListener("drop", (e) => {
  e.preventDefault();
});

function dropHandler(ev: DragEvent) {
  ev.preventDefault();
  if (!ev.dataTransfer) return
  Array.from(ev.dataTransfer.items).forEach((item, i) => {
    if (item.kind === "file") {
      const file = item.getAsFile();
      if (!file) return 
      let ext = ""
      let parts = file.name.split(".")
      let lastPart = parts.pop()
      if (lastPart) {
        ext = "." + lastPart.toLowerCase()
      }
      if (videoFormats.indexOf(ext) !== -1) {
        output.textContent = "this file is compressable";
      } else {
        output.textContent =
          "this file is not compressable. please provide a video file.";
      }
    }
  });
}
