"""Build a small, explicit public site; source documents are never copied."""
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / '_site'
PUBLIC_FILES = [
    'index.html', 'assets/css/profile.css', 'assets/js/profile.js',
    'images/avatar.png', '404.html', 'robots.txt', 'sitemap.xml',
    'about/index.html', 'research/index.html', 'publications/index.html',
    'cv/index.html', 'talks/index.html', 'teaching/index.html',
]

def build():
    if OUTPUT.exists():
        shutil.rmtree(OUTPUT)
    for name in PUBLIC_FILES:
        source = ROOT / name
        if not source.is_file():
            raise FileNotFoundError(f'Missing public asset: {name}')
        destination = OUTPUT / name
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, destination)
    print(f'Built {len(PUBLIC_FILES)} public files in {OUTPUT}')

if __name__ == '__main__':
    build()
