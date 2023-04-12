const today = new Date();
const startOfYear = new Date(today.getFullYear(), 0, 1);
const delta = (today - startOfYear) / (1000 * 60 * 60 * 24);
const daysPassed = Math.floor(delta) + 1;
const sumOfDays = (daysPassed * (daysPassed + 1)) / 2;
const dailyContribution = daysPassed;
const totalSavingsAmount = sumOfDays;
const dayOfWeek = today.toLocaleString("en-US", { weekday: "long" });

document.getElementById("dayOfWeek").textContent = dayOfWeek;
document.getElementById("daysPassed").textContent = daysPassed;
document.getElementById("sumOfDays").textContent = sumOfDays;
document.getElementById("dailyContribution").textContent = dailyContribution;
document.getElementById("totalSavingsAmount").textContent = totalSavingsAmount;
