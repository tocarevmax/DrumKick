import React from 'react';

class NavBarSearchFrom extends React.Component {

  constructor(props) {
    super(props);
    this.state = {q: ""};
  }


  update(e) {
    this.setState({
      q: e.currentTarget.value
    });

    if (e.currentTarget.value.length === 0) {
      this.props.changeUISearch(false);
    } else {
      this.props.fetchSearchResults(e.currentTarget.value);
      this.props.changeUISearch(true);
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.q.length === 0) {
      this.props.changeUISearch(false);
    } else {
      this.props.fetchSearchResults(this.state.q);
      this.props.changeUISearch(true);
    }
  }

  handleBlur(e) {
    e.currentTarget.value = "";
    this.setState({q: ""});
  }

  render() {
    return (
      <form
        className="navigation-search-form"
        onSubmit={this.handleSubmit.bind(this)}
      >
          <input
            className="text navigation-search"
            type="text"
            name="query"
            onChange={this.update.bind(this)}
            placeholder="Find concerts for any artist"
            onBlur={this.handleBlur.bind(this)}
          />

          <button
            className="search-button"
            type="submit"
          >
          <img
            src="https://assets.sk-static.com/assets/nw/components/navigation-large-screen/search-5510d8d.svg"
            className="navigation-submit"
          />
          </button>
      </form>
    );
  }

}

export default NavBarSearchFrom;
