import { RichTextContext } from "../context";

interface RichTextToolbarButtonComponentProps {
	context: RichTextContext;
}
type ReactComponent = (
	props: RichTextToolbarButtonComponentProps
) => JSX.Element;

type RichTextToolbarButtonItem =
	| "H1"
	| "H2"
	| "H3"
	| "H4"
	| "H5"
	| "H6"
	| "BOLD"
	| "ITALIC"
	| "UNDERLINE"
	| "STRIKETHROUGH"
	| "UL"
	| "OL"
	| "BLOCKQUOTE"
	| "CODE"
	| "LINK"
	| "COLOR"
	| "IMAGE";

interface RichTextToolbarButtonObject {
	label: string | ReactComponent;
	onToggle(context: RichTextContext): any;
	isActive?(context: RichTextContext): boolean;
}

type RichTextToolbarButton =
	| RichTextToolbarButtonObject
	| RichTextToolbarButtonItem;

interface ToolbarButtonProps {
	button: RichTextToolbarButton;
}
