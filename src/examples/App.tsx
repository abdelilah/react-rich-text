import * as React from "react";
import { render } from "react-dom";

import "./style.scss";
import RichText from "../index";
import { Modifier, EditorState } from "draft-js";

const Examples = () => {
	const [value, setValue] = React.useState(null);

	return (
		<div>
			<h1>React Rich Text</h1>

			<RichText
				placeholder={"Enter some text"}
				value={value}
				onChange={value => setValue(value)}
				buttons={[
					"H1",
					"H2",
					"H3",
					"BOLD",
					"ITALIC",
					"UNDERLINE",
					"STRIKETHROUGH",
					"BLOCKQUOTE",
					"UL",
					{
						label: "Lorem Ipsum",
						onToggle: context => {
							const { editorState, onChange } = context;
							const contentState = Modifier.insertText(
								editorState.getCurrentContent(),
								editorState.getSelection(),
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue ligula eget arcu egestas bibendum.\n"
							);

							onChange(
								EditorState.push(
									editorState,
									contentState,
									"insert-characters"
								)
							);
						},
					},
				]}
			/>

			<pre className="debug">{value}</pre>
		</div>
	);
};

render(<Examples />, document.getElementById("app"));
