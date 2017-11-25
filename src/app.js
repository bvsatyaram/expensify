const appData = {
  title: 'Indecision App',
  subTitle: 'Organize your work!',
  options: ['Options 1', 'Options 2']
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  if (option) {
    appData.options.push(option);
  }
  e.target.elements.option.value = '';
  renderApp();
};

const clearOptions = (e) => {
  e.preventDefault();

  appData.options = [];
  renderApp();
}

const appRoot = document.getElementById('app');

const renderApp = () => {
  const template = (
    <div>
      <h1>{appData.title}</h1>
      <p>{appData.subTitle}</p>
      <ul>
        {
          appData.options.map((option, index) => {
            return <li key={'option-' + index}>{option}</li>
          })
        }
      </ul>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' autoFocus />
        <button type='submit'>Add Option</button>
        <button onClick={clearOptions}>Remove All</button>
      </form>
    </div>
  );
  
  ReactDOM.render(template, appRoot);
}

renderApp();
