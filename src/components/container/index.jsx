import './index.styl';

class Con extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div class='rp_con'>
        {this.props.children}
      </div>
    );
  }
};

class ConHeader extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div class='rp_con_header'>
        {this.props.children}
      </div>
    );
  }
};

class ConFooter extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div class='rp_con_footer'>
        {this.props.children}
      </div>
    )
  }
}

class ConMain extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div class='rp_con_main'>
        {this.props.children}
      </div>
    )
  }
}

export {
  Con,
  ConHeader,
  ConFooter,
  ConMain
};