import { Mereor } from 'meteor/meteor';
import expect from 'expect';

import { validateNewUser } from './users';

if (Meteor.isServer) {
  describe('users', function () {

    it('Should allow a valid email address', function () {
      const testUser = {
        emails: [
          {
            address: 'Test@example.com'
          }
        ]
      };
      const res = validateNewUser(testUser);

      expect(res).toBe(true);
    });

    it('Should REJECT invalid email address', function () {
      const testUser = {
        emails: [
          {
            address: 'Testple'
          }
        ]
      };

      expect(() => {
        validateNewUser(testUser);
      }).toThrow();
    });
  });
}

// const add = (a, b) => a + b;
//
// const square = (a) => a*a;
//
// describe('Add', function () {
//   it('Should add two numbers', function () {
//     const res = add(11, 9);
//
//     expect(res).toBe(20);
//
//     if (res !== 20) {
//       throw new Error('Sum was not equal to expected value');
//     }
//   });
// });
//
// describe('Square', function () {
//   it('Should square two numbers', function () {
//     const res = square(3);
//
//     expect(res).toBe(9);
//   });
// });
