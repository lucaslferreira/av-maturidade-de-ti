const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'script.js');
let content = fs.readFileSync(file, 'utf8');
const regex = /function formatNivelClass\(nivel\) \{[\s\S]*?\/\/ Função para calcular score/;
const replacement = `function formatNivelClass(nivel) {
    return nivel
        .toLowerCase()
        .replace(/ã/g, 'a')
        .replace(/á/g, 'a')
        .replace(/â/g, 'a')
        .replace(/é/g, 'e')
        .replace(/ê/g, 'e')
        .replace(/í/g, 'i')
        .replace(/ó/g, 'o')
        .replace(/ô/g, 'o')
        .replace(/ú/g, 'u')
        .replace(/ç/g, 'c')
        .replace(/\s+/g, '-');
}

// Função para calcular score`;
const newContent = content.replace(regex, replacement);
if (newContent === content) {
    throw new Error('No replacement made for formatNivelClass');
}
fs.writeFileSync(file, newContent, 'utf8');
console.log('fixed');
