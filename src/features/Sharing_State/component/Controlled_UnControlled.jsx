import { useState } from 'react';
import { foods, filterItems } from '../data.js';
import "./Controlled_Uncontrolled.scss"

export default function FilterableList() {
  const [query, setQuery] = useState('');
  const result = filterItems(foods, query)
  function handleChange(e) {
    setQuery(e.target.value);
  }
  
  return (
    <>
      <SearchBar query={query} onChange={handleChange} />
      <List items={result} />
    </>
  );
}

function SearchBar({query, onChange}) {
  return (
    <div className='container'>
        <div className='title'>Search Bar</div>
        <label>
        <input
            value={query}
            onChange={onChange}
            placeholder='Type something'
        />
        </label>
    </div>
    
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td className='td_title'>{food.title}</td>
            <td className='td_children'>{food.children}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}