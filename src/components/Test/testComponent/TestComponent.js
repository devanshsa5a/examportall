import React, { Component } from 'react';
import TestNavComponent from '../nav/navTestComponent/NavTestComponent';
import TestContentComponent from '../test/content/testContentComponent/TestContentComponent';
import { connect } from 'react-redux';
import * as getActions from '../../../store/action/getQuestion';


class TestComponent extends Component {

    componentDidMount = () => {
        this.props.onInnit();
    }

    render() {
        return (
            <React.Fragment>
                <TestNavComponent />
                <TestContentComponent />
            </React.Fragment >
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInnit: () => dispatch(getActions.initTest()),
    };
};

export default connect(null, mapDispatchToProps)(TestComponent);
