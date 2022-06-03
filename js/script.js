let karten = JSON.parse(taskcard); //converting from string to object
console.table(karten);
console.log("import realized");

// print cards from the array
function printCardsOnHtml(array) {
  document.getElementById("cards-content").innerHTML = "";
  for (let item of array) {
    document.getElementById("cards-content").innerHTML += `
    <div class="col">
        <div class="card m-4 p-2 shadow bg-white rounded" style="width: 18rem;">
                <div class="d-flex justify-content-between p-2">
                    <span class="badge text-bg-info">${item.taskName}</span>
                    <span><i class="fa-regular fa-bookmark me-3"></i> <i class="fa-solid fa-ellipsis-vertical"></i></span>
                </div>
                    <img src="${item.image}" class="card-img-top img-thumbnail">
                    <div class="card-body">
                        <h5 class="card-title text-center">${item.titleCard}</h5>
                        <p class="card-text text-center">${item.description}</p>
                    </div>
                    <hr>
                    <div class="part-infos">
                        <div class="part-priority">
                            <p class=""><i class="fa-solid fa-triangle-exclamation"></i> Priority level:
                                <button type="button"
                                        class="btn btn-success level-increase"><span class="number-prio">${item.importance}</span></button>
                            </p>
                            <p class=""><i class="fa-solid fa-calendar-days"></i> Deadline: <span
                                      class="deadlineDate">${item.deadline}</span> 
                            </p>
                        </div>
                    </div>
                    <div class="card-footer bg-transparent">
                        <ul class="d-flex justify-content-end align-items-center">
                            <a href="#"
                               class="btn btn-danger m-1"><i class="fa-solid fa-trash-can"></i> Delete</a>
                            <a href="#"
                               class="btn btn-success m-1"><i class="fa-regular fa-circle-check"></i> Done</a>
                        </ul>
                </div>
        </div>
    </div>
    `;
  }
}

// call function to print the the objects array on cards
printCardsOnHtml(karten);

// creating function while clicking on priority button
function makePriority() {
  let levelup = document.getElementsByClassName("level-increase");
  for (let i = 0; i < levelup.length; i++) {
    levelup[i].addEventListener("click", function () {
      karten[i].importance++;
      // created a span inside the printCardsOnHtml Function for number prio
      document.getElementsByClassName("number-prio")[i].innerHTML =
        karten[i].importance;
      //   by increasing per click, achive to change the background colors,
      //   instead of making a css style, i write in to the same class name
      //   by adding bootstrap classnames for color
      if (karten[i].importance <= 1) {
        document
          .getElementsByClassName("level-increase")
          [i].classList.add("bg-success");
      } else if (karten[i].importance <= 3) {
        levelup[i].classList.add("bg-warning"),
          levelup[i].classList.add("text-dark"),
          levelup[i].classList.add("border-warning");
      } else if (karten[i].importance <= 5) {
        levelup[i].classList.add("bg-danger"),
          levelup[i].classList.add("text-white"),
          levelup[i].classList.add("border-danger");
      } else {
        levelup[i].classList.add("bg-danger"),
          levelup[i].classList.add("border-danger");
      }
    });
  }
}
// call function to count up by click
makePriority();

