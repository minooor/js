const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const hour = now.getHours();
const min = now.getMinutes();

let ampm = '';
if(hour < 12) {
  ampm = 'a.m.';
} else {
  ampm = 'p.m.';
}

const output = `${year}/${month + 1}/${date % 12} ${hour}:${min}${ampm}`;
document.getElementById('time').textContent = output;