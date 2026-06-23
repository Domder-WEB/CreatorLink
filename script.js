const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1519059624798458020/oaPJD_BUV-n3cVfXPTrpXCz9TgaZ607iOJysFrAJ9UJ8ZH8WF92aN6MXEfE_c_5afyb-";

// SHOW FORMS
function showCreator() {
  document.getElementById("creatorForm").classList.remove("hidden");
  document.getElementById("editorForm").classList.add("hidden");
}

function showEditor() {
  document.getElementById("editorForm").classList.remove("hidden");
  document.getElementById("creatorForm").classList.add("hidden");
}

// CREATOR SEND
function sendCreator() {

  const data = {
    name: c_name.value,
    ig: c_ig.value,
    platform: c_platform.value,
    style: c_style.value,
    budget: c_budget.value,
    payment: c_payment.value,
    extra: c_extra.value
  };

  fetch(DISCORD_WEBHOOK, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      content: `🎥 NOVÁ ZAKÁZKA (TVŮRCE)\n${JSON.stringify(data, null, 2)}`
    })
  });

  alert("Odesláno do Discordu!");
}

// EDITOR SEND
function sendEditor() {

  const data = {
    name: e_name.value,
    ig: e_ig.value,
    skills: e_skills.value,
    price: e_price.value,
    payment: e_payment.value,
    portfolio: e_portfolio.value
  };

  fetch(DISCORD_WEBHOOK, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      content: `✂️ NOVÝ EDITOR\n${JSON.stringify(data, null, 2)}`
    })
  });

  alert("Odesláno do Discordu!");
}
