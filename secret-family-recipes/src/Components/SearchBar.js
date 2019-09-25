// import React, { useState } from 'react';
// import "./SearchBar.css";

// export default ({ cb }) => {
//   const [query, setQuery] = useState('');

//   function inputHandler({ target }) {
//     setQuery(target.value);
//   }

//   function submit(ev) {
//     ev.preventDefault();
//     cb(query);
//     setQuery('');
//   }

//   return (
//     <form onSubmit={submit}>
//       <input
//         type='text'
//         id='query'
//         placeholder='Category'
//         value={query}
//         onChange={inputHandler}
//       />
//       <input type='submit' value={'Filter'} />
//     </form>
//   );
// }

import React, { useState } from 'react';
import './SearchBar.css';

export default ({ cb }) => {
  const [query, setQuery] = useState('');

  function inputHandler({ target }) {
    setQuery(target.value);
  }

  function submit(ev) {
    ev.preventDefault();
    cb(query);
    setQuery('');
  }

  return (
    <form onSubmit={submit} className='filter'>
      <input
        type='text'
        id='query'
        placeholder='category'
        value={query}
        onChange={inputHandler}
      />
      <input type='submit' value={'Filter'} />
    </form>
  );
}