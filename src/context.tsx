import * as React from "react";
import { EditorState } from "draft-js";

interface RichTextContext {
	editorState: EditorState;
	value: string;
	setEditorState(editorState: EditorState): any;
	onChange(editorState: EditorState): any;
}

const Context = React.createContext(null);

export { Context, RichTextContext };
