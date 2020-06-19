import * as actionTypes from '../action/actionTypes';

const initialState = {
    currentQuestionDes: '<div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #557799">#include &lt;bits/stdc++.h&gt;</span><br /> using namespace std;<br /> <span style="color: #333399; font-weight: bold">int</span> <span style="color: #0066BB; font-weight: bold">main</span>()<br /> {<br />     <span style="color: #888888">// using time http://hilite.me/</span><br />     <span style="color: #333399; font-weight: bold">int</span> i <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">7</span>;<br />     string s <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;&quot;</span>;<br />     <span style="color: #008800; font-weight: bold">while</span> (i<span style="color: #333333">--</span>)<br />     {<br />         string t;<br />         getline(cin, t);<br />         s <span style="color: #333333">=</span> s <span style="color: #333333">+</span> <span style="background-color: #fff0f0">&quot;&lt;br /&gt; &quot;</span> <span style="color: #333333">+</span> t;<br />     }<br />     cout <span style="color: #333333">&lt;&lt;</span> s;<br /> }<br /> </pre></div>',
    currentQuestionOption1: "1",
    currentQuestionOption2: "2",
    currentQuestionOption3: "3",
    currentQuestionOption4: "4",
    currentQuestionType: "-1",
    currentQuestionNo: "-1"
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_QUESTION:
            return {
                ...state,
            };
        case actionTypes.QUES_CHANGER:
            return {
                ...state,
                currentQuestionDes: action.payload.Description,
                currentQuestionOption1: action.payload.Option1,
                currentQuestionOption2: action.payload.Option2,
                currentQuestionOption3: action.payload.Option3,
                currentQuestionOption4: action.payload.Option4,
            };
        default:
            return state;
    }
};

export default reducer;