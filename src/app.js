const appData = {
  title: 'Indecision App',
  subTitle: 'Organize you work!'
};

const template = (
  <div>
    <h1>{appData.title}</h1>
    <p>{appData.subTitle}</p>
  </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);