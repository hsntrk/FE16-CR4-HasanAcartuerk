let karten = JSON.parse(taskcard); //converting from string to object
console.table(karten);
console.log("import realized");

// print cards from the array
function printCardsOnHtml(array) {
  document.getElementById("cards-content").innerHTML = "";
  for (let item of array) {
    document.getElementById(
      "cards-content"
    ).innerHTML += `<div class="col"><div class="card m-5 shadow bg-white rounded"
                     style="width: 18rem;">
                    <div class="d-flex justify-content-between p-2">
                        <span class="badge text-bg-info">${item.taskName}</span>
                        <!-- <button type="button"
                            class="btn btn-info">Info</button> -->
                        <span><i class="fa-regular fa-bookmark me-3"></i> <i
                               class="fa-solid fa-ellipsis-vertical"></i></span>
                    </div>
                    <img src="${item.image}"
                         class="card-img-top img-thumbnail"
                         alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.titleCard}</h5>
                        <p class="card-text">${item.description}</p>
                    </div>
                    <div class="card-footer bg-transparent">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><i class="fa-solid fa-triangle-exclamation"></i> Priority level:
                                <button type="button"
                                        class="btn btn-success">${item.importance}</button>
                            </li>
                            <li class="list-group-item"><i class="fa-solid fa-calendar-days"></i> Deadline: <span
                                      class="deadlineDate">${item.deadline}</span> </li>
                        </ul>

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
                </div>
    `;
  }
}

// call function
// printCardsOnHtml(karten);
