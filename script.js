const habitInput = document.getElementById("habitInput");
const addHabitBtn = document.getElementById("addHabitBtn");
const habitList = document.getElementById("habitList");

addHabitBtn.addEventListener("click", () => {
  const habitText = habitInput.value.trim();

  if (habitText === "") return;

  const li = document.createElement("li");
  li.textContent = habitText;

  habitList.appendChild(li);
  habitInput.value = "";
});
