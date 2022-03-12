document.addEventListener("DOMContentLoaded", () => {
  const addInputForm = document.querySelector(".add-input-form"),
    addPlaneInput = document.querySelector("#add-plane-input"),
    checkBox = document.querySelector("#E200"),
    planeMenu = document.querySelector(".planeMenu");

  let isEye = "";
  let arr = ["Wake up 06:00", "To wash", "Breakfast", "Go to work", "Dinner"];

  addInputForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputValue = addPlaneInput.value;
    if (inputValue.length > 20) {
      inputValue = `${inputValue.substring(0, 21)}...`;
    }

    arr.push(inputValue);
    e.target.reset();
    addItemFunc(arr, planeMenu);
  });

  function addItemFunc(workList, parent) {
    parent.innerHTML = "";
    workList.forEach((item, index) => {
      parent.innerHTML += `<li class="planeList1 list-item">${
        index + 1
      } ${item} <span class = "trash-bin"><img src="./resource/klassic.png" alt="" /></span></li>`;
    });

    document.querySelectorAll(".trash-bin").forEach((e, i) => {
      e.addEventListener("click", () => {
        e.parentElement.remove();
        arr.splice(i, 1);
        addItemFunc(arr, planeMenu);
      });
    });
  }
  addItemFunc(arr, planeMenu);
});
