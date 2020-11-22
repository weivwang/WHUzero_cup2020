/*
 * @Date: 2020-11-22 22:26:48
 * @LastEditors: QiuJhao
 * @LastEditTime: 2020-11-22 22:43:28
 */
var t;
var wid = 32;

function move() {
  if (wid > 368) exit();
  var right = document.getElementById("right");
  wid += 20;
  right.style.width = wid + "px";
  t = setTimeout("move()", 100);
  if (wid > 368) clearTimeout(t);
}
