import { Link } from 'react-router-dom';
import { Con, ConHeader, ConMain, ConFooter } from 'components/container/index';
import PopCon from 'components/pop/index';
import Button from '@tbj/wheel/components/button';
import Header from '@tbj/wheel/components/header';
import wrapAnimation from 'components/wrap/index';

import './index.styl';
import imgOne from 'images/22.png';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  render() {
    return (
      <Con>
        <ConHeader>
          <Header
            bgColor='#ed5c49'
            color='#fff'
            title='铜板街'
          />
        </ConHeader>
        <ConMain>
          <div className='imgCon'>
            <img src={imgOne} />
          </div>
          <div style={{ width: '90%', 'margin': '0 auto' }}>
            <Link to='/result'>
              <Button text='这是首页'></Button>
            </Link>
          </div>

          <PopCon show={this.state.show} hide={() => { this.setState({ show: false }); }} />
        </ConMain>
      </Con>
    );
  }
}

export default Index;