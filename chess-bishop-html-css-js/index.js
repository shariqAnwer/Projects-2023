let table = document.getElementById("myTable");

for (let i = 0; i < 8; i++) {
  let tr = document.createElement("tr");
  let white = i % 2 == 0 ? true : false;
  for (let j = 0; j < 8; j++) {
    let td = document.createElement("td");
    if (white) {
      td.setAttribute("class", "box white");
    } else {
      td.setAttribute("class", "box black");
    }
    white = !white;
    td.setAttribute("data-index", `${i}-${j}`);
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

table.addEventListener("mouseover", function (e) {
  let temp = e.target.dataset.index.split("-").map((val) => parseInt(val));
  let row = temp[0];
  let col = temp[1];
  let str = `${row}-${col}`;
  let obj = {};
  obj[str] = true;

  obj = findTopLeft(row, col, obj);
  obj = findTopRight(row, col, obj);
  obj = findBottomLeft(row, col, obj);
  obj = findBottomRight(row, col, obj);

  let cells = document.querySelectorAll("td");

  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.remove("blue");
  }

  for (let i = 0; i < cells.length; i++) {
    let str = `${cells[i].closest("tr").rowIndex}-${cells[i].cellIndex}`;

    if (obj[str]) {
      cells[i].classList.add("blue");
    }
  }
});

table.addEventListener("mouseleave", function (e) {
  const cells = document.querySelectorAll("td");

  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.remove("blue");
  }
});

function findTopLeft(row, col, obj) {
  row--;
  col--;
  while (row >= 0 && col >= 0) {
    let key = `${row}-${col}`;
    obj[key] = true;
    row--;
    col--;
  }

  return obj;
}

function findTopRight(row, col, obj) {
  row--;
  col++;
  while (row >= 0 && col < 8) {
    let key = `${row}-${col}`;
    obj[key] = true;
    row--;
    col++;
  }

  return obj;
}

function findBottomLeft(row, col, obj) {
  row++;
  col--;
  while (row < 8 && col >= 0) {
    let key = `${row}-${col}`;
    obj[key] = true;
    row++;
    col--;
  }

  return obj;
}

function findBottomRight(row, col, obj) {
  row++;
  col++;
  while (row < 8 && col < 8) {
    let key = `${row}-${col}`;
    obj[key] = true;
    row++;
    col++;
  }

  return obj;
}
