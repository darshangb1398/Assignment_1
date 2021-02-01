let name = "Darshan Brahmbhatt";
let description = "My name is Darshan Brahmbhatt. I am a graduate student at San Diego State University. I am pursuing Master of Science in Computer Science. I have taken courses such as Machine Learning, Advanced Computer vision, Software Engineering, Robotics, Big Datat etc.";
let gitHubRepo = "https://www.github.com/darshangb1398";
let photoUrl = "photo.jpg";
const element = React.createElement("div", {
  id: "parentDiv"
}, React.createElement("h1", {
  id: "name"
}, name), React.createElement("div", {
  id: "photoDiv"
}, React.createElement("img", {
  id: "photo",
  src: photoUrl
})), React.createElement("div", {
  id: "descDiv"
}, React.createElement("p", null, description)), React.createElement("div", {
  id: "buttonDiv"
}, React.createElement("a", {
  className: "button",
  target: "_blank",
  href: gitHubRepo
}, "View My Github Repo")));
ReactDOM.render(element, document.getElementById("content"));