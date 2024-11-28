import { buyFood, medical, sendMoney } from "./images";

// This file stores all static arrays used for various UI elements and functionality.

/** 
 * Array of user data with unique IDs, usernames, and profile images.
 * Used for displaying user information in the application.
 */
export const users = [
    {
      id: '0',
      username: 'john_doe',
      profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: '1',
      username: 'jane_smith',
      profileImage: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: '2',
      username: 'mike_jones',
      profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      id: '3',
      username: 'sara_connor',
      profileImage: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      id: '4',
      username: 'david_brown',
      profileImage: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      id: '5',
      username: 'linda_wilson',
      profileImage: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
];

/** 
 * Array of recent activities with unique IDs, activity names, dates, 
 * amounts, and associated images.
 * Used for displaying recent transaction history or activities in the application.
 */
export const recentActivities = [
    {
      id: '0',
      activityName: 'Send Money',
      date: '12 Dec 2023',
      money: '-$45.67',
      img: sendMoney,
    },
    {
      id: '1',
      activityName: 'Buy Food',
      date: '11 Nov 2023',
      money: '-$78.90',
      img: buyFood,
    },
    {
      id: '2',
      activityName: 'Get Treatment',
      date: '24 Feb 2023',
      money: '-$12.99',
      img: medical,
    },
];

/** 
 * Array for numeric keypad data with unique IDs and displayed text values.
 * Used for rendering a keypad in the UI for input functionality.
 */
export const keypad = [
    { id: '1', text: '1' },
    { id: '2', text: '2' },
    { id: '3', text: '3' },
    { id: '4', text: '4' },
    { id: '5', text: '5' },
    { id: '6', text: '6' },
    { id: '7', text: '7' },
    { id: '8', text: '8' },
    { id: '9', text: '9' },
    { id: '10', text: '.' },   // Dot for decimal input
    { id: '11', text: '0' },   // Zero key
    { id: '12', text: '<-' },  // Backspace key
];
