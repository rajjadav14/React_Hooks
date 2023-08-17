export const insertItem = function (tree: any, folderId: any, item: any) {
  if (tree.id === folderId) {
    console.log("in tree");
    tree.items.unshift({
      id: new Date().getTime(),
      name: item,
      items: [],
    });

    return tree;
  }

  let latestNode = [];
  latestNode = tree.items.map((ob: any) => {
    return insertItem(ob, folderId, item);
  });
  return { ...tree, items: latestNode };
};
