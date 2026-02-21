const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

const targetDirs = [path.join(__dirname, 'app'), path.join(__dirname, 'components')];

let count = 0;
targetDirs.forEach(dir => {
  walk(dir, (file) => {
    if (file.endsWith('.tsx') || file.endsWith('.css')) {
      let content = fs.readFileSync(file, 'utf8');
      let changed = false;
      if (content.includes('border-white/')) {
        content = content.replace(/border-white\//g, 'border-luxury-border/');
        changed = true;
      }
      if (content.includes('divide-white/')) {
        content = content.replace(/divide-white\//g, 'divide-luxury-border/');
        changed = true;
      }
      if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
        count++;
      }
    }
  });
});

console.log(`Finished updating borders in ${count} files.`);
