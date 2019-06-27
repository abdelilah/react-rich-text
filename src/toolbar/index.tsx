import * as React from 'react';

import { ToolbarButton } from './button';
import { RichTextToolbarButton } from './button.d';

interface IToolbarProps {
  buttons?: RichTextToolbarButton[];
}

const Toolbar = (props: IToolbarProps): JSX.Element | null => {
  const { buttons = [] } = props;

  return buttons.length > 0 ? (
    <div className="rich-text-toolbar">
      {buttons.map((button, btnIndex) => {
        return <ToolbarButton key={`button-${btnIndex}`} button={button} />;
      })}
    </div>
  ) : null;
};

export { IToolbarProps, Toolbar };
export default Toolbar;
