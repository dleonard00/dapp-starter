# dapp-starter

[![Build Status](https://dev.azure.com/dougatmainframe/demo/_apis/build/status/dleonard00.dapp-starter)](https://dev.azure.com/dougatmainframe/demo/_build/latest?definitionId=2)


# Drizzle Truffle Box + Azure CI

So this box is a fork of the origional [Drizzle Truffle Box](https://github.com/truffle-box/drizzle-box). It comes with everything described below plus a few extra tests and acts as an example of how to plugin to an Azure DevOps Pipeline. See the section on `Remote DevOps` for instructions on how to connect your github repo to an Azure Pipeline.

This box comes with everything you need to start using smart contracts from a react app with Drizzle. It includes `drizzle`, `drizzle-react` and `drizzle-react-components` to give you a complete overview of Drizzle's capabilities.

## Installation

1. Install Truffle and Ganache CLI globally. If you prefer, the graphical version of Ganache works as well!
    ```javascript
    npm install -g truffle
    npm install -g ganache-cli
    ```

2. Download the box. This also takes care of installing the necessary dependencies.
    ```javascript
    mkdir dapp-starter
    cd dapp-starter
    truffle unbox dleonard00/dapp-starter
    ```

3. Run the development blockchain, we recommend passing in a blocktime. Otherwise, its difficult to track things like loading indicators because Ganache will mine instantly. 
    ```javascript
    // 3 second blocktime.
    ganache-cli -b 3
    ```

4. Compile and migrate the smart contracts, in a seperate terminal window. Note inside the truffle development console we don't preface commands with `truffle`.
    ```javascript
    truffle console
    compile
    migrate
    ```

5. Run the webpack server for front-end hot reloading (outside the truffle development console). Smart contract changes must be manually recompiled and migrated.
    ```javascript
    // Serves the front-end on http://localhost:3000
    npm run start
    ```
    > If you see an error message with the 🦊 fox. Ensure your metamask account is unlocked and you select `Localhost 8545` / `Private Network` as the network provider.

6. Truffle can run tests written in Solidity or JavaScript against your smart contracts. Note the command varies slightly if you're in or outside of the development console.
    ```javascript
    // If inside the development console.
    test

    // If outside the development console..
    truffle test
    ```

7. Jest is included for testing React components. Compile your contracts before running Jest, or you may receive some file not found errors.
    ```javascript
    // Run Jest outside of the development console for front-end component tests.
    npm run test
    ```

8. To build the application for production, use the build command. A production build will be in the build_webpack folder.
    ```javascript
    npm run build
    ```

## Remote DevOps

> Prerequisite: Ensure truffle is a dev dependency. If you pulled this repo then you can skip this step.
``` bash
npm install truffle --save-dev
```

### Connect and configure Azure pipeline via GitHub marketplace
https://github.com/marketplace/azure-pipelines

### Pipeline configuration
> located in `./azure-pipelines.yml`\

## CI Project Badge
* From the Azure devops dashboard select "Builds" in the left menu.
* Select your pipeline
* In the dropdown menu click "Status Badge"
* Copy the markdown generated for you.
* Commit the badge to your `README.md`
![](https://i.imgur.com/Cg9MW7o.png)

## FAQ

* __Where do I find more information about Drizzle?__

    Check out our [documentation](http://truffleframework.com/docs/drizzle/getting-started) or any of the three repositories ([`drizzle`](https://github.com/trufflesuite/drizzle), [`drizzle-react`](https://github.com/trufflesuite/drizzle-react), [`drizzle-react-components`](https://github.com/trufflesuite/drizzle-react-components)).

* __Why is there both a truffle.js file and a truffle-config.js file?__

    `truffle-config.js` is a copy of `truffle.js` for compatibility with Windows development environments. Feel free to delete it if it's irrelevant to your platform.

* __Where is my production build?__

    The production build will be in the `build_webpack` folder. This is because Truffle outputs contract compilations to the `build` folder.

* __Where can I find more documentation?__

    This box is a marriage of [Truffle](http://truffleframework.com/) and a React setup created with [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md). Either one would be a great place to start!
