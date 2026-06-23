const CREATOR_WEBHOOK = "TVŮJ_CREATOR_WEBHOOK";
const EDITOR_WEBHOOK = "TVŮJ_EDITOR_WEBHOOK";

function openCreator() {
  document.getElementById("creatorForm").classList.remove("hidden");
  document.getElementById("editorForm").classList.add("hidden");
}

function openEditor() {
  document.getElementById("editorForm").classList.remove("hidden");
  document.getElementById("creatorForm").classList.add("hidden");
}

/* 🎥 CREATOR */
function sendCreator() {
  fetch(CREATOR_WEBHOOK, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      content:
`🎥 **NEW CREATOR REQUEST**
━━━━━━━━━━━━━━
👤 ${c_name.value}
📸 ${c_ig.value}
📱 ${c_platform.value}
🎬 ${c_style.value}
💰 ${c_budget.value}
💳 ${c_payment.value}
📝 ${c_extra.value}
━━━━━━━━━━━━━━`
    })
  });

  alert("Odesláno 🚀");
}

/* ✂️ EDITOR */
function sendEditor() {
  fetch(EDITOR_WEBHOOK, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      content:
`✂️ **NEW EDITOR REQUEST**
━━━━━━━━━━━━━━
👤 ${e_name.value}
📸 ${e_ig.value}
⚡ ${e_skills.value}
💰 ${e_price.value}
💳 ${e_payment.value}
📁 ${e_portfolio.value}
━━━━━━━━━━━━━━`
    })
  });

  alert("Odesláno 🚀");
}
