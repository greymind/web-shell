// import * as React from 'react';
import * as enzyme from 'enzyme';
// import Hello from './Hello';
import * as Adapter from 'enzyme-adapter-react-16';
// import { helloReducer } from './Hello.reducers';
// import { incrementEnthusiasm } from './Hello.actions';

enzyme.configure({ adapter: new Adapter() });

// it('renders the correct text when no enthusiasm level is given', () => {
//     const hello = enzyme.shallow(<Hello name="Balki" />);
//     expect(hello.find('.greeting').text()).toEqual('Hello Balki!');
// });

// it('renders the correct text with an explicit enthusiasm of 1', () => {
//     const hello = enzyme.shallow(<Hello name="Balki" enthusiasmLevel={1} />);
//     expect(hello.find('.greeting').text()).toEqual('Hello Balki!');
// });

// it('renders the correct text with an explicit enthusiasm level of 5', () => {
//     const hello = enzyme.shallow(<Hello name="Balki" enthusiasmLevel={5} />);
//     expect(hello.find('.greeting').text()).toEqual('Hello Balki!!!!!');
// });

// it('throws when the enthusiasm level is 0', () => {
//     expect(() => {
//         enzyme.shallow(<Hello name="Balki" enthusiasmLevel={0} />);
//     }).toThrow();
// });

// it('throws when the enthusiasm level is negative', () => {
//     expect(() => {
//         enzyme.shallow(<Hello name="Balki" enthusiasmLevel={-1} />);
//     }).toThrow();
// });

// it('reduces correctly', () => {
//     expect(helloReducer({ languageName: 'TypeScript', enthusiasmLevel: 1 }, incrementEnthusiasm()))
//         .toEqual({ languageName: 'TypeScript', enthusiasmLevel: 2 });
// });