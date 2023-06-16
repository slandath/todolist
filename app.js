// Input Event Listener
document.getElementById("btnTaskInput").addEventListener("click", addToList);

// Unique ID variable
let x = 1;

// Show/Hide alert
function triggerAlert(a, b) {
  document.getElementById(a).className = b;
}

function addToList() {
  let foo = document.getElementById("taskInput").value;

  // Validation
  if (foo === "") {
    triggerAlert("alert", "alert");
    setTimeout(triggerAlert, 3000, "alert", "hidden");
  } else {
    // Hide Alert is Visible
    triggerAlert("alert", "hidden");

    // Create elements to insert in dom
    let row = document.createElement("tr");
    let item = document.createElement("td");
    let btn = document.createElement("button");

    // Create unique ID items and button
    let itemID = "item" + x;
    let btnID = "btn" + x;

    // Assign ID, class and values
    item.innerText = foo;
    btn.innerText = "Done";
    item.id = itemID;
    btn.id = btnID;
    item.className = "item";
    btn.className = "btnDone";
    row.className = "trow";

    // Insert into Dom
    const list = document.getElementById("listHolder");
    list.appendChild(row);
    row.appendChild(item);
    row.appendChild(btn);

    // Attach event listener to done button
    btn.addEventListener("click", function () {
      removeFromList(itemID, btnID);
    });

    // Clear input field
    document.getElementById("taskInput").value = "";

    // Increment unique ID variable
    x++;
  }
}

function removeFromList(a, b) {
  const element1 = document.getElementById(a);
  const element2 = document.getElementById(b);
  element1.remove();
  element2.remove();
  x--;
}
