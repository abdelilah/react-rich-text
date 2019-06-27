import * as React from 'react';
import { EditorState } from 'draft-js';

interface IRichTextContext {
  editorState: EditorState;
  value: string;
  setEditorState(editorState: EditorState): any;
  onChange(editorState: EditorState): any;
}

const Context = React.createContext(null);

export { Context, IRichTextContext };
