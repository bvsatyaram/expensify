const appData = {
  title: 'Visibility Toggle',
  showDetails: false,
  details: 'Hey. These are some details you can now see!'
};

const toggleDeatils = () => {
  appData.showDetails = !appData.showDetails;
  renderApp();
}

const appRoot = document.getElementById('app');

const renderApp = () => {
  const template = (
    <div>
      <h1>{appData.title}</h1>
      <button onClick={toggleDeatils}>
        { appData.showDetails ? 'Hide details' : 'Show details' }
      </button>
      {appData.showDetails && <p>{appData.details}</p>}
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderApp();
