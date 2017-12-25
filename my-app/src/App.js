import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', gender: '', strength: '', goodquality: [], goodquality2: [], badquality: [], reasonforbad: '', review: [] };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        // If you are using babel, you can use ES 6 dictionary syntax { [e.target.name] = e.target.value }
        var change = {};

        if (e.target.type === "checkbox" && e.target.checked) {
            this.state[e.target.name].push(e.target.value);
        } else if (e.target.type === "checkbox") {
            var index = this.state[e.target.name].indexOf(e.target.value);
            this.state[e.target.name].splice(index, 1);
        } else {
            change[e.target.name] = e.target.value;
        }

        this.setState(change);
    }

    arrayToEnglishString(arr) {
        var ans = "";
        for (var i = 0; i < arr.length; i++) {
            if (i !== 0) ans += " ";
            ans += arr[i];
            if (arr.length > 2 && i !== arr.length - 1) ans += ",";
            if (i === arr.length - 2) ans += " and";
        }
        return ans;
    }

    possessiveGender(s) {
        if (s === "he") return "his";
        if (s === "she") return "her";
    }

    objectiveGender(s) {
        if (s === "he") return "him";
        if (s === "she") return "her";
    }

    getRawMarkup() {
        var sentence1 = this.state.name + " was " + this.state.strength + ".";
        var sentence2 = "I especially admired the " + this.arrayToEnglishString(this.state.goodquality2) + " that " +
            this.state.name + " showed over the course of this program. ";
        var sentence3 = "I did notice that " + this.state.gender + " " + this.arrayToEnglishString(this.state.badquality) +
            ", but I think that with time, " + this.state.gender + " will develop the " + this.state.reasonforbad + " to overcome this.";
        var sentence4 = "I strongly encourage " + this.state.name + " to thoroughly review the class materials to cement what we covered, as the contest season is approaching very quickly."

        if (this.state.review.length === 0) sentence4 = "";


        var lastSentence = "It was my pleasure teaching " + this.objectiveGender(this.state.gender) + 
            " at IdeaMath, and I wish " + this.objectiveGender(this.state.gender) + " the best of luck this year!";

        if (this.state.goodquality2.length === 0) sentence2 = "";

        return {__html: sentence1 + " " + sentence2 + " " + sentence3 + " " + sentence4 + " " + lastSentence};
    }

    render() {
        return (
            <form>

                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">IDEA Math Comments App</h1>
                    </header>
                    <br />
                </div>

                <h3>Output</h3>
                <div
                    className="content"
                    dangerouslySetInnerHTML={this.getRawMarkup()}
                />
                <br />
                <hr />

                <label>
                    First Name:
                    <input type="text" name="name" onChange={this.handleChange.bind(this)} defaultValue={this.state.name} />
                </label>
                <br />
                <br />

                <label>
                    Gender:
                    <div>
                        <input type="radio"
                            onChange={this.handleChange.bind(this)}
                            id="male"
                            name="gender"
                            value="he" />
                        <label for="strength1">Male</label>

                        <input type="radio"
                            onChange={this.handleChange.bind(this)}
                            id="female"
                            name="gender"
                            value="she" />
                        <label for="strength2">Female</label>
                    </div>
                </label>
                <br />

                <label>
                    Student Strength (1 is best):
                    <div>
                        <input type="radio"
                            onChange={this.handleChange.bind(this)}
                            id="strength1"
                            name="strength"
                            value="one of the strongest students in my class" />
                        <label for="strength1">1</label>

                        <input type="radio"
                            onChange={this.handleChange.bind(this)}
                            id="strength2"
                            name="strength"
                            value="one of the stronger students in my class" />
                        <label for="strength2">2</label>

                        <input type="radio"
                            onChange={this.handleChange.bind(this)}
                            id="strength3"
                            name="strength"
                            value="a good student in my class" />
                        <label for="strength3">3</label>

                        <input type="radio"
                            onChange={this.handleChange.bind(this)}
                            id="strength4"
                            name="strength"
                            value="a very enthusiastic student in my class" />
                        <label for="strength4">4</label>
                    </div>
                </label>
                <br />

                <label>
                    Good Student Qualities (select at least 1): <br />
                    <input type="checkbox" onChange={this.handleChange.bind(this)} name="goodquality2"
                        value="attentiveness in class" />attentive in class<br />
                    <input type="checkbox" onChange={this.handleChange.bind(this)} name="goodquality2"
                        value="eagerness to learn" />eagerness to learn<br />
                    <input type="checkbox" onChange={this.handleChange.bind(this)} name="goodquality2"
                        value="willingness to present problems" />willingness to present problems<br />
                    <input type="checkbox" onChange={this.handleChange.bind(this)} name="goodquality2"
                        value="good test-taking skills" />test-taking skills<br />
                    <input type="checkbox" onChange={this.handleChange.bind(this)} name="goodquality2"
                        value="discipline" />discipline<br />
                    <input type="checkbox" onChange={this.handleChange.bind(this)} name="goodquality2"
                        value="hard work" />hard work<br />
                    <input type="checkbox" onChange={this.handleChange.bind(this)} name="goodquality2"
                        value="talent" />talent<br />
                    <input type="checkbox" onChange={this.handleChange.bind(this)} name="goodquality2"
                        value="honesty" />honesty<br />
                    <input type="checkbox" onChange={this.handleChange.bind(this)} name="goodquality2"
                        value="ambition" />ambition<br />
                    <input type="checkbox" onChange={this.handleChange.bind(this)} name="goodquality2"
                        value="drive" />drive<br />
                </label>
                <br />

                <label>
                    Bad Student Qualities <br />
                    <input type="checkbox" onChange={this.handleChange.bind(this)} name="badquality"
                        value="sometimes was distracted by other students" />sometimes was distracted by other students<br />
                    <input type="checkbox" onChange={this.handleChange.bind(this)} name="badquality"
                        value="occasionally was shy to present problems" />occasionally was shy to present problems<br />
                    <input type="checkbox" onChange={this.handleChange.bind(this)} name="badquality"
                        value="was a bit afraid to ask questions" />was a bit afraid to ask questions<br />
                    <input type="checkbox" onChange={this.handleChange.bind(this)} name="badquality"
                        value="distracted by the cell phone" />distracted by his/her cell phone<br />
                    <input type="checkbox" onChange={this.handleChange.bind(this)} name="badquality"
                        value="drew pictures during class" />drew pictures during class<br />
                    <input type="checkbox" onChange={this.handleChange.bind(this)} name="badquality"
                        value="didn't take tests as seriously as they could have been" />did not take tests very seriously<br />
                    <input type="checkbox" onChange={this.handleChange.bind(this)} name="badquality"
                        value="sometimes rushes to (fake)solve problems" />sometimes rushes to (fake)solve problems<br />
                </label>
                <br />

                <label>
                    Reason for Bad Student Qualities <br />
                    <input type="radio" onChange={this.handleChange.bind(this)} name="reasonforbad"
                        value="maturity" />more maturity required<br />
                    <input type="radio" onChange={this.handleChange.bind(this)} name="reasonforbad"
                        value="confidence" />more confidence required<br />
                    <input type="radio" onChange={this.handleChange.bind(this)} name="reasonforbad"
                        value="math skills" />more math skills required<br />
                    <input type="radio" onChange={this.handleChange.bind(this)} name="reasonforbad"
                        value="practice" />more practice required<br />
                </label>
                <br />

                <label>
                    Review Class Materials?
                    <input type="checkbox" onChange={this.handleChange.bind(this)} name="review"
                        value="Yes" />Yes<br />
                </label>
                <br />
            </form>

        );
    }
}

export default App;
