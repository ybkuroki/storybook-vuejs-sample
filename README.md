# storybook-vuejs-sample

## Preface
This sample project uses [Storybook](https://github.com/storybooks/storybook) and [Vue.js](https://vuejs.org/index.html). It is based on [vue-kitchen-sink](https://github.com/storybooks/storybook/tree/master/examples/vue-kitchen-sink) sample.

### What is Storybook?
Storybook is the library for creating UI component catalogs. It can confirm the state and behavior of components.

It can see a list of stories in the left panel. And it can see components for each story in the right panel.

## Install
Perform the following steps:
1. Download and install [Node.js](https://nodejs.org/en/).
1. Download and install [Visual Studio Code(VS Code)](https://code.visualstudio.com/).
1. Install [vetur](https://github.com/vuejs/vetur) extension for VS Code.
1. Clone this repository.
1. Download and install npm packages.
    ```bash
    npm install
    ```

## Starting Server
Perform the following steps:
1. Start the development server.
    ```bash
    npm run storybook
    ```
1. When startup is complete, the console shows the following message:
    ```
    info Storybook started on => http://localhost:9009/
    ```
1. Access the follwing URL in the Chrome.  
    [http://localhost:9009](http://localhost:9009)

## Creating a Production Build
Perform the following command:
```bash
npm run build
```

## Project Map
The follwing figure is the map of this sample project.

```
- storybook_sample
  - .storybook            Contains configurations of StoryBook.
    - main.js            Define the add-on settings.
    - manager.js           Define the path of .story files.
    - preview.js          Define configurations for MDX.
  + public
  - src
    + components          Define components of Vue.js.
    + stories             Define a story of each component.
    - App.vue             Define a base view of this project.
    - index.js            Entry point.
  - .babelrc              Babel Configuration.
  - index.html
  - package.json          Define npm packages.
  - webpack.config.js     Define webpack configuration.
```

## Components
There are the following components in this sample.

|Component Name|File Name|Description|
|:---|:---|:---|
|Button|``commandbutton.vue``|The component that shows a button|
|Input|``inputbox.vue``|The component that shows a item name and input box.|
|Label|``labelgroup.vue``|The component that shows a item name and data.|
|Message|``message.vue``|The component that shows messages.|
|Modal|``modal.vue``|The component that shows a modal dialog.|
|Navigation Bar|``navbar.vue``|The component that shows a navigation bar.|
|Pagenation|``paginate.vue``|The component that shows a pagenation.|
|Select Box|``selectbox.vue``|The component that shows a select box.|

The pagination component refer to [this project](https://github.com/lokyoung/vuejs-paginate/blob/master/src/components/Paginate.vue).

## Libraries
This sample uses the following library.

|Library Name|Version|
|:---|:---:|
|Storybook for Vue|6.4.13|
|Addon Actions|6.4.13|
|Addon Controls|6.4.13|
|Addon Viewport|6.4.13|
|Addon Docs|6.4.13|
|semantic-ui-css|2.4.1|

## License
The License of this sample is *MIT License*.
