import OpenAI from "openai";

const openai = new OpenAI({ apiKey: 'sk-proj-uMRNuOzE9RzqwJsSNduZT3BlbkFJNqGgCL6CLQXyh2HAZId6', dangerouslyAllowBrowser: true});

async function callGPT4o({ messages }) {
    const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: messages,
        stream: true,
    });

    return completion
}

export { callGPT4o };