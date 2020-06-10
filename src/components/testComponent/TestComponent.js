import React, { Component } from 'react';
import TestNavComponent from '../navTestComponent/NavTestComponent';
import TestContentComponent from '../testContentComponent/TestContentComponent';
import ButtonUI from '../ui/Button/BottonUI';

class TestComponent extends Component {
    state = {
        data: [
            {
                "questionType": "1",
                "questionDesc": "what is question 1?",
                "questionOption": ["1", "2", "3", "4"],
                "questionNo": "1",
            },
            {
                "questionType": "2",
                "questionDesc": "what is question 1 type 2?",
                "questionOption": ["1", "2", "3", "4"],
                "questionNo": "1",
            },
            {
                "questionType": "3",
                "questionDesc": "what is question 1 type 3?",
                "questionOption": ["1", "2", "3", "4"],
                "questionNo": "1",
            },
            {
                "questionType": "1",
                "questionDesc": "what is question 2?",
                "questionOption": ["1", "2", "3", "4"],
                "questionNo": "2",
            },
            {
                "questionType": "1",
                "questionDesc": "what is question 3?",
                "questionOption": ["1", "2", "3", "4"],
                "questionNo": "3",
            },
            {
                "questionType": "2",
                "questionDesc": "what is question 2 type 2?",
                "questionOption": ["1", "2", "3", "4"],
                "questionNo": "2",
            },
            {
                "questionType": "3",
                "questionDesc": "what is question 2 typ 3?",
                "questionOption": ["1", "2", "3", "4"],
                "questionNo": "2",
            },
            {
                "questionType": "3",
                "questionDesc": "what is question 3 type 3?",
                "questionOption": ["1", "2", "3", "4"],
                "questionNo": "3",
            }
        ],
        currentQuestionDes: '<pre style="text-align: left;"><span style="background-color: #eeeeee;">#include &lt;studio.h&gt;<br /></span><span style="background-color: #eeeeee;">using namespace std;<br /></span><span style="background-color: #eeeeee;">int main()<br /></span><span style="background-color: #eeeeee;">{<br /></span><span style="background-color: #eeeeee;"><span>&nbsp;&nbsp; &nbsp;</span><span>&nbsp; &nbsp; cout&lt;&lt;"hello word";<br /></span></span><span style="background-color: #eeeeee;">}&nbsp;</span></pre>',
        currentQuestionOption1: "1",
        currentQuestionOption2: "2",
        currentQuestionOption3: "3",
        currentQuestionOption4: "4",
        currentQuestionType: "-1",
        currentQuestionNo: "-1"
    }

    questionChanger = (quesDetail) => {
        this.setState({
            currentQuestionDes: quesDetail.questionDesc,
            currentQuestionOption1: quesDetail.questionOption[0],
            currentQuestionOption2: quesDetail.questionOption[1],
            currentQuestionOption3: quesDetail.questionOption[2],
            currentQuestionOption4: quesDetail.questionOption[3],
            currentQuestionType: quesDetail.questionType,
            currentQuestionNo: quesDetail.questionNo,
        })
        console.log(this.state);
    }


    render() {
        const response = this.state.data;
        let c = [];
        let java = [];
        let python = [];
        for (var i = 0; i < response.length; i++) {
            if (response[i].questionType == '1') {
                const details = response[i];
                const btn = <ButtonUI key={`${details.questionType}:${details.questionNo}`} name={details.questionNo}
                    clicked={
                        () => this.questionChanger(details)
                    } />
                c.push(btn);
            }
            else if (response[i].questionType == '2') {
                const details = response[i];
                const btn = <ButtonUI key={`${details.questionType}:${details.questionNo}`} name={details.questionNo}
                    clicked={
                        () => this.questionChanger(details)
                    } />
                java.push(btn);
            } else {
                const details = response[i];
                const btn = <ButtonUI key={`${details.questionType}:${details.questionNo}`} name={details.questionNo}
                    clicked={
                        () => this.questionChanger(details)
                    } />
                python.push(btn);
            }
        }

        return (
            <React.Fragment>
                <TestNavComponent />
                <TestContentComponent btn1={c} btn2={java} btn3={python} quesDes={this.state.currentQuestionDes} questionOption1={this.state.currentQuestionOption1} questionOption2={this.state.currentQuestionOption2} questionOption3={this.state.currentQuestionOption3} questionOption4={this.state.currentQuestionOption4} />
            </React.Fragment >
        )
    }
}

export default TestComponent;