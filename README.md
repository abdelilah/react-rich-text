## ! This is a work in progress !

react-rich-text is a simple and ready to use WYSIWYG text editor based on draft-js.

# Installation

```shell
npm install --save react-rich-text
```


# Usage

```javascript
<RichText
	placeholder={'Enter some text'}
	value={value}
	onChange={(value) => console.log('New value', value)}
	buttons={[
		'H1',
		'H2',
		'H3',
		'BOLD',
		'ITALIC',
		'UNDERLINE',
		'STRIKETHROUGH',
		'BLOCKQUOTE',
		'UL',
		// Custom button
		{
			label: 'Lorem Ipsum',
			onToggle: context => {
				const { editorState, onChange } = context;
				const contentState = Modifier.insertText(
				editorState.getCurrentContent(),
				editorState.getSelection(),
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue ligula eget arcu egestas bibendum.\n',
				);

				onChange(EditorState.push(editorState, contentState, 'insert-characters'));
			},
		},
	]}
/>
```

# Documentation

Documentation is generated with typedoc can be found in the [./docs](/docs) folder