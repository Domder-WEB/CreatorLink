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

/* CREATOR */
function sendCreator() {
  fetch(CREATOR_WEBHOOK, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      content:
`🎥 CreatorLink – Creator Request
────────────────
👤 Name: ${c_name.value}
📸 IG: ${c_ig.value}
📱 Platform: ${c_platform.value}
🎬 Style: ${c_style.value}
💰 Budget: ${c_budget.value}
💳 Payment: ${c_payment.value}
📝 Notes: ${c_extra.value}
────────────────`
    })
  });

  alert("Odesláno");
}

/* EDITOR */
function sendEditor() {
  fetch(EDITOR_WEBHOOK, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      content:
`✂️ CreatorLink – Editor Request
────────────────
👤 Name: ${e_name.value}
📸 IG: ${e_ig.value}
⚡ Skills: ${e_skills.value}
💰 Price: ${e_price.value}
💳 Payment: ${e_payment.value}
📁 Portfolio: ${e_portfolio.value}
────────────────`
    })
  });

  alert("Odesláno");
}
