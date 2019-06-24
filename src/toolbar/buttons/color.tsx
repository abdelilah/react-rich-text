import * as React from "react";
import { Modifier, EditorState, RichUtils } from "draft-js";
import {
	RichTextToolbarButtonObject,
	RichTextToolbarButtonComponentProps,
} from "../button.d";

const colors = [
	"red",
	"#f44336",
	"#e91e63",
	"#9c27b0",
	"#673ab7",
	"#3f51b5",
	"#2196f3",
	"#03a9f4",
	"#00bcd4",
	"#009688",
	"#4caf50",
	"#ffeb3b",
	"#9e9e9e",
	"#607d8b",
	"#000000",
	"#ffffff",
];

const ColorPicker = (props: RichTextToolbarButtonComponentProps) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const pickerRef = React.useRef(null);

	React.useEffect(() => {
		const blurListener = e => {
			if (isOpen === true && !pickerRef.current.contains(e.target)) {
				setIsOpen(false);
			}
		};
		document.addEventListener("click", blurListener);

		return () => {
			document.removeEventListener("click", blurListener);
		};
	}, [isOpen]);

	return (
		<React.Fragment>
			<span
				className={
					"rich-text-color-picker-button" + (isOpen ? " active" : "")
				}
				onClick={e => {
					setIsOpen(!isOpen);
				}}
			>
				COLOR PICKER
			</span>

			<div
				className="rich-text-color-picker"
				ref={pickerRef}
				style={{ display: isOpen ? "block" : "none" }}
			>
				{colors.map((color, cIndex) => (
					<a
						href="#"
						key={`color-${cIndex}`}
						className="button-color"
						style={{ background: color }}
						onClick={e => {
							e.preventDefault();

							const { editorState } = props.context;
							const selection = editorState.getSelection();

							const nextContentState = colors.reduce(
								(contentState, color) => {
									return Modifier.removeInlineStyle(
										contentState,
										selection,
										color
									);
								},
								editorState.getCurrentContent()
							);

							let nextEditorState = EditorState.push(
								editorState,
								nextContentState,
								"change-inline-style"
							);

							const currentStyle = editorState.getCurrentInlineStyle();

							// Unset style override for current color.
							if (selection.isCollapsed()) {
								nextEditorState = currentStyle.reduce(
									(state, color) => {
										return RichUtils.toggleInlineStyle(
											state,
											color
										);
									},
									nextEditorState
								);
							}

							// If the color is being toggled on, apply it.
							if (!currentStyle.has(color)) {
								nextEditorState = RichUtils.toggleInlineStyle(
									nextEditorState,
									color
								);
							}

							props.context.onChange(nextEditorState);

							console.log("SELECTED", color);
						}}
					/>
				))}
			</div>
		</React.Fragment>
	);
};

const ButtonColor: RichTextToolbarButtonObject = {
	label: ColorPicker,
	onToggle: () => {},
};

export default ButtonColor;
