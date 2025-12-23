const habitInput = document.getElementById("habitInput");
const addHabitBtn = document.getElementById("addHabitBtn");
const habitList = document.getElementById("habitList");

let habits = JSON.parse(localStorage.getItem("habits")) || [];

renderHabits();

addHabitBtn.addEventListener("click", () => {
  const habitText = habitInput.value.trim();

  if (habitText === "") return;

  habits.push(habitText);
  localStorage.setItem("habits", JSON.stringify(habits));

  habitInput.value = "";
  renderHabits();
});

function renderHabits() {
  habitList.innerHTML = "";

  habits.forEach((habit) => {
    const li = document.createElement("li");
    li.textContent = habit;
    habitList.appendChild(li);
  });
}
