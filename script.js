const habitInput = document.getElementById("habitInput");
const addHabitBtn = document.getElementById("addHabitBtn");
const habitList = document.getElementById("habitList");

// Load habits from localStorage
let habits = JSON.parse(localStorage.getItem("habits")) || [];

// Render habits on page load
renderHabits();

// Add new habit
addHabitBtn.addEventListener("click", () => {
  const habitText = habitInput.value.trim();

  if (habitText === "") {
    alert("Please enter a habit");
    return;
  }

  habits.push({
    text: habitText,
    completed: false,
  });

  habitInput.value = "";
  saveHabits();
  renderHabits();
});

// Save to localStorage
function saveHabits() {
  localStorage.setItem("habits", JSON.stringify(habits));
}

// Render habit list
function renderHabits() {
  habitList.innerHTML = "";

  habits.forEach((habit, index) => {
    const li = document.createElement("li");
    if (habit.completed) li.classList.add("completed");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = habit.completed;

    checkbox.addEventListener("change", () => {
      habits[index].completed = checkbox.checked;
      saveHabits();
      renderHabits();
    });

    const span = document.createElement("span");
    span.textContent = habit.text;

    li.appendChild(checkbox);
    li.appendChild(span);
    habitList.appendChild(li);
  });
}
