
// ==========================
// 🔗 DISCORD WEBHOOKS
// ==========================

const CREATOR_WEBHOOK = "YOUR_CREATOR_WEBHOOK";
const EDITOR_WEBHOOK  = "YOUR_EDITOR_WEBHOOK";


// ==========================
// 🎛️ FORM TOGGLING
// ==========================

function openCreator() {
  document.getElementById("creatorForm").classList.remove("hidden");
  document.getElementById("editorForm").classList.add("hidden");
}

function openEditor() {
  document.getElementById("editorForm").classList.remove("hidden");
  document.getElementById("creatorForm").classList.add("hidden");
}


// ==========================
// 🧠 HELPERS
// ==========================

function isEmpty(value) {
  return !value || value.trim().length === 0;
}

function notify(message) {
  alert(message); // jednoduchý UX feedback (můžeš později vylepšit toastem)
}


// ==========================
// 🎥 CREATOR SUBMIT
// ==========================

async function sendCreator() {

  const name = document.getElementById("c_name").value;
  const ig = document.getElementById("c_ig").value;
  const platform = document.getElementById("c_platform").value;
  const style = document.getElementById("c_style").value;
  const budget = document.getElementById("c_budget").value;
  const payment = document.getElementById("c_payment").value;
  const extra = document.getElementById("c_extra").value;

  // validation
  if (isEmpty(name) || isEmpty(style)) {
    notify("Please fill required fields (Name + Style)");
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

📝 Extra info:
${extra}
━━━━━━━━━━━━━━━━━━`
  };

  try {
    await fetch(CREATOR_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    notify("Request sent successfully 🚀");

    document.getElementById("creatorForm").reset?.();

  } catch (err) {
    notify("Error sending request ❌");
    console.error(err);
  }
}


// ==========================
// ✂️ EDITOR SUBMIT
// ==========================

async function sendEditor() {

  const name = document.getElementById("e_name").value;
  const ig = document.getElementById("e_ig").value;
  const skills = document.getElementById("e_skills").value;
  const price = document.getElementById("e_price").value;
  const payment = document.getElementById("e_payment").value;
  const portfolio = document.getElementById("e_portfolio").value;

  // validation
  if (isEmpty(name) || isEmpty(skills)) {
    notify("Please fill required fields (Name + Skills)");
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

💳 Payment model:
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

    notify("Application sent successfully 🚀");

    document.getElementById("editorForm").reset?.();

  } catch (err) {
    notify("Error sending application ❌");
    console.error(err);
  }
}
