# SOCRAT Projector

## Background 📖
The tensorflow projector (https://projector.tensorflow.org/) is an open-source project maintained by Google. It's a great tool for users to visualize their data. However, there is no current API for it to be used as a component in other web project. We customized it, and made it a npm package. So that it can be embeded in any web project.<br/>

## Usage 🪄
Install the package from npm <br/>
`npm install socrat-projector`<br/><br/>
Add a div with `id = "socrat-projector"` as the entry point.<br/>
`<div style="height:500px;width:1000px" id="socrat-projector"/>`<br/><br/>
Import the socratProjector and input the data str. ( Currently users have to convert the cvs file into string )<br/>
`import socratProjector from 'socrat-projector'`<br/>
`socratProjector("1\t1\t1\n2\t2\t2")`<br/>

## About Us 👋
SOCRAT team from the MDP program in the University of Michigan
