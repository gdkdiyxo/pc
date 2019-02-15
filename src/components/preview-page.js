import React from 'react';
import { Link } from 'react-router-dom';
import CardContainer from './card/card-container';

import './preview-page.css';

export default function PreviewPage() {
  return (
    <div>
      <button className="create-page-btn back-btn">
        <Link to="/create">Back</Link>
      </button>
      <CardContainer />;
    </div>
  );
}
