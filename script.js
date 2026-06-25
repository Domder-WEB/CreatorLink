
// =========================
// 🔗 DISCORD WEBHOOKS
// =========================

const CREATOR_WEBHOOK = "https://discord.com/api/webhooks/1519068893031829566/h0ptVI3XlRGcqnbGiNecVojBvq0g0bj1LVnTgEJ_12-DhRXquEAnEohssifpNjmnW2OL";
const EDITOR_WEBHOOK  = "https://discord.com/api/webhooks/1519059624798458020/oaPJD_BUV-n3cVfXPTrpXCz9TgaZ607iOJysFrAJ9UJ8ZH8WF92aN6MXEfE_c_5afyb-";


// =========================
// 🎛 UI TOGGLES
// =========================

function openCreator() {
  document.getElementById("creatorForm").classList.remove("hidden");
  document.getElementById("editorForm").classList.add("hidden");
}

function openEditor() {
  document.getElementById("editorForm").classList.remove("hidden");
  document.getElementById("creatorForm").classList.add("hidden");
}


// =========================
// 🧠 VALIDATION
// =========================

function isEmpty(v) {
  return !v || v.trim().length === 0;
}


// =========================
// 🔔 NOTIFICATIONS (simple UX)
// =========================

function notify(msg) {
  alert(msg);
}


// =========================
// 🎥 CREATOR FORM
// =========================

async function sendCreator() {

  const name = document.getElementById("c_name").value;
  const ig = document.getElementById("c_ig").value;
  const platform = document.getElementById("c_platform").value;
  const style = document.getElementById("c_style").value;
  const budget = document.getElementById("c_budget").value;
  const payment = document.getElementById("c_payment").value;
  const extra = document.getElementById("c_extra").value;

  if (isEmpty(name) || isEmpty(style)) {
    notify("⚠️ Please fill required fields (Name + Style)");
    return;
  }

  const payload = {
    content:
`🎥 **NEW CREATOR REQUEST**
━━━━━━━━━━━━━━━━━━
👤 Name: ${name}
📸 Instagram: ${ig}
📱 Platform: ${platform}

🎬 Style:
${style}

💰 Budget:
${budget}

💳 Payment model:
${payment}

📝 Extra:
${extra}
━━━━━━━━━━━━━━━━━━`
  };

  try {
    await fetch(CREATOR_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    notify("✅ Request sent successfully!");

    document.getElementById("creatorForm").reset();

  } catch (err) {
    console.error(err);
    notify("❌ Failed to send request");
  }
}


// =========================
// ✂️ EDITOR FORM
// =========================

async function sendEditor() {

  const name = document.getElementById("e_name").value;
  const ig = document.getElementById("e_ig").value;
  const skills = document.getElementById("e_skills").value;
  const price = document.getElementById("e_price").value;
  const payment = document.getElementById("e_payment").value;
  const portfolio = document.getElementById("e_portfolio").value;

  if (isEmpty(name) || isEmpty(skills)) {
    notify("⚠️ Please fill required fields (Name + Skills)");
    return;
  }

  const payload = {
    content:
`✂️ **NEW EDITOR APPLICATION**
━━━━━━━━━━━━━━━━━━
👤 Name: ${name}
📸 Instagram: ${ig}

⚡ Skills:
${skills}

💰 Price:
${price}

💳 Payment:
${payment}

📁 Portfolio:
${portfolio}
━━━━━━━━━━━━━━━━━━`
  };

  try {
    await fetch(EDITOR_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    notify("✅ Application sent successfully!");

    document.getElementById("editorForm").reset();

  } catch (err) {
    console.error(err);
    notify("❌ Failed to send application");
  }
}
