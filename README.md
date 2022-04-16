# Full Stack Cloud with Next.js, Tailwind, and AWS

## Getting Started - Creating the Next.js Application

To get started, we first need to create a new Next.js project.

```bash
$ npx create-next-app amplify-next
```

Now change into the new app directory & install AWS Amplify, AWS Amplify UI React and a few other libraries we'll be using:

```bash
$ cd amplify-next
$ npm install aws-amplify @aws-amplify/ui-react react-simplemde-editor@4.1.5 react-markdown uuid
```

Since we will be using Tailwind, let's also install the tailwind dependencies:

```sh
npm install tailwindcss@latest postcss@latest autoprefixer@latest @tailwindcss/typography
```

Next, create the necessary Tailwind configuration files:

```sh
npx tailwindcss init -p
```

Finally, replace the styles in **styles/globals.css** with the following:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Installing the CLI & Initializing a new AWS Amplify Project

### Installing the CLI

Next, we'll install the AWS Amplify CLI:

```bash
# NPM
$ npm install -g @aws-amplify/cli

# cURL (Mac & Linux)
curl -sL https://aws-amplify.github.io/amplify-cli/install | bash && $SHELL

# cURL (Windows)
curl -sL https://aws-amplify.github.io/amplify-cli/install-win -o install.cmd && install.cmd
```

Now we need to configure the CLI with our credentials.

> If you'd like to see a video walkthrough of this configuration process, click [here](https://www.youtube.com/watch?v=fWbM5DLh25U).

```sh
$ amplify configure

- Specify the AWS Region: us-east-1 || us-west-2 || eu-central-1
- Specify the username of the new IAM user: amplify-cli-user
> In the AWS Console, click Next: Permissions, Next: Tags, Next: Review, & Create User to create the new IAM user. Then return to the command line & press Enter.
- Enter the access key of the newly created user:
? accessKeyId: (<YOUR_ACCESS_KEY_ID>)
? secretAccessKey: (<YOUR_SECRET_ACCESS_KEY>)
- Profile Name: amplify-cli-user
```

### Initializing A New Project

```bashin
$ amplify init

- Enter a name for the project: amplifynext
- Initialize the project with the above configuration? No
- Enter a name for the environment: dev
- Choose your default editor: Visual Studio Code (or your default editor)
- Please choose the type of app that youre building: javascript
- What javascript framework are you using: react
- Source Directory Path: . (this sets the base directory to the root directory)
- Distribution Directory Path: .next
- Build Command: npm run-script build
- Start Command: npm run-script start
- Select the authentication method you want to use: AWS profile
- Please choose the profile you want to use: amplify-cli-user (or your preferred profile)
```

The Amplify CLI has initialized a new project & you will see a new folder: \_

To view the status of the amplify project at any time, you can run the Amplify `status` command:

```sh
$ amplify status
```

To view the amplify project in the Amplify console at any time, run the `console` command:

```sh
$ amplify console
```

## Adding an AWS AppSync GraphQL API

To add a GraphQL API, we can use the following command:

```sh
$ amplify add api

The CLI should open this GraphQL schema in your text editor.

Update the schema:

After saving the schema, go back to the CLI and press enter.

### Deploying the API

To deploy the API, run the push command:

```

$ amplify push

Now the API is live and you can start interacting with it!

### Testing the API

To test it out we can use the GraphiQL editor in the AppSync dashboard. To open the AppSync dashboard, run the following command:

```sh
$ amplify console api

> Choose GraphQL
```

You should be able to view the list of posts. You will not yet be able to click on a post to navigate to the detail view, that is coming up later.

## Adding authentication

$ amplify add auth

To deploy the authentication service, you can run the push command:

```sh
$ amplify push

? Are you sure you want to continue? Yes
```

Next, run the app:

```sh
$ npm run dev
```

You should be able to create new posts and view them dynamically.

### Running a build

To run a build and test it out, run the following:

```sh
$ npm run build

$ npm start
```

### Deleting the Amplify project and all services

If you'd like to delete the entire project, you can run the `delete` command:

```sh
$ amplify delete
```
