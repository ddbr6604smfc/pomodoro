import React, { Component } from 'react';

export default class App extends Component {
  render() {
    const yellow = '#f0ad4e';
    const blue = '#336699';

    const styles = {
      panel: {
        container: {
          backgroundColor: yellow,
          margin: '30px 0',
        },

        body: {
          padding: '10px',
        },

        text: {
          color: 'white',
          fontSize: '1.1em',
          margin: '0',
        },
      },

      todos: {
        container: {
          margin: '20px 0',
        },

        text: {
          color: blue,
          fontSize: '0.9em',
          fontWeight: 'bold',
          letterSpacing: '0.2px',
        },

        add: {
          color: blue,
        },

        custom: {
          // paddingBottom: '100px',
        },
      },
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div style={styles.panel.container} className="panel panel-warning">
              <div style={styles.panel.body} className="panel-body">
                <p style={styles.panel.text}>2 Todos Pending</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <ul style={styles.todos.container} className="list-group">
              <button style={{...styles.todos.text, ...styles.todos.custom}} className="list-group-item">
                <div className="row">
                  <div className="col-xs-9">
                    Deploy latest `soccer` branch
                  </div>
                  <div className="col-xs-3">
                    <span className="label label-success">Finished</span>
                  </div>
                </div>
              </button>

              <button style={styles.todos.text} className="list-group-item">
                <div className="row">
                  <div className="col-xs-9">
                    signup for heroku
                  </div>
                  <div className="col-xs-3">
                    <span className="label label-warning">Pending</span>
                  </div>
                </div>
              </button>

              <button style={styles.todos.text} className="list-group-item">
                <div className="row">
                  <div className="col-xs-9">
                    Split up Routes & Containers
                  </div>
                  <div className="col-xs-3">
                    <span className="label label-warning">Pending</span>
                  </div>
                </div>
              </button>

              <button style={styles.todos.text} className="list-group-item">
                <div className="row">
                  <div className="col-xs-9">
                    Finish observables lesson
                  </div>
                  <div className="col-xs-3">
                    <span className="label label-danger">Stopped</span>
                  </div>
                </div>
              </button>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <button style={styles.todos.add} className="btn btn-default btn-block">
              <span className="glyphicon glyphicon-plus" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
