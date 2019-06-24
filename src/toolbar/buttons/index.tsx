import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBold,
	faItalic,
	faUnderline,
	faStrikethrough,
	faQuoteLeft,
	faCode,
	faListUl,
	faListOl,
} from "@fortawesome/free-solid-svg-icons";

import createButton from "./create-button";
import { RichTextToolbarButtonObject } from "../button.d";

const createIconComp = icon => {
	return () => <FontAwesomeIcon icon={icon} />;
};

// import ButtonColor from "./color";

const buttons: { [k: string]: RichTextToolbarButtonObject } = {
	H1: createButton("BLOCK", "H1", "header-one"),
	H2: createButton("BLOCK", "H2", "header-two"),
	H3: createButton("BLOCK", "H3", "header-three"),
	H4: createButton("BLOCK", "H4", "header-four"),
	H5: createButton("BLOCK", "H5", "header-five"),
	H6: createButton("BLOCK", "H6", "header-six"),
	BOLD: createButton("INLINE", createIconComp(faBold), "BOLD"),
	ITALIC: createButton("INLINE", createIconComp(faItalic), "ITALIC"),
	UNDERLINE: createButton("INLINE", createIconComp(faUnderline), "UNDERLINE"),
	STRIKETHROUGH: createButton(
		"INLINE",
		createIconComp(faStrikethrough),
		"STRIKETHROUGH"
	),
	BLOCKQUOTE: createButton(
		"BLOCK",
		createIconComp(faQuoteLeft),
		"blockquote"
	),
	CODE: createButton("BLOCK", createIconComp(faCode), "code-block"),
	UL: createButton("BLOCK", createIconComp(faListUl), "unordered-list-item"),
	OL: createButton("BLOCK", createIconComp(faListOl), "ordered-list-item"),
	// COLOR: ButtonColor,
};

export default buttons;
