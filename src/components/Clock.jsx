// ? 26 August, 2025
//? https://www.youtube.com/watch?v=CzyspyBe7rk&list=PLHiZ4m8vCp9M6HVQv7a36cp8LKzyHIePr&index=8&t=641s&ab_channel=LearnwithSumit-LWS-Bangladesh
import { Component } from "react";

// ? React.Component - this is the base class
export default class Clock extends Component {
  // ? outside constructor, this keyword is not required
  state = {
    date: new Date(),
  };

  // componentDidMount() runs after component has been rendered to the DOM (real DOM)
  componentDidMount() {
    this.clockTimer = setInterval(this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    () => {
      this.setState({
        date: new Date(),
      });
    };
  }

  render() {
    return (
      <div>
        <h1>Clock</h1>
        <p>
          <span>{new Date().toLocaleTimeString(this.state.date)}</span>
        </p>
      </div>
    );
  }
}

// ? ========== 2nd Version ===========
// import { Component } from "react";

// // ? React.Component - this is the base class
// export default class Clock extends Component {

//   // ? we are not using props here
//     constructor(props) {
//       super(props); //? calls the base class constructor
//       this.state = {
//         date: new Date(),
//       };
//     }

//   // componentDidMount() runs after component has been rendered to the DOM (real DOM)
//   componentDidMount() {
//     setInterval(this.tick(), 1000);
//   }

//   tick() {
//     () => {
//       this.setState({
//         date: new Date(),
//       });
//     };
//   }

//   //   ? 1st version
//   // componentDidMount() runs after component has been rendered to the DOM (real DOM)
//   //   componentDidMount() {
//   //     setInterval(() => {
//   //       this.setState({
//   //         date: new Date(),
//   //       });
//   //     }, 1000);
//   //   }

//   render() {
//     return (
//       <div>
//         <h1>Clock</h1>
//         <p>
//           <span>{new Date().toLocaleTimeString(this.state.date)}</span>
//         </p>
//       </div>
//     );
//   }
// }

// ? =========== VERSION 1 ==============
// import { Component } from "react";

// // ? React.Component - this is the base class
// export default class Clock extends Component {
//   render() {
//     return (
//       <div>
//         Clock
//         <h1>
//           <span>{new Date().toLocaleTimeString(this.props.locale)}</span>
//         </h1>
//       </div>
//     );
//   }
// }
