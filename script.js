const CREATOR_WEBHOOK = "CREATOR_WEBHOOK";
const EDITOR_WEBHOOK = "EDITOR_WEBHOOK";

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
