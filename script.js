const checkBtn = document.getElementById("check-health");
const output = document.getElementById("health-output");
const apiInput = document.getElementById("api-base");

async function checkHealth() {
  const base = apiInput.value.trim().replace(/\/+$/, "");
  if (!base) {
    output.textContent = "Please provide a valid API base URL.";
    return;
  }

  const url = `${base}/health`;
  output.textContent = `Requesting ${url} ...`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const res = await fetch(url, { signal: controller.signal });
    const body = await res.text();
    output.textContent = [
      `Status: ${res.status}`,
      `URL: ${url}`,
      "",
      "Response:",
      body || "(empty)",
    ].join("\n");
  } catch (err) {
    output.textContent = [
      `Failed to request ${url}`,
      "",
      `Error: ${err && err.message ? err.message : String(err)}`,
      "Tip: confirm DNS, HTTPS certificate, CORS, and backend health route.",
    ].join("\n");
  } finally {
    clearTimeout(timeout);
  }
}

if (checkBtn) {
  checkBtn.addEventListener("click", checkHealth);
}

const revealNodes = [...document.querySelectorAll(".reveal")];
if (revealNodes.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 },
  );

  revealNodes.forEach((node, idx) => {
    node.style.transitionDelay = `${Math.min(idx * 90, 300)}ms`;
    observer.observe(node);
  });
}
