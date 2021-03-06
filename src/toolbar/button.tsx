import * as React from 'react';

import { Context, IRichTextContext } from '../context';
import { ToolbarButtonProps, RichTextToolbarButtonObject } from './button.d';
import toolbarButtons from './buttons';

const ToolbarButton = (props: ToolbarButtonProps) => {
  const context = React.useContext(Context) as IRichTextContext | null;
  const { button } = props;

  // Build button object
  let buttonObj: RichTextToolbarButtonObject | null = null;
  if (typeof button === 'string' && toolbarButtons.hasOwnProperty(button)) {
    buttonObj = toolbarButtons[button];
  } else if (typeof button === 'object') {
    buttonObj = button;
  }
  if (!buttonObj) {
    return null;
  }

  // Render button
  const { label, onToggle, isActive = () => false } = buttonObj;
  return (
    <span
      className={`rich-text-toolbar-button RichEditor-styleButton ${
        isActive(context as IRichTextContext) ? 'active' : ''
      }`}
      onMouseDown={e => {
        e.preventDefault();
        onToggle(context as IRichTextContext);
      }}
    >
      {typeof label === 'string' ? (
        <span>{label}</span>
      ) : (
        React.createElement(label, { context: context as IRichTextContext })
      )}
    </span>
  );
};

export { ToolbarButton };

export default ToolbarButton;
