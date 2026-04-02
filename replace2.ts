import fs from 'fs';

let content = fs.readFileSync('app/page.tsx', 'utf8');
content = content.replace(/#0a0f16/g, '#1F2933');
fs.writeFileSync('app/page.tsx', content);

console.log('Fixed gradients');
