console.clear();
const svg = document.querySelector("svg");

const svgns = "http://www.w3.org/2000/svg";

// change any value
let width = 120;
let height = 100;
let columns = 14;
let rows = 15;
let counter = 0;
const colorArray = ["#94c356", "#46a4cc", "#a63e4b"];

// figure the new svg width/height
const svgWidth = width * columns;
const svgHeight = height * rows;

gsap.set(svg, {
  attr: {
    width: svgWidth,
    height: svgHeight,
    viewBox: "0 0 " + svgWidth + " " + svgHeight
  }
});
for (let j = 0; j < rows; j++) {
  for (let i = 0; i < columns; i++) {
    counter++;
    let newRect = document.createElementNS(svgns, "rect");
    gsap.set(newRect, {
      x: i * width,
      y: j * height,
      width: width,
      height: height,
      fill: colorArray[counter % colorArray.length]
    });
    svg.appendChild(newRect);
    let txt = document.createElementNS(svgns, "text");
    txt.textContent = counter;
    svg.appendChild(txt);
    gsap.set(txt, {
      x: i * width + width / 2,
      y: j * height + height / 2
    });
  }
}
