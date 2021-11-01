import React from "react";
import  ReactDOM  from "react-dom";
import Home from "../components/Home";
import Ability from './../components/pokemonDetails/Ability';
import {render , cleanup} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer"


afterEach(cleanup)

it("renders without crashing", ()=>{
    const div =document.createElement("div");
    ReactDOM.render(<Home></Home>,div)
})

it("renders Ability correctly",()=>{
   const  {getByTestId} = render(<Ability ability = "Overgrow"></Ability>)
   expect(getByTestId("ability")).toHaveTextContent("Overgrow")
})

it("renders Ability correctly",()=>{
    const  {getByTestId} = render(<Ability ability = "Chlorophyll"></Ability>)
    expect(getByTestId("ability")).toHaveTextContent("Chlorophyll")
 })

it("matches snapshot", ()=> {
   const tree = renderer.create(<Ability ability = "Chlorophyll"></Ability>).toJSON()
   expect(tree).toMatchSnapshot();
}) 