const CREATOR_WEBHOOK = "https://discord.com/api/webhooks/1519068893031829566/h0ptVI3XlRGcqnbGiNecVojBvq0g0bj1LVnTgEJ_12-DhRXquEAnEohssifpNjmnW2OL";
const EDITOR_WEBHOOK = "https://discord.com/api/webhooks/1519059624798458020/oaPJD_BUV-n3cVfXPTrpXCz9TgaZ607iOJysFrAJ9UJ8ZH8WF92aN6MXEfE_c_5afyb-";

function openCreator() {
  document.getElementById("creatorForm").classList.remove("hidden");
  document.getElementById("editorForm").classList.add("hidden");
}

function openEditor() {
  document.getElementById("editorForm").classList.remove("hidden");
  document.getElementById("creatorForm").classList.add("hidden");
}

function sendCreator() {
  fetch(CREATOR_WEBHOOK, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      content:
`🎥 CreatorLink Request
👤 ${c_name.value}
📸 ${c_ig.value}
🎬 ${c_style.value}
💰 ${c_budget.value}
`
    })
  });
}

function sendEditor() {
  fetch(EDITOR_WEBHOOK, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      content:
`✂️ EditorLink Request
👤 ${e_name.value}
⚡ ${e_skills.value}
💰 ${e_price.value}
`
    })
  });
}
