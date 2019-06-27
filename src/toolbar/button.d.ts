import { IRichTextContext } from '../context';

interface RichTextToolbarButtonComponentProps {
  context: IRichTextContext;
}
type ReactComponent = (props: RichTextToolbarButtonComponentProps) => JSX.Element;

type RichTextToolbarButtonItem =
  | 'H1'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'H5'
  | 'H6'
  | 'BOLD'
  | 'ITALIC'
  | 'UNDERLINE'
  | 'STRIKETHROUGH'
  | 'UL'
  | 'OL'
  | 'BLOCKQUOTE'
  | 'CODE'
  | 'LINK'
  | 'COLOR'
  | 'IMAGE';

interface RichTextToolbarButtonObject {
  label: string | ReactComponent;
  onToggle(context: IRichTextContext): any;
  isActive?(context: IRichTextContext): boolean;
}

type RichTextToolbarButton = RichTextToolbarButtonObject | RichTextToolbarButtonItem;

interface ToolbarButtonProps {
  button: RichTextToolbarButton;
}
