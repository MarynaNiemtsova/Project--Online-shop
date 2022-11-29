const issues = [
  {
    title: "Create a README",
    body: `All the projects you work on should have some form of documentation. This helps others understand what the application is, how it works, and how they can contribute.

Replace the existing \`README.md\` file with your own documentation.

Write Markdown to format your text nicely. Watch [Writing a README file in Markdown](https://www.loom.com/share/67d4749818a545e5b1aab77102f8d4cf) to see how you can markup your plain text using the markdown syntax.

Ensure your README.md covers all the items in the acceptance criteria.

## Acceptance criteria

- [ ] Overview of what the product is, with a screenshot of how it looks.
- [ ] Lists the dependencies of the app, such as Stripe and Begin
- [ ] Includes instructions for how to use the app for development:
  - What needs to be installed on the developer's computer to run this application (e.g Node)
  - What terminal commands need to be run to get the app up and running (e.g \`npm install\`)
- [ ] Includes links to the deployed applications:
  - Begin
  - Netlify`,
  },
  {
    title: "Deploy Application to Netlify",
    body: `Watch the [Deploying a React App on Netlify](https://www.loom.com/share/5e5dc383d61647c1a2b5a4661e80fcd9) tutorial

## Acceptance criteria

- [ ] Application is deployed to Netlify
- [ ] Link to application is included in the README`,
  },
  {
    title: "Implement the Buy Now button",
    body: `Some functionality has been provided by the previous developer. There is a function that you can call that will allow customers to complete the checkout process. You will need to call this function whenever the Buy Now button is clicked.

1. Open the React Component where your Buy Now button is implemented
2. At the top of this file, import the \`checkout\` function. Make sure you have the correct file path, it will look something like this:

   \`\`\`js
   import { checkout } from "../../services/checkout";
   \`\`\`

3. Add an \`onClick\` event handler to the button element. When it is clicked, you will need to call the \`checkout\` function and pass in the price id from the product. The function call might look something like this:

   \`\`\`js
   checkout(product.priceId);
   \`\`\`

4. When implemented, you should be able to click the Buy Now button and be redirected to the Stripe checkout page. You can complete the checkout process by entering fake credit card details:

   - Credit card number: \`4242424242424242\`
   - Other fields: Enter any valid fields, including an expiry date in the future

## Acceptance criteria

- [ ] When the Buy Now button is clicked, the customer is redirected to the Stripe checkout page`,
  },
  {
    title: "Shop design and CSS",
    body: `Implement a design for your shop using CSS. You should add your styles into \`src/App.css\`

Refer to the wireframes you and your group generated to inform your website design.

## Acceptance criteria

- [ ] The shop has a unique design, and considers design principles
- [ ] The design is responsive and works across all screen resolutions
- [ ] CSS Grid is used for the page layout`,
  },
  {
    title: "Display products on the page",
    body: `Now you are fetching the products, they are put onto a variable in \`App.js\ named \`products\`.

Read from this variable to display all of the products on your page.

Focus on generating the correct HTML for your webpage, don't focus on the design at this stage.

## Acceptance criteria

- [ ] All products are displayed on the React page
- [ ] The HTML is semantic
- [ ] Each product should have an image, name, description, price, and buy now button.`,
  },
  {
    title: "Fetch products from API",
    body: `1. Open \`./src/services/getProducts\`
2. Inside the \`getProducts\` function, make a fetch request to your API server to get the products and prices for your online shop.

The URL you need to call for your fetch request has been put on a variable already. It reads the value you put in your .env file. Use the \`url\` variable for your fetch request. 

## Acceptance criteria

- [ ] The products are fetched from the Products API and returned from the \`getProducts\` function
- [ ] The tests pass for the \`getProducts\` module
- [ ] The URL is read from the \`REACT_APP_API_URL\` environment variable`,
  },
  {
    title: "Set up Stripe API server",
    body: `Watch the tutorial on [Setting up a Stripe API server on Begin.com](https://www.loom.com/share/42028701a940476d953dd210a341ca9c)

1. Create an account at [Begin.com](http://begin.com/), using GitHub to authenticate
2. Go to the [Begin with Stripe](https://github.com/lwcooper/begin-with-stripe) GitHub Repository. It is a template for setting up an API that will talk to Stripe.
3. Click the "Deploy to Begin" button, and follow the prompts to set the app up in your personal GitHub account. If you need help with this, please contact your instructor.
4. Once your app is deployed, add the following environment variables to the Staging application:
    - \`REDIRECT_TO\` set to \`http://localhost:3000\`
    - \`STRIPE_SECRET_KEY\` set to the secret key provided by Stripe. **Important:** treat this key like a password to your Facebook account. **DO NOT SHARE IT IN SLACK, OR PUT IT IN GITHUB.**. It's called a secret on purpose!
5. Verify your app works, by clicking on the Staging link, and adding \`/products\` to the end. You should see a list of your products from Stripe.
6. Take your app URL, and add it to the \`.env\` file in this repository, under the \`REACT_APP_API_URL\` variable.

## Acceptance criteria

- [ ] The _Begin with Stripe_ application is deployed and accessible with a URL
- [ ] The following environment variables for staging are configured in the Begin app:
  - \`REDIRECT_TO\` is set to \`http://localhost:3000\`
  - \`STRIPE_SECRET_KEY\`
- [ ] The staging URL from the Begin application is added to the \`REACT_APP_API_URL\` variable in the \`.env\` file`,
  },
  {
    title: "Create products in Stripe",
    body: `Watch the [Adding products in Stripe](https://www.loom.com/share/16e40fb713554338adeedc72cc3eaefb) tutorial

## Acceptance criteria

- [ ] At least 6 products are created in Stripe
- [ ] Each product has the category set in the \`metadata\`
- [ ] Each product has a one time price associated with it`,
  },
  {
    title: "Setup Stripe Account",
    body: `Follow the tutorial for setting up a new Stripe account: [Setup a Stripe account](https://www.loom.com/share/e862bc3d5c674203af78ec4d45430403)

1. Sign up for an account on [Stripe.com](https://stripe.com/nz). Use your Developers Institute email address.
2. Verify your email address
3. Enter a name for your company
4. Create a test store, and ensure you can see the API Keys

## Acceptance criteria

- [ ] A Stripe account is created
- [ ] The Stripe public key is added to the \`REACT_APP_STRIPE_PUBLIC_KEY\` variable in the \`.env\` file`,
  },
  {
    title: "Planning",
    body: `## Deciding on what to sell

Choose the type of product you want to sell on your online shop. Think about how you will source content and images. Once you have decided what you will sell, move onto the rest of this issue.
    
## Understanding the project

Read through each of the GitHub issues in the To Do column. For every ticket, ensure you understand what is being asked of you. It is your responsibility to ensure you understand every ticket.

Feel free to pull in an instructor if the requirements are not clear. It's vital that you understand what is being asked of you.

In particular, identify if any tickets depend on each other. For example, you need to create a Stripe account before you can add products to the Stripe account.

## How to work on issues

Now you know what the project is, and what items you will be selling, it's time to get started.

The backlog is in priority order. You should complete the issues at the top of the column before starting any more issues. Never start a new issue before completing the previous issue. That means you should **never** have more than one issue in progress at a time.

In summary:

- You should only ever be working on one issue at a time
- Finish an issue before starting a new issue
- Start with the issues at the top of the column first. Do not re-prioritise them.

## Acceptance criteria

- [ ] You know what product you are selling
- [ ] You have one issue _In Progress_`,
  },
  {
    title: "Wireframes & Design Studio",
    body: `With your team, complete a design studio to produce some wireframes for your project.

Put screenshots or images of the wireframes in the \`wireframes\` folder in this project, add and commit them to git.

## Acceptance Criteria

- [ ] Wireframes exist in the wireframes folder in the project root`,
  },
  {
    title: "Team formation",
    body: `You will be designing wireframes as a team. An important part of being in a team is agreeing on your working agreements - how will you work with your team and ensure everyone feels comfortable to participate?
    
Part of this team formation exercise will include applying knowledge from the Treaty of Waitangi.

The [Principles of the Treaty of Waitangi – ngā mātāpono o te tiriti](https://teara.govt.nz/en/principles-of-the-treaty-of-waitangi-nga-matapono-o-te-tiriti) should be applied to how your team works together for this project.

### Participation

Acknowledges sovereignty/governance. Ensure there is equal participation for each member of your team. Ensure everyone has input into decisions that directly affect them. Decide how you will ensure that each team member has equal participation. For example, a working agreement that ensures all members of the team get a chance to show their design in turn.

### Protection

Acknowledges the protection of rights, benefits and, possessions. Each of your team members should have their Tikanga (culture and protocols) and Taonga (treasures) such as Te Reo Māori respected and given equal footing to the Tikanga and Taonga of other cultures. For example, you might run a morning prayer or Karakia, a standup, or other Tikanga.

### Partnership

Acknowledges sovereignty/governance and working together with the same rights and benefits as subjects of the Crown. This can be applied to your team by working together in partnership. Each team member should have a say in how the team performs. If you are making a decision that affects other people, they should have a say in the decision. For example, each member of the team gets to discuss the pros and cons of a design decision.

## Working agreements

Taking the above principles into consideration, with your team, brainstorm five working agreements that your team will follow.

Write down your working agreements in the \`WORKING_AGREEMENTS.md\` file, and explain what they mean, and how they reflect the principals from the Treaty of Waitangi, such as partnership, participation, and protection. 

## Acceptance Criteria

\`WORKING_AGREEMENTS.md\` file exists in the project, and includes the following:

- [ ] List of at least 5 agreements.
- [ ] Document how the actions reflect the principles from the Treaty of Waitangi, such as partnership, participation, and protection`,
  },
];

module.exports = {
  issues,
};
