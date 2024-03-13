const axios = require('axios')

async function Api() {
    const response = await axios.get("https://cdn.lordicon.com/lordicon.js")
    return response.data
}

test('Verificar dados obtidos da API', async () => {
    const dados = await Api()
    expect(dados).toBeDefined();
})