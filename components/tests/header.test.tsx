// import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// import { Header } from "../common/header";
// // import '@testing-library/jest-dom/jest-globals';
// import '@testing-library/jest-dom';
// import { Hero } from "../products/hero";



// jest.mock('assets/cart.svg', () => 'svg');

// const header = <Header qtd={0} />
// const hero = <Hero />

// describe("Header", () => {
//     render(header)
//     render(hero);

//     const cartBtn = screen.getByRole('button');

//     it("Should render", () => {
//         expect(cartBtn).toBeInTheDocument();
//     });

//     fireEvent.click(cartBtn);

//     test("Side menu opens when button is clicked", async () => {

//         const nav = await screen.findByRole('nav');
    
//         expect(nav).toBeInTheDocument;
//     })
// })