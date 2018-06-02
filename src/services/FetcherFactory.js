import React from 'react';
import FetchMock from 'react-native-fetch-mock';

const realfetch= false;
const fetchMock = new FetchMock(require('../mocks')).fetch;

const FetcherFactory = (url) => (Comp) =>
  class WithFetching extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: {},
        isLoading: false,
        error: null,
      };
    }

    componentDidMount() {
      this.setState({ isLoading: true });

      const fetchMthod = realfetch? fetch : fetchMock;

      fetchMthod(url)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ data: data, isLoading: false }))
      .catch(error => {
        console.log(error);
        this.setState({ error: error, isLoading: false });

      });
    }

    render() {
      return <Comp isLoading={this.state.isLoading} data={this.state.data} error={this.state.error}/>
    }
  }

  export default FetcherFactory;
