//https://rapidapi.com/truongvuhung102/api/chatgpt-best-price/
export const urlApiChat = 'https://chatgpt-best-price.p.rapidapi.com/v1/chat/completions';

export let getOptions = (textPrompt) => {
    return {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'e76c1e965dmsh65c7514abaf1d2bp14f042jsned57669d1b0e',
            'X-RapidAPI-Host': 'chatgpt-best-price.p.rapidapi.com'
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: textPrompt,
                }
            ]
        }),
    }
};
