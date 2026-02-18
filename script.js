const riddles = [
  { question: "身穿青衣裳，肚裡水汪汪，生的子兒多，個個黑心腸。(打一水果)", answer: "西瓜" },
  { question: "一物不大，能寫會畫，千言萬語，盡在它下。(打一文具)", answer: "筆" }
];

let currentRiddle = 0;

document.getElementById("riddle").textContent = riddles[currentRiddle].question;

document.getElementById("submit").addEventListener("click", () => {
  const userAnswer = document.getElementById("answer").value.trim();
  const feedback = document.getElementById("feedback");

  if (userAnswer === riddles[currentRiddle].answer) {
    feedback.textContent = "答對了！🎉";
  } else {
    feedback.textContent = "再想想～";
  }
});