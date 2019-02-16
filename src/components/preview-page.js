import React from 'react';
import { Link } from 'react-router-dom';
import CardContainer from './card/card-container';

export default function PreviewPage() {
  const style = { display: 'block', margin: '10px auto' };
  return (
    <main role="main">
      <button style={style} className="create-page-btn">
        <Link to="/create">Back</Link>
      </button>
      <CardContainer />;
    </main>
  );
}
