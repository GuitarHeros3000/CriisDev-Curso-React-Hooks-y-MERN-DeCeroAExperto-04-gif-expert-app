import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en el <GifExpertApp />', () => {

    const newCategory = 'Fortnite';

    test('debe hacer match con el snapshot', () => {
        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
    });

    test('debe de agregar categorías nuevas', () => {
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: newCategory } });
        fireEvent.submit(form);
        fireEvent.input(input, { target: { value: newCategory + '2' } });
        fireEvent.submit(form);
        fireEvent.input(input, { target: { value: newCategory + '3' } });
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(4);
    });


    test('no debe agregar una nueva categoria si la categoria ya existe', () => {
        const { container } = render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: newCategory } });
        fireEvent.submit(form);

        fireEvent.input(input, { target: { value: newCategory } });
        fireEvent.submit(form);

        expect(container.getElementsByClassName('card-grid').length).toBe(2);
    });

});