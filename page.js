const text = "Front-end engineer";
const container = document.getElementById("text");
let index = 0;

function showText() {
  container.textContent = text.slice(0, index);
  index++;

  if (index <= text.length) {
    setTimeout(showText, 200); // 調整顯示速度，單位是毫秒
  } else {
    index = 0; // 重新開始顯示
    setTimeout(showText, 2000); // 等待一秒後重新顯示
  }
}
