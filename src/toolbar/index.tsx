import * as React from "react";

import { ToolbarButton } from "./button";
import { RichTextToolbarButton } from "./button.d";

interface ToolbarProps {
	buttons?: RichTextToolbarButton[];
}

const Toolbar = (props: ToolbarProps) => {
	const { buttons = [] } = props;

	return (
		buttons.length > 0 && (
			<div className="rich-text-toolbar">
				{buttons.map((button, btnIndex) => {
					return (
						<ToolbarButton
							key={`button-${btnIndex}`}
							button={button}
						/>
					);
				})}
			</div>
		)
	);
};

export { ToolbarProps, Toolbar };
export default Toolbar;
