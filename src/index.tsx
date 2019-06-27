import * as React from 'react';
import { Editor, EditorState, convertFromRaw, convertToRaw } from 'draft-js';

// @ts-ignore
import { draftToMarkdown, markdownToDraft } from 'markdown-draft-js';

import { Toolbar } from './toolbar';
import { Context, IRichTextContext } from './context';
import { RichTextToolbarButton } from './toolbar/button.d';

interface IRichTextProps {
  value?: string | null;
  buttons?: RichTextToolbarButton[];
  placeholder?: string;
  onChange?(value: string): any;
}

const RichText = (props: IRichTextProps) => {
  const [editorState, setEditorState] = React.useState(
    EditorState.createWithContent(convertFromRaw(markdownToDraft(props.value || ''))),
  );
  const [focused, setFocused] = React.useState(false);

  const {
    buttons = [
      'H1',
      'H2',
      'H3',
      'BOLD',
      'ITALIC',
      'UNDERLINE',
      'STRIKETHROUGH',
      'BLOCKQUOTE',
      'UL',
    ] as RichTextToolbarButton[],
    onChange = () => {},
    placeholder,
  } = props;

  const context = {
    editorState,
    setEditorState,
    value: props.value,
    onChange: editorState => {
      setEditorState(editorState);
      onChange(draftToMarkdown(convertToRaw(editorState.getCurrentContent())));
    },
  } as IRichTextContext;

  return (
    <Context.Provider value={context as any}>
      <div
        className={`rich-text-editor ${focused ? 'active' : ''} ${
          editorState.getCurrentContent().hasText() ? '' : 'empty'
        }`}
      >
        <Toolbar buttons={buttons} />
        <Editor
          editorState={editorState}
          onChange={context.onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          // customStyleMap={{
          // 	red: {
          // 		color: "red",
          // 		fontWeight: "bold",
          // 	},
          // }}
          // customStyleFn={(orderedSet, contentBlock) => {
          // 	console.log("customStyleFn", orderedSet, contentBlock);

          // 	return orderedSet;
          // }}
        />
      </div>
    </Context.Provider>
  );
};

export { RichText, IRichTextProps as RichTextProps };
export default RichText;
