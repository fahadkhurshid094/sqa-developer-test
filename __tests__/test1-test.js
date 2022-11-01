/**
 * @jest-environment jsdom
 */

 import { createMemoryHistory } from "history";
import { render, fireEvent, screen } from "@testing-library/react";
import Home from "../components/Home";
import { NavigationContainer } from '@react-navigation/native';

//test block
test("Hello world test", () => {
    const component = (
        <NavigationContainer>
          <Home />
        </NavigationContainer>
      );
  
      render(component);
expect(screen.getByText(`Hello World !`)).toBeInTheDocument
});
