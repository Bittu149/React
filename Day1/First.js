// Create Element through js
//46 commits
//styles = {fontsize:"30px",backgroundcolor:"blue",color:"white"}

// const header1 = document.createElement("h1");
// header1.innerText = "Hello World from js";
// header1.style.backgroundColor = "blue";
// header1.style.fontSize = "30px";
// header1.style.color = "white";

// const header2 = document.createElement("h2");
// header2.innerText = "Hello World";
// header2.style.backgroundColor = "black";
// header2.style.fontSize = "20px";
// header2.style.color = "white";

// const root = document.getElementById("root");
// root.append(header1);
// root.append(header2);


const React ={
    createElement: function(tag,styles,children){
        const element = document.createElement(tag);

        if(typeof children === 'object'){
            for(let val of children)
            element.append(val);
        }
        else
        element.innerText = children;

        for(let key in styles){
            element.style[key] = styles[key];
        }
        return element;
    }
}

const ReactDom = {
    render: function(element,root){
        root.append(element);
    }
}

const header1 = React.createElement('h1',{fontSize:"30px",backgroundColor:"blue",color:"white"},"Hello coder army");
const header2 = React.createElement('h2',{fontSize:"20px",backgroundColor:"black",color:"white"},"Hello World");



const li1 = React.createElement('li1',{},"Html");
const li2 = React.createElement('li2',{},"Css");
const li3 = React.createElement('li3',{},"Js");


const Ul = React.createElement('ul',{fontSize:"15px",backgroundColor:"green",color:"white"},[li1,li2,li3]);
// Unorderlist
//Html
//Css
//Js






ReactDom.render(header1,document.getElementById("root"));
ReactDom.render(header2,document.getElementById("root"));
ReactDom.render(Ul,document.getElementById("root"));