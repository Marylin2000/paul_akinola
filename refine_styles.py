import os
import glob
import re

directories = ['src/components/home', 'src/components/ui']

def refine_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Apply organic warm palette
    content = content.replace('slate-', 'stone-')
    
    # Add editorial typography to headings
    content = re.sub(r'(<h[1-6][^>]*className="[^"]*)', r'\1 font-serif', content)
    
    # Remove any generic shadows or borders if necessary
    # (Optional based on design, but stone handles the warmth)
    
    with open(filepath, 'w') as f:
        f.write(content)

for directory in directories:
    for filepath in glob.glob(os.path.join(directory, '*.tsx')):
        refine_file(filepath)

print("Applied 'stone' palette and 'font-serif' to all components.")
