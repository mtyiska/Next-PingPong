# Full Stack Cloud with Next.js, Tailwind, and AWS

## Getting Started - Creating the Next.js Application

To get started, clone the repo & change into the directory

```sh
git clone https://github.com/mtyiska/Next-PingPong.git

cd Next-PingPong
```

```sh
npm install

```

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

### Initializing the Project

add the amplify project

```sh
$ amplify env add

$amplify push
```

### Running dev

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
