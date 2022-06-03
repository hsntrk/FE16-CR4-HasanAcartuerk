let karten = JSON.parse(taskcard); //converting from string to object
console.table(karten);
console.log("import realized");

// print cards from the array
function printCardsOnHtml(array) {
  document.getElementById("cards-content").innerHTML = "";

  for (let item of array) {
    document.getElementById("cards-content").innerHTML += `
    <div class="col">
        <div class="card m-4 p-2 shadow bg-white rounded" >
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
                        <ul class="d-flex justify-content-end align-items-center mb-0">
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
      // only clickable until max 5, do not continue and return
      if (karten[i].importance >= 5) {
        return;
      }
      karten[i].importance++;
      // created a span inside the printCardsOnHtml Function for number prio
      document.getElementsByClassName("number-prio")[i].innerHTML =
        karten[i].importance;

      // calling the function inside, i keep it seperated only to style and render
      makePriorityRender(i, levelup[i]);
    });
  }
}

//function for Render the style of the button by clicking
function makePriorityRender(i, levelUp) {
  //   by increasing per click, achive to change the background colors,
  //   instead of making a css style, i write in to the same class name
  //   by adding bootstrap classnames for color
  if (karten[i].importance <= 1) {
    document
      .getElementsByClassName("level-increase")
      [i].classList.add("bg-success");
  } else if (karten[i].importance <= 3) {
    levelUp.classList.add("border-warning", "bg-warning", "text-dark");
  } else if (karten[i].importance <= 5) {
    levelUp.classList.add("border-danger", "bg-danger", "text-white");
  } else {
    levelUp.classList.add("border-danger", "bg-danger");
  }
}

// call function to count up by click
makePriority();

function sortByPriority() {
  var sorticon = document.getElementsByClassName("btn-prio")[0];
  sorticon.addEventListener("click", function () {
    let sortedPriority = karten.sort((a, b) => b.importance - a.importance);
    // after clicking the sort button, it was not possible to click the priority buttons, so i call the function both again, now it works.
    printCardsOnHtml(sortedPriority);
    makePriority();

    let levelup = document.getElementsByClassName("level-increase");
    for (let i = 0; i < levelup.length; i++) {
      // the same here, i call the function when click to render the styles like background color and so on.
      makePriorityRender(i, levelup[i]);
    }
  });
}

// calling the function to run, only used outside and here.
sortByPriority();
