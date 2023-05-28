const content = {
  blocks: [
    {
      key: "c4pie",
      text: "C6H12O6",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 1,
          length: 1,
          style: "SUBSCRIPT",
        },
        {
          offset: 3,
          length: 2,
          style: "SUBSCRIPT",
        },
        {
          offset: 6,
          length: 1,
          style: "SUBSCRIPT",
        },
      ],
      entityRanges: [],
      data: {},
    },
  ],
  entityMap: {},
};

const textMetaData = content.blocks[0];

let text = textMetaData.text;

console.log("Text: ", text);

const styleRanges = textMetaData.inlineStyleRanges;

console.log("styleRanges: ", styleRanges);


