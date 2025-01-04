document.getElementById("submitBtn").addEventListener("click", function () {
  const form = document.getElementById("quizForm");
  const formData = new FormData(form);

  // 初始化得分
  const scores = {
    阳虚质: 0,
    湿热质: 0,
    气虚质: 0,
    // 可扩展其他体质
  };

  // 统计得分
  for (let [key, value] of formData.entries()) {
    scores[value] += 1;
  }

  // 显示结果
  const resultSection = document.getElementById("resultSection");
  const resultContent = document.getElementById("resultContent");

  let resultHTML = "<ul>";
  for (let type in scores) {
    if (scores[type] > 0) {
      resultHTML += `<li><strong>${type}</strong>: ${scores[type]} 分</li>`;
    }
  }
  resultHTML += "</ul>";

  resultContent.innerHTML = resultHTML;
  resultSection.style.display = "block";
});
