<template>
  <body>
    <div class="todo-app container">
      <div class="header d-flex align-items-center">
        <img :src="logo" alt="Profile" class="profile-img">
        <h2 class="text-white fw-bold ms-4">Hi, Radwa</h2>
      </div>

      <div class="calendar-container">
        <div class="calendar-header d-flex justify-content-center">
          <div v-for="day in calendarDays" :key="day.date" class="day" :class="{'current-day': day.isToday}">
            <div class="d-grid ">
                <span class="weekday mb-2">{{ day.weekday }}</span>
                <strong class="data">{{ day.date }}</strong>
            </div>

          </div>
        </div>
      </div>

      <div class="input-group mt-4">
        <input class="form-control" v-model="newTask.text" placeholder="Add a task..." />
        <input type="time" v-model="newTask.time" />
        <button class="addtion" @click="addTask">+</button>
      </div>

      <ul>
        <h4 class="h5 fw-bold mt-5">Today's Tasks:</h4>

        <div class="search-bar input-group px-4 px-2 py-3">
          <input v-model="searchQuery" type="text" class="form-control rounded rounded-4" placeholder="Search tasks...">
        </div>

        <!-- Use filteredTasks here -->
        <li v-for="(task, index) in filteredTasks" :key="index">
          <span>{{ task.time }} - {{ task.text }}</span>
          <div class="d-flex justify-content-evenly w-25">
            <button @click="editTask(index)">✏️</button>
            <button @click="deleteTask(index)">⭕</button>
          </div>
        </li>
      </ul>
    </div>
  </body>
</template>


<script setup>
import { computed, ref, onMounted, watch } from 'vue';
import logo from '../../assets/WhatsApp Image 2025-01-04 at 22.19.07.jpeg';

function formatDate(date) {
  return date.toLocaleDateString('en-US', {  day: 'numeric'});
}

function getWeekday(date) {
  return date.toLocaleDateString('en-US', { weekday: 'short' });
}

// Generate calendar days
const calendarDays = computed(() => {
  const days = [];
  const today = new Date(); // Get today's date

  // Add 3 days before today
  for (let i = -3; i < 0; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    days.push({
      date: formatDate(date),
      weekday: getWeekday(date),
      isToday: false,
    });
  }

  // Add today
  days.push({
    date: formatDate(today),
    weekday: getWeekday(today),
    isToday: true,
  });

  // Add 3 days after today
  for (let i = 1; i <= 3; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    days.push({
      date: formatDate(date),
      weekday: getWeekday(date),
      isToday: false,
    });
  }

  return days;
});

const tasks = ref([]);
const newTask = ref({ text: '', time: '' });
const searchQuery = ref('');

// Load tasks from localStorage
onMounted(() => {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.value = savedTasks;
});

// Watch for changes and update localStorage
watch(tasks, (newTasks) => {
  localStorage.setItem('tasks', JSON.stringify(newTasks));
}, { deep: true });

// Add a new task
const addTask = () => {
  if (newTask.value.text && newTask.value.time) {
    tasks.value.push({ ...newTask.value });
    newTask.value = { text: '', time: '' };
  }
};

// Edit an existing task
const editTask = (index) => {
  newTask.value = { ...tasks.value[index] };
  tasks.value.splice(index, 1);
};

// Delete a task
const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

// Filter tasks based on the search query
const filteredTasks = computed(() => {
  return tasks.value.filter(task =>
    task.text.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>


<style scoped>
body{
  background-color: #ffece2;
  width: 100%;
   padding: 70px;
}
.addtion{
  background-color: #6e3e33;
  color: aliceblue;
}
.todo-app {
  max-width: 500px;
  margin: auto;
  background: #FFB997;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
.profile-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: block;
  margin-left: 30px;
}
.calendar {
  display: flex;
  justify-content: space-around;
  background: #fff;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
}
.day {
  text-align: center;
  font-size: 14px;
  padding: 10px;
  margin-top: 30px;
  border-radius: 5px;
}
.current-day {
  background: #ff8364;
  color: white;
  font-weight: bold;
}
.task-list .completed {
  text-decoration: line-through;
  opacity: 0.6;
}
.actions {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
.edit-icon, .delete-icon {
  cursor: pointer;
  font-size: 18px;
}


.todo-container {
  max-width: 400px;
  margin: auto;
  text-align: center;
  padding: 20px;
  background: #FFB997;
  border-radius: 10px;
}
.input-group {
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
}
input, button {
  padding: 8px;
  border: none;
  border-radius: 5px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  background: white;
  margin: 5px 0;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
}
</style>