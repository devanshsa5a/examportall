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
        currentQuestionDes: '<div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #557799">#include &lt;bits/stdc++.h&gt;</span><br /> using namespace std;<br /> <span style="color: #333399; font-weight: bold">int</span> <span style="color: #0066BB; font-weight: bold">main</span>()<br /> {<br />     <span style="color: #888888">// using time http://hilite.me/</span><br />     <span style="color: #333399; font-weight: bold">int</span> i <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">7</span>;<br />     string s <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;&quot;</span>;<br />     <span style="color: #008800; font-weight: bold">while</span> (i<span style="color: #333333">--</span>)<br />     {<br />         string t;<br />         getline(cin, t);<br />         s <span style="color: #333333">=</span> s <span style="color: #333333">+</span> <span style="background-color: #fff0f0">&quot;&lt;br /&gt; &quot;</span> <span style="color: #333333">+</span> t;<br />     }<br />     cout <span style="color: #333333">&lt;&lt;</span> s;<br /> }<br /> </pre></div>',
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
            if (response[i].questionType === '1') {
                const details = response[i];
                const btn = <ButtonUI key={`${details.questionType}:${details.questionNo}`} name={details.questionNo}
                    clicked={
                        () => this.questionChanger(details)
                    } />
                c.push(btn);
            }
            else if (response[i].questionType === '2') {
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