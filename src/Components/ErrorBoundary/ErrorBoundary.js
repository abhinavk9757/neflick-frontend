import React from 'react';

export const ErrorBoundary = class extends React.Component {
  state = {
    error: false,
  };

  componentDidCatch(error) {
    this.setState({
      error: error,
    });
  }

  render() {
    if (this.state.error) {
      return (
        <center>
          <h3>Something Went Wrong!</h3>
        </center>
      );
    }
    return this.props.children;
  }
};

export const withErrorBoundary = WrappedComponent => props => {
  return (
    <ErrorBoundary>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );
};
