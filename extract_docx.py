import zipfile
import xml.etree.ElementTree as ET
import sys

def parse_docx(file_path):
    z = zipfile.ZipFile(file_path)
    xml_content = z.read('word/document.xml')
    root = ET.fromstring(xml_content)
    ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    paragraphs = []
    for p in root.findall('.//w:p', ns):
        texts = [node.text for node in p.findall('.//w:t', ns) if node.text]
        if texts:
            paragraphs.append(''.join(texts))
    print('\n'.join(paragraphs))

parse_docx(sys.argv[1])
