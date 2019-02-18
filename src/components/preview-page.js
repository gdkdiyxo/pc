import React from 'react';
import { Link } from 'react-router-dom';
import CardContainer from './card/card-container';
import { connect } from 'react-redux';

export class PreviewPage extends React.Component {
  render() {
    const style = { display: 'block', margin: '10px auto' };
    return (
      <main role="main">
        {this.props.history ? (
          <Link to="/create">
            <button style={style} className="create-page-btn">
              Back
            </button>
          </Link>
        ) : null}
        <CardContainer card={this.props.card} />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  card: state.card,
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(PreviewPage);
