import fs from 'fs';

const files = ['app/page.tsx', 'app/layout.tsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  content = content.replace(/bg-\[#0a0f16\]/g, 'bg-[#1F2933]');
  content = content.replace(/bg-\[#05080b\]/g, 'bg-[#151C24]');
  content = content.replace(/text-slate-200/g, 'text-[#F9FAFB]');
  content = content.replace(/text-white/g, 'text-[#F9FAFB]');
  content = content.replace(/amber-500/g, 'teal-600');
  content = content.replace(/amber-600/g, 'teal-700');
  content = content.replace(/amber-700/g, 'teal-800');
  content = content.replace(/amber-800/g, 'teal-900');
  content = content.replace(/amber-900/g, 'teal-950');
  
  fs.writeFileSync(file, content);
});

console.log('Replacement complete');
