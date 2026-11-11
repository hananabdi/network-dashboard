
// NETWORK DASHBOARD - JAVASCRIPT

// Refresh dashboard message
function refreshDashboard() {
    const button = document.querySelector(".small-button");

    if (button) {
        button.textContent = "✓ Updated!";
        setTimeout(() => {
            button.textContent = "↻ Refresh";
        }, 2000);
    }
}

// Simulated network diagnostic tests
const diagnosticButton = document.getElementById("runDiagnostics");

if (diagnosticButton) {
    diagnosticButton.addEventListener("click", function () {
        const results = document.getElementById("diagnosticResults");

        diagnosticButton.disabled = true;
        diagnosticButton.textContent = "Running tests...";

        results.innerHTML = `
            <p class="loading-text">Checking sample network information...</p>
        `;

        setTimeout(() => {
            const tests = [
                {
                    name: "Connection Check",
                    status: "Passed",
                    explanation: "The sample connection is available."
                },
                {
                    name: "DNS Resolution",
                    status: "Passed",
                    explanation: "The sample DNS lookup was successful."
                },
                {
                    name: "Network Latency",
                    status: "Passed",
                    explanation: "Example response time: 24 ms."
                },
                {
                    name: "Network Stability",
                    status: "Passed",
                    explanation: "No simulated connection problems detected."
                }
            ];

            let output = `
                <h3>Diagnostic Results</h3>
                <p class="muted">
                    Demonstration results only. No real network tests were performed.
                </p>
            `;

            tests.forEach(test => {
                output += `
                    <div class="result-row">
                        <div>
                            <strong>${test.name}</strong>
                            <p class="result-explanation">
                                ${test.explanation}
                            </p>
                        </div>
                        <span class="result-pass">${test.status}</span>
                    </div>
                `;
            });

            results.innerHTML = output;

            diagnosticButton.disabled = false;
            diagnosticButton.textContent = "↻ Run Again";
        }, 1500);
    });
}
