/* eslint-disable react/destructuring-assignment */
import React from 'react';
import HomePageLink from '../HomePageLink';
import styles from '../Home.css';

type StarWarsAppState = {
  loading: boolean;
  name: {};
};
export default class StarWarsApp extends React.Component<{}, StarWarsAppState> {
  constructor() {
    super({});
    this.state = {
      name: {},
      loading: true
    };
  }

  componentDidMount() {
    fetch('https://swapi.dev/api/people/1/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ name: data.name, loading: false });
        return data;
      })
      .catch(reason => {
        this.setState({ name: reason.name, loading: false });
        return reason;
      });
  }

  render(): JSX.Element {
    const text = this.state.loading ? 'loading' : this.state.name;
    return (
      <div>
        <HomePageLink />
        <div className={styles.container} data-tid="container">
          {text}
        </div>
      </div>
    );
  }
}
