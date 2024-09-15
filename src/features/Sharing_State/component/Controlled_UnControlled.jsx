import { useState } from 'react';
import { foods, filterItems } from '../data.js';

export default function FilterableList() {
  const [query, setQuery] = useState('');
  const result = filterItems(foods, query)
  function handleChange(e) {
    setQuery(e.target.value);
  }
  
  return (
    <>
      <SearchBar query={query} onChange={handleChange} />
      <hr />
      <List items={result} />
    </>
  );
}

function SearchBar({query, onChange}) {
  return (
    <label>
      Search:{' '}
      <input
        value={query}
        onChange={onChange}
      />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.title}</td>
            <td>{food.children}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}