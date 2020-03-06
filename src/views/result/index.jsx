import { Link } from 'react-router-dom';
import PopCon from 'components/pop/index';
import { Con, ConHeader, ConMain, ConFooter } from 'components/container/index';
import Button from '@tbj/wheel/components/button';
import Header from '@tbj/wheel/components/header';

import './index.styl';
import imgOne from 'images/zuesbane2.png';

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
            bgColor='#323346'
            color='#fff'
            title='铜板街结果'
          />
        </ConHeader>
        <ConMain>
          <div className='imgCon'>
            <img src={imgOne} />
          </div>
          <div style={{ width: '90%', 'margin': '0 auto' }}>
            <Link to='/index'>
              <Button text='这是结果页面' bgColor='#323346'></Button>
            </Link>
          </div>
          <PopCon show={this.state.show} hide={() => { this.setState({ show: false }); }} />
        </ConMain>
      </Con>
    );
  }
}

export default Index;