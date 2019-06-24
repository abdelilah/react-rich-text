import { RichTextToolbarButtonObject } from "../button.d";
import { DraftInlineStyleType, DraftBlockType, RichUtils } from "draft-js";

type RichTextToolbarButtonType = "BLOCK" | "INLINE";

type ReactComponent = () => JSX.Element;

const createButton = (
	type: RichTextToolbarButtonType,
	label: string | ReactComponent,
	buttonType: DraftBlockType | DraftInlineStyleType
): RichTextToolbarButtonObject => {
	return {
		label,
		isActive: context => {
			if (type === "BLOCK") {
				const selection = context.editorState.getSelection();
				const blockType = context.editorState
					.getCurrentContent()
					.getBlockForKey(selection.getStartKey())
					.getType();

				return blockType === buttonType;
			} else {
				return context.editorState
					.getCurrentInlineStyle()
					.has(buttonType);
			}
		},
		onToggle: context => {
			const editorState =
				type === "BLOCK"
					? RichUtils.toggleBlockType(context.editorState, buttonType)
					: RichUtils.toggleInlineStyle(
							context.editorState,
							buttonType
					  );
			context.onChange(editorState);
		},
	};
};

export default createButton;
