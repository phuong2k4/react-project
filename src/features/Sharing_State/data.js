

export function filterItems(items, query) {
    query = query.toLowerCase();
    return items.filter(item =>
      item.title.split(' ').some(word =>
        word.toLowerCase().startsWith(query)
      )
    );
  }
  
  export const foods = [
    {
        id: 1,
        title: "About",
        children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum enim iste molestias temporibus sunt cupiditate recusandae deleniti perferendis nulla, tenetur saepe non sit laudantium aperiam, quidem libero quo repellendus rem!",
        seen: false
    },
    {
        id: 2,
        title: "Poem",
        children: "Enim iste molestias temporibus sunt cupiditate recusandae deleniti perferendis nulla, quidem libero quo repellendus rem!",
        seen: false
    },
    {
        id: 3,
        title: "Sience",
        children: "Ipsum enim iste molestias temporibus sunt cupiditate recusandae deleniti perferendis nulla, tenetur saepe non sit laudantium aperiam, quidem libero quo repellendus rem!",
        seen: false
    }
];