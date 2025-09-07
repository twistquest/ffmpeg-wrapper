"use strict";
const dropZone = document.getElementById("drop-zone");
const output = document.getElementById("output");
const videoFormats = [
    ".webm",
    ".mkv",
    ".avi",
    ".mov",
    ".wmv",
    ".mp4",
    ".m4v",
];
dropZone.addEventListener("drop", dropHandler);
window.addEventListener("dragover", (e) => {
    e.preventDefault();
});
window.addEventListener("drop", (e) => {
    e.preventDefault();
});
function dropHandler(ev) {
    ev.preventDefault();
    console.log("drophandler is firing");
    let result = "";
    if (!ev.dataTransfer)
        return;
    Array.from(ev.dataTransfer.items).forEach((item, i) => {
        if (item.kind === "file") {
            const file = item.getAsFile();
            if (!file)
                return;
            let ext = "";
            let parts = file.name.split(".");
            let lastPart = parts.pop();
            if (lastPart) {
                ext = "." + lastPart.toLowerCase();
            }
            result += `• file[${i}].name = ${file.name}\n`;
            if (videoFormats.indexOf(ext) !== -1) {
                output.textContent = "this file is compressable";
            }
            else {
                output.textContent =
                    "this file is not compressable. please provide a video file.";
            }
        }
    });
}
//# sourceMappingURL=renderer.js.map