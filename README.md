## RAiD Software Engineering Challenge
I am tasked to developed a simple full stack web application: A point of Sales application for a fruit store, as describe below:
The application will have two user personas; a customer and a store owner
The fruits store contains the following fruits. Additional fruits can be included.
Fruit	Price	Starting Stock
Apple	$1.00	30
Orange	$1.50	25
Banana	$2.00	40

## Requirement
The web application is a Point of Sales (POS) system for an online fruit store, designed to support both customer and store owner interaction. It must fulfil the following functional and technical requirements:
Functional Requirement:
1.	The web application must display a list of available fruits, including their current stock levels and prices, to allow customers to browse and make purchasing decisions.
2.	The web application must allow customers to select fruits, specify quantities, and view the total cost of their selections in real time.
3.	The web application must enable customers to submit their selected fruits as an order, completing the shopping process.
4.	The web application must provide store owners with access to view all submitted customer orders, enabling them to process and fulfil purchases.
Technical Requirement:
The web application must be implemented as a three-tier architecture:
1.	Front End A React web application written in TypeScript, built using either Create React App, Vite, or Next.js..
2.	Server An API server written in TypeScript and run on Node.js. . The server may also be implemented using Next.js..
3.	Database Any database solution (e.g., PostgreSQL, MongoDB, etc.) may be used to persist application data.

## Planned but Incomplete Features
- Order submission flow
- Owner dashboard to view customer orders

## Learning Reflections

Although I didn’t complete the full application, this challenge was a valuable learning experience. Key takeaways include:

- **TypeScript in React**: Gained hands-on experience with typing props, state, and component interfaces. It helped me write safer and more predictable code.
- **Component Design**: Practiced breaking down UI into reusable components and managing state effectively.
- **Project Setup**: Learned how to scaffold a React + TypeScript project using Vite, and configure basic routing and styling.

I also explored how to structure a frontend to eventually integrate with an API server, and began planning the data flow between client and backend.
