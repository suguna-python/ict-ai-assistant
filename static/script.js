
function sendMessage() {

    let input = document.getElementById("userQuestion");
    let question = input.value.trim();

    if (question === "") {
        alert("Please enter your ICT question.");
        return;
    }

    let searchQuestion = question.toLowerCase();

    let answer = "Sorry, I couldn't find a suitable answer. Please try another ICT question or contact CCC.";

    // Greeting response
    if (searchQuestion.includes("hello") || searchQuestion === "hi") {

        answer = "Hello! Welcome to your ICT Assistant. How can I help you?";

    } else {

        // Search for the best matching FAQ
        let matchedFAQ = null;
        let longestMatch = 0;

        for (let faq of ictFAQs) {

            for (let keyword of faq.keywords) {

                if (
                    searchQuestion.includes(keyword.toLowerCase()) &&
                    keyword.length > longestMatch
                ) {
                    matchedFAQ = faq;
                    longestMatch = keyword.length;
                }

            }

        }

        if (matchedFAQ !== null) {
            answer = matchedFAQ.answer;
        }

    }

    // Display chat messages
    let chatHistory = document.getElementById("chatHistory");

    let userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = "You: " + question;

    let botMessage = document.createElement("div");
    botMessage.className = "bot-message";
    botMessage.textContent = "ICT Assistant: " + answer;

    chatHistory.appendChild(userMessage);
    chatHistory.appendChild(botMessage);

    input.value = "";
}
