// A: BMI Calculator
function calculateBMI() {
  const w = parseFloat(document.getElementById('weight').value);
  const h = parseFloat(document.getElementById('height').value);
  if (w > 0 && h > 0) {
    const bmi = w / (h * h);
    document.getElementById('bmiResult').textContent = `Your BMI is ${bmi.toFixed(2)}`;
  }
}

// B: Pop-up Boxes
function submitForm() {
  alert('Form Submitted!');
}
function deleteItem() {
  if (confirm('Are you sure you want to delete this item?')) {
    alert('Item deleted.');
  }
}
function getName() {
  const name = prompt('Enter your name:');
  document.getElementById('userName').textContent = `Hello, ${name}!`;
}

// C: Dynamic List
function addItem() {
  const item = document.getElementById('newItem').value;
  if (item) {
    const li = document.createElement('li');
    li.textContent = item;
    li.onclick = () => li.remove();
    document.getElementById('itemList').appendChild(li);
    document.getElementById('newItem').value = '';
  }
}

// D: Form Validation
function validateForm() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  const passwordPattern = /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}/;
  let message = '';

  if (!emailPattern.test(email)) message += 'Invalid email format. ';
  if (!passwordPattern.test(password)) message += 'Weak password.';

  document.getElementById('validationMsg').textContent = message;
  return message === '';
}

// E: Date, Math, AJAX
function showDateTime() {
  const now = new Date();
  document.getElementById('dateTime').textContent = now.toString();
}
function generateRandom() {
  const rand = Math.floor(Math.random() * 100);
  document.getElementById('randomNumber').textContent = `Random Number: ${rand}`;
}
async function fetchWeather() {
  try {
    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric');
    const data = await res.json();
    document.getElementById('weather').textContent = `London: ${data.main.temp}°C`;
  } catch (err) {
    document.getElementById('weather').textContent = 'Failed to load weather data';
  }
}

// To-Do List
function addTask() {
  const taskInput = document.getElementById('task');
  const taskText = taskInput.value;
  if (taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;
    li.onclick = () => li.classList.toggle('completed');
    document.getElementById('tasks').appendChild(li);
    taskInput.value = '';
  }
}

// Chatbot
function chat() {
  const input = document.getElementById('userInput').value.toLowerCase();
  let response = "I don't understand.";
  if (input.includes('hello')) response = 'Hi there!';
  else if (input.includes('how are you')) response = "I'm just code, but I'm fine!";
  else if (input.includes('bye')) response = 'Goodbye!';
  document.getElementById('botResponse').textContent = response;
}
