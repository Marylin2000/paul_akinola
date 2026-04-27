'use client';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { ListItemNode, ListNode } from '@lexical/list';
import { CodeNode } from '@lexical/code';
import { TableNode, TableCellNode, TableRowNode } from '@lexical/table';
import { LinkNode } from '@lexical/link';
import { FORMAT_TEXT_COMMAND, FORMAT_ELEMENT_COMMAND } from 'lexical';

const theme = {
  paragraph: 'mb-4',
  text: {
    bold: 'font-bold',
    italic: 'italic',
    underline: 'underline',
  },
  heading: {
    h1: 'text-3xl font-bold font-serif mb-4',
    h2: 'text-2xl font-bold font-serif mb-4 mt-6',
    h3: 'text-xl font-bold font-serif mb-3 mt-4',
  },
  list: {
    ul: 'list-disc pl-5 mb-4',
    ol: 'list-decimal pl-5 mb-4',
    listitem: 'mb-1',
  },
  quote: 'border-l-4 border-primary pl-4 italic text-foreground/80 mb-4',
};

function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();

  return (
    <div className="flex flex-wrap items-center gap-2 border-b border-foreground/10 pb-3 mb-4">
      <button 
        type="button" 
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')} 
        className="p-2 border border-foreground/20 hover:bg-foreground/5 font-bold w-10 transition-colors"
      >
        B
      </button>
      <button 
        type="button" 
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')} 
        className="p-2 border border-foreground/20 hover:bg-foreground/5 italic w-10 transition-colors"
      >
        I
      </button>
      <button 
        type="button" 
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')} 
        className="p-2 border border-foreground/20 hover:bg-foreground/5 underline w-10 transition-colors"
      >
        U
      </button>
      <div className="w-px h-6 bg-foreground/20 mx-2" />
      <button 
        type="button" 
        onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left')} 
        className="px-3 py-2 border border-foreground/20 hover:bg-foreground/5 transition-colors text-sm"
      >
        Left
      </button>
      <button 
        type="button" 
        onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center')} 
        className="px-3 py-2 border border-foreground/20 hover:bg-foreground/5 transition-colors text-sm"
      >
        Center
      </button>
    </div>
  );
}

export function LexicalEditor({ initialJson, onChange }: { initialJson: string; onChange: (json: string) => void }) {
  const initialConfig = {
    namespace: 'ArticleEditor',
    theme,
    onError(error: Error) {
      console.error('Lexical Error:', error);
    },
    nodes: [
      HeadingNode,
      QuoteNode,
      ListItemNode,
      ListNode,
      CodeNode,
      TableNode,
      TableCellNode,
      TableRowNode,
      LinkNode,
    ],
    editorState: initialJson && initialJson !== '{}' && initialJson !== '""' ? initialJson : undefined,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="relative glass border border-foreground/10 bg-foreground/5 p-4 focus-within:border-primary/50 transition-colors">
        <ToolbarPlugin />
        <div className="relative min-h-[300px]">
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="outline-none min-h-[300px] text-foreground text-sm leading-relaxed" />
            }
            placeholder={
              <div className="absolute top-0 left-0 text-foreground/30 pointer-events-none mt-[64px]">
                Start writing your article...
              </div>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
        </div>
        <HistoryPlugin />
        <OnChangePlugin onChange={(editorState) => {
          onChange(JSON.stringify(editorState.toJSON()));
        }} />
      </div>
    </LexicalComposer>
  );
}
